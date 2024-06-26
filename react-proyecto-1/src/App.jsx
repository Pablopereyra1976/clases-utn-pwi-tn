import React from 'react'  // siempre que tengamos un archivo jsx hay que importar react
import { App2 } from '../App2.jsx'

import { ColorCard } from './ColorCard.jsx'
function App() {
    return (

        <>
            <h1>hola desde react</h1>
            <Productcard />
            <Carrito />
            <br />
            <App2 />
          <ColorCard />
         
        </>

    )
}

const Productcard = () => {
    return (
        <>
            <div>
                <h3>Titulo producto</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt soluta, ea sed doloremque porro vero possimus magnam sit voluptates fuga necessitatibus architecto tempore quos perferendis voluptas. Ipsam nihil provident maiores.</p>
                <span>precio: $value</span>
                <button>Comprar</button>
            </div>
            <div>
                <button>like</button>
                <button>dislike</button>
            </div>
        </>
    )
}
export default App
/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Mostrar el Carrito en el componente App

sintaxis
function Carrito() {
    return (
        <>
          
        </>
    )
}
const Carrito = () => {
    return (
        <>
          
        </>


*/
const Carrito = () => {
    return (
        <>
            <h1>Carrito de compras</h1>
            <div>
                <Item />
                <Item />
                <Item />
            </div>
        </>

    )
}

const Item = () => {
    return (
        <div>
            <h2>Nombre del producto</h2>
            <span>Cantidad: x</span>
            <br />
            <button>Eliminar</button>
        </div>

    )
}






