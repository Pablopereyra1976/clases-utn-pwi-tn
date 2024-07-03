import React from "react";
import Item from "../Item";
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
    );
  };
  export {Carrito}

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