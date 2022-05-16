import React from 'react';
import { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {

  const [storageLength, setStorage] = useState();
  const context = createContext(0);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setStorage(localStorage.length)
    })
  })


  return (
    <div className='content'>
      <Context.Provider value={storageLength}>
        <Navbar />
      </Context.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={< ProductPage />} />
      </Routes>
    </div >

  );
}

export default App;
