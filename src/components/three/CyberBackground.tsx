import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Particle network component
function ParticleNetwork() {
  const particlesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate particle positions
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  // Generate line connections
  const linePositions = useMemo(() => {
    const positions = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const x1 = particlePositions[i * 3];
      const y1 = particlePositions[i * 3 + 1];
      const z1 = particlePositions[i * 3 + 2];
      
      for (let j = i + 1; j < particleCount; j++) {
        const x2 = particlePositions[j * 3];
        const y2 = particlePositions[j * 3 + 1];
        const z2 = particlePositions[j * 3 + 2];
        
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
        if (distance < 5) {
          positions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    
    return new Float32Array(positions);
  }, [particlePositions]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ff41"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00ff41"
          transparent
          opacity={0.2}
        />
      </lineSegments>
    </group>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 2;
        child.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1);
        child.rotation.z = state.clock.elapsedTime * (0.3 + i * 0.05);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe cube */}
      <mesh position={[-5, 0, -3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.6} />
      </mesh>
      
      {/* Wireframe octahedron */}
      <mesh position={[5, 2, -5]}>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </mesh>
      
      {/* Wireframe torus */}
      <mesh position={[0, -3, -4]}>
        <torusGeometry args={[1, 0.3, 8, 16]} />
        <meshBasicMaterial color="#00ff41" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Main background component
export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ParticleNetwork />
        <FloatingShapes />
        
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Directional light */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.5}
          color="#00ff41"
        />
      </Canvas>
    </div>
  );
}