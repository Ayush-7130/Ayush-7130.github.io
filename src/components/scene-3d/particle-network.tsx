"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Tuning ─────────────────────────────── */
const N = 170;           // particle count
const MAX_DIST = 2.6;    // connection threshold (world units)
const SPEED = 0.0035;    // max velocity per axis
const BX = 3.8;          // half-extents of bounding box (x)
const BY = 3.6;          // half-extents (y)
const BZ = 2.8;          // half-extents (z)
const MOUSE_RADIUS = 2.2; // repulsion radius
const MOUSE_STRENGTH = 0.0005;

// Projection helper (reused across frames)
const _v = new THREE.Vector3();
const _mouse3D = new THREE.Vector3();

export default function ParticleNetwork() {
  const { camera } = useThree();

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

    /* ── Build line segments for nearby pairs ── */
    let lc = 0;
    const dSqMax = MAX_DIST * MAX_DIST;

    for (let i = 0; i < N - 1; i++) {
      const ix = pos[i * 3], iy = pos[i * 3 + 1], iz = pos[i * 3 + 2];
      for (let j = i + 1; j < N; j++) {
        const dx = ix - pos[j * 3];
        const dy = iy - pos[j * 3 + 1];
        const dz = iz - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < dSqMax) {
          const b = lc * 6;
          linPos[b]     = ix;           linPos[b + 1] = iy;           linPos[b + 2] = iz;
          linPos[b + 3] = pos[j * 3];  linPos[b + 4] = pos[j * 3 + 1]; linPos[b + 5] = pos[j * 3 + 2];
          lc++;
        }
      }
    }

    (linesGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    linesGeo.setDrawRange(0, lc * 2);
  });

  return (
    /* Centered on the right portion of the viewport */
    <group position={[1.5, 0, 0]}>
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
