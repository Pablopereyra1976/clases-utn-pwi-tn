import React from "react";
import Stock from "./Componentes/Stock/Stock.jsx";
import { Routes, Route } from "react-router-dom";
import { TornillosMilimetricos } from "./Componentes/Inventario";
function App() {


  return (
    <Routes>
     
      <Route path='/Stock/:tornillosid' element={<Stock />} />
      <Route path='/' element={<TornillosMilimetricos/>}/>
      <Route path='/productos' element={<TornillosMilimetricos/>}/>
    </Routes>
  );
}

export default App
