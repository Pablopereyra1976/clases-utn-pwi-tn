import React from 'react'



const obtenerProductos = async () => {
  const response = await fetch(
    '/data.json',
    {
      method: 'GET',
    }
  )
  return response.json()
}
 function Productos() {
  return (
    <div>lista de productos</div>
  )
}
export default Productos