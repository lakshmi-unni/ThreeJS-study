import React from 'react';
import { Canvas } from '@react-three/fiber'; // Import Canvas from React Three Fiber
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls to allow camera movement
import Triangles from './Triangles'; // Import the Triangles component that will render the 3D triangle

const Example1 = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      {/* This is the main container for your 3D scene. It initializes a Three.js scene behind the scenes.
       The camera prop defines the initial position of the camera in the 3D space ([0, 0, 5] means the camera is placed 5 units along the z-axis). */}
      <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
        {/* Ambient Light - The ambient light ensures that the triangle is visible.*/}
 
        <ambientLight intensity={0.5} /> 
        {/* Triangle Mesh */}
        <Triangles />
        {/* Orbit Controls */}
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Example1;
// In this example, we have created a new component named Example1. This component will render a 3D triangle using Three.js and React Three Fiber. The component imports the Canvas and OrbitControls components from React Three Fiber and the Triangles component that will render the 3D triangle. 



// import React from 'react';
// import * as THREE from 'three';

// const Triangles = () => {
//   return (
//     <mesh>
//       <bufferGeometry attach="geometry">
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

// import React from 'react';
// import * as THREE from 'three';

// const Triangles = () => {
//   return (
//     <mesh>
//       <bufferGeometry attach="geometry">
//         <bufferAttribute
//           attach="attributes-position"
//           array={new Float32Array([  
//             0, 1, 0,  // top vertex
//             -1, -1, 1, // front-left vertex
//             1, -1, 1,  // front-right vertex

//             0, 1, 0,  // top vertex
//             1, -1, 1,  // front-right vertex
//             1, -1, -1, // back-right vertex

//             0, 1, 0,  // top vertex
//             1, -1, -1, // back-right vertex
//             -1, -1, -1, // back-left vertex

//             0, 1, 0,  // top vertex
//             -1, -1, -1, // back-left vertex
//             -1, -1, 1  // front-left vertex
//           ])}
//           itemSize={3}
//           count={12}
//         />

//         <bufferAttribute
//           attach="attributes-color"
//           array={new Float32Array([  
//             1, 0, 0,  1, 0, 0,  1, 0, 0,  // red
//             0, 1, 0,  0, 1, 0,  0, 1, 0,  // green
//             0, 0, 1,  0, 0, 1,  0, 0, 1,  // blue
//             1, 1, 0,  1, 1, 0,  1, 1, 0   // yellow
//           ])}
//           itemSize={3}
//           count={12}
//         />
//       </bufferGeometry>
//       <meshBasicMaterial vertexColors={true} side={THREE.DoubleSide} />
//     </mesh>
//   );
// };

// export default Triangles;
