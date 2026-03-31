"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Tuning ─────────────────────────────── */
const N = 150;           // particle count (was 170)
const MAX_DIST = 2.2;    // connection threshold (world units)
const SPEED = 0.0035;    // max velocity per axis
const BX = 3.8;          // half-extents of bounding box (x)
const BY = 3.6;          // half-extents (y)
const BZ = 2.8;          // half-extents (z)
const MOUSE_RADIUS = 2.2; // repulsion radius
const MOUSE_STRENGTH = 0.0005;
const LINE_UPDATE_INTERVAL = 3; // rebuild lines every N frames

/* ─── Spatial grid for fast neighbour lookups ─── */
const CELL = MAX_DIST;   // cell size = connection distance
const GX = Math.ceil((BX * 2) / CELL) + 1;
const GY = Math.ceil((BY * 2) / CELL) + 1;
const GZ = Math.ceil((BZ * 2) / CELL) + 1;
const GRID_SIZE = GX * GY * GZ;
const gridCells: Int16Array = new Int16Array(GRID_SIZE * 8); // max 8 particles per cell
const gridCounts: Uint8Array = new Uint8Array(GRID_SIZE);

function cellIndex(x: number, y: number, z: number): number {
  const cx = Math.floor((x + BX) / CELL) | 0;
  const cy = Math.floor((y + BY) / CELL) | 0;
  const cz = Math.floor((z + BZ) / CELL) | 0;
  return (cx * GY + cy) * GZ + cz;
}

// Projection helper (reused across frames)
const _v = new THREE.Vector3();
const _mouse3D = new THREE.Vector3();

export default function ParticleNetwork() {
  const { camera, viewport } = useThree();
  const frameCount = useRef(0);

  // Responsive: shift group left on narrow (tablet) viewports so particles stay in-frame
  const groupX = Math.min(1.5, Math.max(0, (viewport.width - 2 * BX) * 0.5));

  const { pos, vel, linPos, pointsGeo, linesGeo } = useMemo(() => {
    const pos = new Float32Array(N * 3);
    const vel = new Float32Array(N * 3);
    const maxPairs = Math.floor((N * (N - 1)) / 2);
    const linPos = new Float32Array(maxPairs * 6);

    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * BX * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * BY * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * BZ * 2;

      const angle = Math.random() * Math.PI * 2;
      const speed = (0.4 + Math.random() * 0.6) * SPEED;
      vel[i * 3]     = Math.cos(angle) * speed;
      vel[i * 3 + 1] = (Math.random() - 0.5) * SPEED * 2;
      vel[i * 3 + 2] = Math.sin(angle) * SPEED * 0.5;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.BufferAttribute(linPos, 3));
    linesGeo.setDrawRange(0, 0);

    return { pos, vel, linPos, pointsGeo, linesGeo };
  }, []);

  useFrame(({ pointer }) => {
    /* ── Project mouse to z=0 plane in world-space ── */
    _v.set(pointer.x, pointer.y, 0.5).unproject(camera);
    _v.sub(camera.position).normalize();
    const t = -camera.position.z / _v.z;
    _mouse3D.copy(camera.position).addScaledVector(_v, t);
    // Offset into the group's local space (centered at x=1.5)
    _mouse3D.x -= 1.5;

    /* ── Move particles ── */
    for (let i = 0; i < N; i++) {
      const xi = i * 3, yi = xi + 1, zi = xi + 2;

      // Soft mouse repulsion
      const dx = pos[xi] - _mouse3D.x;
      const dy = pos[yi] - _mouse3D.y;
      const dz = pos[zi] - _mouse3D.z;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0.0001) {
        const inv = MOUSE_STRENGTH / distSq;
        vel[xi] += dx * inv;
        vel[yi] += dy * inv;
        vel[zi] += dz * inv;
      }

      // Apply velocity
      pos[xi] += vel[xi];
      pos[yi] += vel[yi];
      pos[zi] += vel[zi];

      // Damp & bounce
      vel[xi] *= 0.999;
      vel[yi] *= 0.999;
      vel[zi] *= 0.999;

      if (pos[xi] > BX) { pos[xi] = BX;  vel[xi] *= -1; }
      if (pos[xi] < -BX) { pos[xi] = -BX; vel[xi] *= -1; }
      if (pos[yi] > BY) { pos[yi] = BY;  vel[yi] *= -1; }
      if (pos[yi] < -BY) { pos[yi] = -BY; vel[yi] *= -1; }
      if (pos[zi] > BZ) { pos[zi] = BZ;  vel[zi] *= -1; }
      if (pos[zi] < -BZ) { pos[zi] = -BZ; vel[zi] *= -1; }
    }

    (pointsGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    /* ── Build line segments — throttled with spatial grid ── */
    frameCount.current++;
    if (frameCount.current % LINE_UPDATE_INTERVAL !== 0) return;

    // Reset grid
    gridCounts.fill(0);

    // Assign particles to grid cells
    for (let i = 0; i < N; i++) {
      const ci = cellIndex(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      if (ci >= 0 && ci < GRID_SIZE) {
        const cnt = gridCounts[ci];
        if (cnt < 8) {
          gridCells[ci * 8 + cnt] = i;
          gridCounts[ci]++;
        }
      }
    }

    let lc = 0;
    const dSqMax = MAX_DIST * MAX_DIST;

    // Check only neighbouring cells (3x3x3)
    for (let i = 0; i < N; i++) {
      const px = pos[i * 3], py = pos[i * 3 + 1], pz = pos[i * 3 + 2];
      const cx0 = Math.floor((px + BX) / CELL) | 0;
      const cy0 = Math.floor((py + BY) / CELL) | 0;
      const cz0 = Math.floor((pz + BZ) / CELL) | 0;

      for (let ox = -1; ox <= 1; ox++) {
        const cxn = cx0 + ox;
        if (cxn < 0 || cxn >= GX) continue;
        for (let oy = -1; oy <= 1; oy++) {
          const cyn = cy0 + oy;
          if (cyn < 0 || cyn >= GY) continue;
          for (let oz = -1; oz <= 1; oz++) {
            const czn = cz0 + oz;
            if (czn < 0 || czn >= GZ) continue;
            const ci = (cxn * GY + cyn) * GZ + czn;
            const cnt = gridCounts[ci];
            for (let k = 0; k < cnt; k++) {
              const j = gridCells[ci * 8 + k];
              if (j <= i) continue; // avoid duplicates
              const dx = px - pos[j * 3];
              const dy = py - pos[j * 3 + 1];
              const dz = pz - pos[j * 3 + 2];
              if (dx * dx + dy * dy + dz * dz < dSqMax) {
                const b = lc * 6;
                linPos[b]     = px;           linPos[b + 1] = py;           linPos[b + 2] = pz;
                linPos[b + 3] = pos[j * 3];  linPos[b + 4] = pos[j * 3 + 1]; linPos[b + 5] = pos[j * 3 + 2];
                lc++;
              }
            }
          }
        }
      }
    }

    (linesGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    linesGeo.setDrawRange(0, lc * 2);
  });

  return (
    /* Responsive: right-shifted on desktop, centered on tablets */
    <group position={[groupX, 0, 0]}>
      {/* Nodes */}
      <points geometry={pointsGeo}>
        <pointsMaterial
          size={0.05}
          color="#818cf8"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Edges */}
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
