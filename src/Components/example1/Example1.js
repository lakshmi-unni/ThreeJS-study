import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Triangles from './Triangles';

const Example1 = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-500 to-black flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />
        {/* Triangle Mesh */}
        <Triangles />
        {/* Orbit Controls */}
        <OrbitControls enableZoom={true} en enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Example1;