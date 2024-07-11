import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/home/Home';

import './App.css'

function App() {


  return (
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Productos" element={<Home />} />
    </Routes>
  )
}

export default App
