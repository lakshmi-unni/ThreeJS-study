import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Pyramid3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const updateRendererSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    updateRendererSize();
    window.addEventListener('resize', updateRendererSize);

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Pyramid Geometry (Square base with 4 triangular faces)
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Base vertices (square)
      -2, 0, -2,  // Bottom left
      2, 0, -2,   // Bottom right
      2, 0, 2,    // Top right
      -2, 0, 2,   // Top left

      // Peak vertex
      0, 4, 0,    // Apex
    ]);

    // Faces (triangles made from the base and the apex)
    const indices = [
      0, 1, 4, // front face
      1, 2, 4, // right face
      2, 3, 4, // back face
      3, 0, 4, // left face
      0, 1, 2, // bottom face (optional for showing base)
      2, 3, 0  // bottom face (optional for showing base)
    ];

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    const material = new THREE.MeshStandardMaterial({ color: 0x1e90ff, wireframe: false });
    const pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      pyramid.rotation.y += 0.01;
      pyramid.rotation.x += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateRendererSize);
      // Check if mountRef is still valid before removing renderer
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-black via-blue-600 to-indigo-300" ref={mountRef}></div>
  );
};

export default Pyramid3D;
