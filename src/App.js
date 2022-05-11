import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className='content'>

      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
