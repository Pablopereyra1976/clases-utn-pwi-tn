import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

 function Home() {
const listaProductos = [
  {
  titulo: "TV Samsung",
  precio: 1000,
  id:1,
  categoria: "televisores"
  },
  {
  titulo: "TV LG",
  precio: 1000,
  id:2,
  categoria: "televisores"
  },
  {
  titulo: "TV Sony",
  precio: 1000,
  id:3,
  categoria: "televisores"
  }
]

  return (
    <div>
    <Navbar/>
    <h1>lista productos</h1>
    <div>
    {listaProductos.map(producto => (
      <div key={producto.id}>
      <h3>{producto.titulo}</h3>
      <p>{producto.precio}</p>
      <Link to={`/Detail/ + producto.id}`}>ver mas</Link>
      </div>
    ))}
    </div>
    <div>home</div>
    </div>
  );
}
export default Home
