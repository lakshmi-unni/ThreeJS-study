// import React from 'react';
// import * as THREE from 'three';

// const Triangles = () => {
//   return (
//     <mesh>
//       <bufferGeometry attach="geometry" >
//         <bufferAttribute
//           attach="attributes-position"
//           array={new Float32Array([  
//             0, 1, 0,  // top vertex
//             -1, -1, 0, // bottom left vertex
//             1, -1, 0  // bottom right vertex
//           ])}
//           itemSize={3}
//           count={3}
//         />

//         <bufferAttribute
//           attach="attributes-color"
//           array={new Float32Array([  
//             1, 0, 0,  // red
//             0, 1, 0,  // green
//             0, 0, 1   // blue
//           ])}
//           itemSize={3}
//           count={3}
//         />
//       </bufferGeometry>
//       <meshBasicMaterial vertexColors={true} side={THREE.DoubleSide} />
//     </mesh>
//   );
// };

// export default Triangles;


import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Triangles = () => {
  const meshRef = useRef();
  let angle = 0;

  useFrame(() => {
    if (meshRef.current) {
      angle += 0.02;
      const radius = window.innerWidth < 768 ? 1 : 2;
      meshRef.current.position.x = Math.cos(angle) * radius;
      meshRef.current.position.y = Math.sin(angle) * radius;
    }
  });

  return (
    <mesh ref={meshRef}>
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
