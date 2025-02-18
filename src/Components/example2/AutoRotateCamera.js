// AutoRotateCamera.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AutoRotateCamera = () => {
  const cameraRef = useRef();

  // Rotate camera continuously
  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const t = clock.getElapsedTime(); // Time in seconds
      cameraRef.current.position.x = Math.sin(t) * 10; // X position for 360 rotation
      cameraRef.current.position.z = Math.cos(t) * 10; // Z position for 360 rotation
      cameraRef.current.lookAt(0, 0, 0); // Always look at the center of the scene
    }
  });

  return <perspectiveCamera ref={cameraRef} position={[10, 0, 10]} />;
};

export default AutoRotateCamera;
