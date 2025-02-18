import React from 'react';
import * as THREE from 'three';

const Triangle = ({ position, color }) => {
  // Create points for the triangle (as before)
  const points = [
    new THREE.Vector3(0, 1, 0),    // top vertex
    new THREE.Vector3(-1, -1, 0),  // bottom left vertex
    new THREE.Vector3(1, -1, 0),   // bottom right vertex
  ];

  // Create geometry using the points
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <mesh position={position}>
      <bufferGeometry attach="geometry" {...geometry} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};

const ManyTriangles2 = () => {
  return (
    <>
      <Triangle position={[-2, 0, 0]} color="red" />
      <Triangle position={[2, 0, 0]} color="green" />
      <Triangle position={[0, 2, 0]} color="blue" />
    </>
  );
};

export default ManyTriangles2;
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import * as THREE from 'three';

// // Triangle component
// const Triangle = ({ position, color }) => {
//   const points = [
//     new THREE.Vector3(0, 1, 0),    // top vertex
//     new THREE.Vector3(-1, -1, 0),  // bottom left vertex
//     new THREE.Vector3(1, -1, 0),   // bottom right vertex
//   ];

//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   return (
//     <mesh position={position}>
//       <bufferGeometry attach="geometry" {...geometry} />
//       <meshBasicMaterial color={color} side={THREE.DoubleSide} />
//     </mesh>
//   );
// };

// // Many Triangles Component
// const ManyTriangles2 = () => {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       <Triangle position={[-2, 0, 0]} color="red" />
//       <Triangle position={[2, 0, 0]} color="green" />
//       <Triangle position={[0, 2, 0]} color="blue" />
//     </Canvas>
//   );
// };

// export default ManyTriangles2;
