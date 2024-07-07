import React from 'react'

import {Routes, Route} from 'react-router-dom'
import {Detail, Home, Contact, Cart} from './pages'

function App() {


  return (
    
    <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/Detail/:productoId' element={<Detail />} />
    <Route path='/' element={<Home />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='Cart' element={<Cart />} />
    </Routes>
  );
}

export default App
