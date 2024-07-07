import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import listaProductos from '../../productos.json'
 function Home() {

const productos = listaProductos
  return (
    <div>
    <Navbar/>
    <h1>lista productos</h1>
    <div>
    {productos.map(producto => (
      <div key={producto.id}>
      <h3>{producto.titulo}</h3>
      <spam>{producto.id}</spam>
      <p>{producto.precio}</p>
      <Link to={`/Detail/${producto.id}`}>ver mas</Link>
      </div>
    ))}
    </div>
    <div>home</div>
    </div>
  );
}
export default Home
