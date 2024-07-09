import React from 'react'
import  Tornillos  from "../tornillos.json";
import { Link } from 'react-router-dom';

 function TornillosMilimetricos() {
  

  return (
    <div>
     <h1>Tornilleria Milimetrica</h1>
    <div>
    {Tornillos.map(Tornillo => (
      <div key={Tornillo.id}>
      <h2>{Tornillo.descripcion}</h2>
      <h2>{Tornillo.talla}</h2>
      <h3>{Tornillo.id}</h3>
   
      <Link to={`/Stock/${Tornillo.id}`}>ver mas</Link>
    
      </div>
    ))}
    </div>
    <div>home</div>
    </div>
  );
}
  export  {TornillosMilimetricos}

