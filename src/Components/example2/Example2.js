import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ManyTriangles from './ManyTriangles';

const Example2 = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-500 to-yellow-600 flex items-center justify-center overflow-hidden">
      <div className="w-full h-full max-w-full max-h-full">
        <Canvas>
          {/* Ambient Light */}
          <ambientLight intensity={0.5} />
          
          {/* Render Triangles */}
          <ManyTriangles />
          {/* Orbit Controls */}
          <OrbitControls enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Example2;
