// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Example1 from './Components/example1/Example1';
import Example3 from './Components/example3/Example3';
// import Pyramid3D from './Components/example4/Pyramid3D';
import Example2 from './Components/example2/Example2';
import Example5 from './Components/example5/Example5';
import Example4 from './Components/example4/Example4';

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/example1" element={<Example1/>} />
        <Route path="/example2" element={<Example2/>} />
        <Route path="/example3" element={<Example3/>} />
        <Route path="/example4" element={<Example4/>} />

        <Route path="/example5" element={<Example5/>} />



        </Routes>
      </div>
    </Router>
  );
};
export default App;