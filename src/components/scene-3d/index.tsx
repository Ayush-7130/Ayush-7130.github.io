"use client";

import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import Lights from "./lights";
import ParticleNetwork from "./particle-network";

// Suppress THREE.Clock deprecation fired by R3F internals.
// R3F v9 still creates a Clock; Three.js ≥0.183 deprecated it in favour of Timer.
// A future R3F release will migrate — until then silence the one-time warning.
const _origWarn = console.warn;
console.warn = (...args: unknown[]) => {
  if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
  _origWarn.apply(console, args);
};

export default function Scene3D() {
  const [dprCeil, setDprCeil] = useState(1.25);

  const onDecline = useCallback(() => {
    setDprCeil((prev) => Math.max(0.8, prev - 0.25));
  }, []);

  const onIncline = useCallback(() => {
    setDprCeil((prev) => Math.min(1.5, prev + 0.15));
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 44 }}
      dpr={[0.75, dprCeil]}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      // Skip re-renders when tab is hidden
      frameloop="always"
    >
      <fog attach="fog" args={["#050510", 14, 55]} />

      <Suspense fallback={null}>
        {/* Adaptive resolution & event throttling */}
        <PerformanceMonitor onDecline={onDecline} onIncline={onIncline} />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />

        {/* Distant starfield — reduced count */}
        <Stars radius={90} depth={50} count={2000} factor={2.5} saturation={0} fade speed={0.4} />

        {/* Lighting */}
        <Lights />

        {/* Particle network — right side */}
        <ParticleNetwork />

        {/* Cinematic bloom — fewer levels for perf */}
        <EffectComposer enableNormalPass={false} multisampling={0}>
          <Bloom
            luminanceThreshold={0.6}
            mipmapBlur
            intensity={0.8}
            levels={3}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
