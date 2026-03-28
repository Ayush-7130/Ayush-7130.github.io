"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

export default function SpaceBackground() {
  const dustRef = useRef<THREE.Points>(null);

  // Generate random positions + colors for colored stardust / nebula particles
  const [positions, colors] = useMemo(() => {
    const particleCount = 600;
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const colorPrimary = new THREE.Color("#4db8ff");
    const colorSecondary = new THREE.Color("#8a2be2");

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 15;

      const mixedColor = colorPrimary
        .clone()
        .lerp(colorSecondary, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  // Slowly rotate the dust field for a cinematic drifting feel
  useFrame((_, delta) => {
    if (dustRef.current) {
      dustRef.current.rotation.y -= delta * 0.02;
      dustRef.current.rotation.x -= delta * 0.008;
    }
  });

  return (
    <>
      {/* Distant starfield */}
      <Stars
        radius={80}
        depth={50}
        count={5000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Colored stardust / nebula particles */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.35}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
