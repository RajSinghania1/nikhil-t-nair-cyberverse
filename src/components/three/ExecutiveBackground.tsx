import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Subtle geometric grid
function GeometricGrid() {
  const gridRef = useRef<THREE.LineSegments>(null);
  
  const gridPositions = useMemo(() => {
    const positions = [];
    const size = 20;
    const divisions = 40;
    const step = size / divisions;
    
    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = (i * step) - size / 2;
      positions.push(-size / 2, y, 0, size / 2, y, 0);
    }
    
    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = (i * step) - size / 2;
      positions.push(x, -size / 2, 0, x, size / 2, 0);
    }
    
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <lineSegments ref={gridRef} position={[0, 0, -5]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={gridPositions.length / 3}
          array={gridPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#B8860B"
        transparent
        opacity={0.1}
      />
    </lineSegments>
  );
}

// Elegant floating elements
function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 0.3 + i * 2) * 0.5;
        child.rotation.y = state.clock.elapsedTime * 0.1 * (1 + i * 0.1);
        child.rotation.x = state.clock.elapsedTime * 0.05 * (1 + i * 0.05);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Subtle geometric shapes */}
      <mesh position={[-6, 2, -3]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial 
          color="#B8860B" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      <mesh position={[6, -1, -4]}>
        <octahedronGeometry args={[0.2]} />
        <meshBasicMaterial 
          color="#CD853F" 
          wireframe 
          transparent 
          opacity={0.25} 
        />
      </mesh>
      
      <mesh position={[0, 3, -6]}>
        <tetrahedronGeometry args={[0.25]} />
        <meshBasicMaterial 
          color="#B8860B" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>
    </group>
  );
}

// Professional background with minimal elements
export default function ExecutiveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <GeometricGrid />
        <FloatingElements />
        
        {/* Subtle ambient lighting */}
        <ambientLight intensity={0.1} />
        
        {/* Professional directional light */}
        <directionalLight
          position={[5, 5, 2]}
          intensity={0.2}
          color="#B8860B"
        />
      </Canvas>
    </div>
  );
}