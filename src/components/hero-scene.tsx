"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Panel({ position, scale }: { position: [number, number, number]; scale: [number, number, number] }) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.35 + position[0]) * 0.12;
    ref.current.rotation.x = Math.cos(clock.elapsedTime * 0.28 + position[1]) * 0.05;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.45}>
      <RoundedBox ref={ref} args={scale} radius={0.08} smoothness={8} position={position}>
        <meshStandardMaterial color="#172033" roughness={0.55} metalness={0.2} />
      </RoundedBox>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-y-24 right-0 hidden w-[48vw] opacity-70 lg:block">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 36 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.9} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <Panel position={[-1.7, 0.1, 0]} scale={[1.65, 2.65, 0.12]} />
        <Panel position={[0.35, -0.12, -0.6]} scale={[1.95, 3.2, 0.12]} />
        <Panel position={[2.25, 0.05, -1.2]} scale={[1.3, 2.35, 0.12]} />
      </Canvas>
    </div>
  );
}
