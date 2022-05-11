import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className='content'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
