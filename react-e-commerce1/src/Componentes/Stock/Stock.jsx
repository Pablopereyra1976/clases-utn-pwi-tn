import React from 'react';
import { Link } from 'react-router-dom';
import tornillos from "../Inventario/tornillos.json";
import { useParams } from 'react-router-dom';


 function Stock() {
const { tornillosId } = useParams();
console.log("tornillosid",tornillosId)



const tornillo = tornillos.find(tornillo => tornillo.id === Number(tornillosId));
console.log("tornillo encontrado",tornillo)
  return (
    <>
   <div>{tornillo.color}</div>
   <Link to={'/productos'}>volver</Link>

   </>
  )
}
export default Stock;