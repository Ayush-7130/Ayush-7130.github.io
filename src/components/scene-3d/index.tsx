"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import Lights from "./lights";
import ParticleNetwork from "./particle-network";

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 44 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
    >
      <fog attach="fog" args={["#050510", 14, 55]} />

      <Suspense fallback={null}>
        {/* Distant starfield */}
        <Stars radius={90} depth={50} count={3500} factor={2.5} saturation={0} fade speed={0.4} />

        {/* Lighting */}
        <Lights />

        {/* Particle network — right side */}
        <ParticleNetwork />

        {/* Environment map for orb reflections */}
        <Environment preset="night" />

        {/* Cinematic bloom */}
        <EffectComposer enableNormalPass={false}>
          <Bloom
            luminanceThreshold={0.55}
            mipmapBlur
            intensity={0.9}
            levels={5}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
