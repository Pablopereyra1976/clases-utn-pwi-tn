import React from 'react'
import { useParams } from 'react-router-dom'
import  productos  from '../../productos.json'
 function Detail() {

  const {productoId} = useParams();
const producto = productos.find(producto => producto.id === Number(productoId));
  return (
    <div>{producto.descripcion}</div>

  )
}
export default Detail
