"use client";

export default function Lights() {
  return (
    <>
      {/* Soft global fill */}
      <ambientLight intensity={0.14} />

      {/* Key light — top-right, warm-violet */}
      <pointLight position={[4, 5, 3]} intensity={0.9} color="#818cf8" distance={18} decay={2} />

      {/* Rim / fill — cool blue from behind-left */}
      <pointLight position={[-3, 2, -4]} intensity={0.5} color="#60a5fa" distance={16} decay={2} />

      {/* Under-fill — purple, centred on right for particle glow */}
      <pointLight position={[1.5, -2, 1]} intensity={0.6} color="#7c3aed" distance={10} decay={2} />
    </>
  );
}
