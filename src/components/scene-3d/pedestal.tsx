"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Pedestal() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Pulse glow rings with staggered phases
    [ring1Ref, ring2Ref, ring3Ref].forEach((ref, i) => {
      if (ref.current) {
        const mat = ref.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 0.8 + Math.sin(t * 1.2 + i * 0.7) * 0.3;
      }
    });
  });

  return (
    <group position={[0, -0.85, 0]}>
      {/* Main pedestal disc — slim dark metallic */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[1.1, 1.2, 0.12, 64]} />
        <meshStandardMaterial
          color="#0a0f1e"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Reflective top surface */}
      <mesh position={[0, 0.07, 0]} receiveShadow>
        <cylinderGeometry args={[1.05, 1.05, 0.01, 64]} />
        <meshPhysicalMaterial
          color="#0c1025"
          metalness={0.95}
          roughness={0.1}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Outer glow ring */}
      <mesh ref={ring1Ref} position={[0, 0.08, 0]}>
        <torusGeometry args={[1.05, 0.02, 16, 128]} />
        <meshStandardMaterial
          emissive="#6366f1"
          emissiveIntensity={1.0}
          color="#000000"
          toneMapped={false}
        />
      </mesh>

      {/* Middle glow ring */}
      <mesh ref={ring2Ref} position={[0, 0.08, 0]}>
        <torusGeometry args={[0.75, 0.015, 16, 100]} />
        <meshStandardMaterial
          emissive="#8b5cf6"
          emissiveIntensity={0.7}
          color="#000000"
          toneMapped={false}
        />
      </mesh>

      {/* Inner glow ring */}
      <mesh ref={ring3Ref} position={[0, 0.08, 0]}>
        <torusGeometry args={[0.45, 0.012, 16, 80]} />
        <meshStandardMaterial
          emissive="#a78bfa"
          emissiveIntensity={0.5}
          color="#000000"
          toneMapped={false}
        />
      </mesh>

      {/* Soft glow beneath pedestal */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]}>
        <ringGeometry args={[0.5, 1.3, 64]} />
        <meshStandardMaterial
          emissive="#4f46e5"
          emissiveIntensity={0.3}
          color="#000000"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>

      {/* Shadow ground plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.15, 0]}
        receiveShadow
      >
        <circleGeometry args={[4, 64]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </group>
  );
}
