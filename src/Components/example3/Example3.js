import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MovingTriangles from './MovingTriangles';

const Example3 = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />
        {/* Moving Triangle Mesh */}
        <MovingTriangles />
        {/* Orbit Controls */}
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Example3;
