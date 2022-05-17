import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import { CartProvider } from './CartContext'
function App() {



  return (
    <div className='content'>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/product/:id' element={< ProductPage />} />
        </Routes>
      </CartProvider>
    </div >

  );
}

export default App;
