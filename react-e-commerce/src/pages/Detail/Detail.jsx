import React from 'react'
import { useParams } from 'react-router-dom'
import  productos  from '../../productos.json'
 function Detail() {

<<<<<<< Updated upstream
  const {productoId} = useParams();
const producto = productos.find(producto => producto.id === Number(productoId));
  return (
    <div>{producto.descripcion}</div>
=======
  const urlParams = useParams()
  
  return (
    <div>descripcion: </div>
>>>>>>> Stashed changes
  );
}
export default Detail
