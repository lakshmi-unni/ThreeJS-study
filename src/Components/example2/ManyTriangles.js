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

const ManyTriangles = () => {
  return (
    <>
      <Triangle position={[-2, 0, 0]} color="red" />
      <Triangle position={[2, 0, 0]} color="green" />
      <Triangle position={[0, 2, 0]} color="blue" />
    </>
  );
};

export default ManyTriangles;
