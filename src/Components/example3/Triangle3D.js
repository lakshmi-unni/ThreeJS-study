import React from 'react';
import * as THREE from 'three';

const Triangle3D = () => {
  return (
    <mesh>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array([  
            0, 1, 0,  // top vertex
            -1, -1, 1, // front-left vertex
            1, -1, 1,  // front-right vertex

            0, 1, 0,  // top vertex
            1, -1, 1,  // front-right vertex
            1, -1, -1, // back-right vertex

            0, 1, 0,  // top vertex
            1, -1, -1, // back-right vertex
            -1, -1, -1, // back-left vertex

            0, 1, 0,  // top vertex
            -1, -1, -1, // back-left vertex
            -1, -1, 1  // front-left vertex
          ])}
          itemSize={3}
          count={12}
        />

        <bufferAttribute
          attach="attributes-color"
          array={new Float32Array([  
            1, 0, 0,  1, 0, 0,  1, 0, 0,  // red
            0, 1, 0,  0, 1, 0,  0, 1, 0,  // green
            0, 0, 1,  0, 0, 1,  0, 0, 1,  // blue
            1, 1, 0,  1, 1, 0,  1, 1, 0   // yellow
          ])}
          itemSize={3}
          count={12}
        />
      </bufferGeometry>
      <meshBasicMaterial vertexColors={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Triangle3D;
