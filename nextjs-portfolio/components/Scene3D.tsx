'use client';

import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshTransmissionMaterial, Environment, Sparkles, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveDiamond() {
  const diamondRef = useRef<THREE.Mesh>(null);

  const diamondGeometry = new THREE.OctahedronGeometry(1, 0);

  return (
    <mesh ref={diamondRef} geometry={diamondGeometry} scale={[2, 2, 2]}>
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.1}
        thickness={0.5}
        ior={2.4}
        chromaticAberration={0.5}
        anisotropy={1}
        distortion={0.2}
        distortionScale={0.4}
        temporalDistortion={0}
        color="#6366f1"
        attenuationDistance={0.5}
        attenuationColor="#8b5cf6"
      />
    </mesh>
  );
}

function GlowingSpheres() {
  return (
    <>
      <Sphere args={[0.3, 32, 32]} position={[3, 2, -2]}>
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.35}
          distort={0.2}
          speed={0}
        />
      </Sphere>

      <Sphere args={[0.25, 32, 32]} position={[-3, -1, -2]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.35}
          distort={0.2}
          speed={0}
        />
      </Sphere>

      <Sphere args={[0.2, 32, 32]} position={[-2, 2, -1]}>
        <MeshDistortMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.35}
          distort={0.2}
          speed={0}
        />
      </Sphere>
    </>
  );
}

function ParticleRing({ initialAngleDeg = 0 }: { initialAngleDeg?: number }) {
  const particleCount = 50;
  const radius = 3.5;
  const particles = [] as JSX.Element[];
  const initialAngle = THREE.MathUtils.degToRad(initialAngleDeg);

  for (let i = 0; i < particleCount; i++) {
    const angle = initialAngle + (i / particleCount) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    particles.push(
      <mesh key={i} position={[x, y, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.8}
        />
      </mesh>
    );
  }

  return <group>{particles}</group>;
}

export default function Scene3D() {
  return (
    <div 
      className="w-full h-full"
      style={{ 
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 6],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          width: '100%',
          height: '100%',
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, 0, -5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[10, 0, -5]} intensity={0.8} color="#6366f1" />
          <spotLight position={[0, 10, 0]} intensity={0.5} color="#f59e0b" />
          <spotLight position={[0, -10, 0]} intensity={0.3} color="#06b6d4" />
          
          {/* Scene contents centered within this canvas container */}
          <CenteredScene />
          
          {/* Environment Reflection */}
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function CenteredScene() {
  return (
    <>
      {/* Entire 3D composition centered and moderately scaled to fit container */}
      <group position={[0, 0, 0]} scale={[0.85, 0.85, 0.85]}>
        {/* Main Diamond */}
        <InteractiveDiamond />

        {/* Glowing Orbs */}
        <GlowingSpheres />

  {/* Particle Ring (start at 0° on the right) */}
  <ParticleRing initialAngleDeg={0} />

        {/* Sparkles Effect - static */}
        <Sparkles count={140} scale={12} size={3.5} speed={0} opacity={0.7} color="#6366f1" />
        <Sparkles count={70} scale={10} size={3} speed={0} opacity={0.55} color="#f59e0b" />
        <Sparkles count={50} scale={9} size={2.5} speed={0} opacity={0.45} color="#8b5cf6" />
      </group>

      {/* Controls: rotate-only, no zoom, no pan, smooth damping; auto-rotate spinner */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        rotateSpeed={0.9}
        enableDamping
        dampingFactor={0.1}
        minPolarAngle={0.01}
        maxPolarAngle={Math.PI - 0.01}
        target={[0, 0, 0]}
      />
    </>
  );
}
