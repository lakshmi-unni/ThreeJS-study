import React from 'react';
import * as THREE from 'three';

const Triangles = () => {
  return (
    <mesh>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array([  
            0, 1, 0,  // top vertex
            -1, -1, 0, // bottom left vertex
            1, -1, 0  // bottom right vertex
          ])}
          itemSize={3}
          count={3}
        />

        <bufferAttribute
          attach="attributes-color"
          array={new Float32Array([  
            1, 0, 0,  // red
            0, 1, 0,  // green
            0, 0, 1   // blue
          ])}
          itemSize={3}
          count={3}
        />
      </bufferGeometry>
      <meshBasicMaterial vertexColors={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Triangles;