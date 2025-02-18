import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Welcome to Three.js Examples that I have tried.<br/> <span className='text-xl text-gray-500'>Click the buttons to see the examples</span></h1>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
        <Link to="/example1" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto text-center">Example 1</Link>
        <Link to="/example2" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto text-center">Example 2</Link>
        <Link to="/example3" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto text-center">Example 3</Link>
        <Link to="/example4" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto text-center">Example 4</Link>
      </div>
    </div>
  );
};

export default Homepage;