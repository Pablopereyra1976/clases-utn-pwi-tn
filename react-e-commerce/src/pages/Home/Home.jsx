import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
import listaProductos from '../../productos.json'
 function Home() {
=======
import {Link} from 'react-router-dom'

 function Home() {
const listaProductos = [
  {
  titulo: "TV Samsung",
  precio: 1000,
  id: 1,
  categoria: "televisores",
  descripcion: "tv 55 pulgadas, origen chino con garantia de 4 años"
  },
  {
  titulo: "TV LG",
  precio: 1000,
  id: 2,
  categoria: "televisores",
  descripcion: "tv 55 pulgadas, origen chino con garantia de 4 años"
  },
  {
  titulo: "TV Sony",
  precio: 1000,
  id: 3,
  categoria: "televisores",
  descripcion: "tv 55 pulgadas, origen chino con garantia de 4 años"
  }
]
>>>>>>> Stashed changes

const productos = listaProductos
  return (
    <div>
    <Navbar/>
    <h1>lista productos</h1>
    <div>
    {productos.map(producto => (
      <div key={producto.id}>
        <h2>{producto.id}</h2>
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
