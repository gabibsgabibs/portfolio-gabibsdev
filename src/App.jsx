import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="bg-lightbg w-full h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
