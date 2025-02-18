import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import Triangle3D from './Triangle3D';

const AnimatedTriangles = animated(Triangle3D);

const MovingTriangles = () => {
  const meshRef = useRef();

  // Continuous rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02; // Rotates 360° over time
    }
  });

  // Spring animation for movement
  const { position } = useSpring({
    from: { position: [-2, 0, 0] }, // Start (A)
    to: { position: [2, 0, 0] }, // End (B)
    config: { duration: 2000 }, // Move duration
    loop: { reverse: true }, // Moves back and forth
  });

  return <AnimatedTriangles ref={meshRef} position={position} />;
};

export default MovingTriangles;
