import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProductPage from './components/ProductPage';
function App() {
  return (
    <div className='content'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/product/:id' element={< ProductPage />} />
      </Routes>
    </div >

  );
}

export default App;
