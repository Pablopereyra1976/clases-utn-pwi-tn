import React from 'react'
import './App.css'
import ChatScreem from './Screems'
import { ContactoScreem } from './Screems/ContactoScreem'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ContactoScreem />} /> 
        <Route path='/Chat' element={<ChatScreem />} />
      </Routes>
    </div>
  )
}

export default App
