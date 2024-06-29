import React from "react"; // siempre que tengamos un archivo jsx hay que importar react
import { App2 } from "../App2.jsx";
import {mustang, camaro, torino, challenger, toyota} from "./assets/img";
import { ColorCard } from "./ColorCard.jsx";
import { TurismoCarretera } from "./TurismoCarretera.jsx";

const Card1 = {
  likes: 3,
  fecha: "1 hour",
  colores: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"],
};
const Card2 = {
  likes: 132,
  fecha: "Yesterday",
  colores: ["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"],
};
const Card3 = {
  likes: 184,
  fecha: "2 days",
  colores: ["#F5F7F8", "#F4CE14", "#379777", "#45474B"],
};
const Card4 = {
  likes: 416,
  fecha: "3 days",
  colores: ["#071952", "#088395", "#37B7C3", "#EBF4F6"],
};

const Car1 = {
  marca: "ford",
  modelo: "mustang",
  color: "rojo",
  year: 2023,
  image: {mustang},
};

const Car2 = {
  marca: "chevrolet",
  modelo: "camaro",
  color: "negro",
  year: 2022,
  image: {camaro},
};

const Car3 = {
  marca: "renault",
  modelo: "torino",
  color: "blanco",
  year: 2021,
  image: {torino},
};

const Car4 = {
  marca: "dodge",
  modelo: "challenger",
  color: "azul",
  year: 2020,
  image: {challenger},
};

const Car5 = {
  marca: "toyota",
  modelo: "camry",
  color: "verde",
  year: 2022,
  image: {toyota},
};
function App() {
  return (
    <>
      <h1>hola desde react</h1>
      <Productcard />
      <Carrito />
      <br />
      <div className="cartas">
        <ColorCard Card={Card1} />
        <ColorCard Card={Card2} />
        <ColorCard Card={Card3} />
        <ColorCard Card={Card4} />
      </div>
      <div>
        <img src={camaro} />
        <TurismoCarretera Car={Car1} />
        <TurismoCarretera Car={Car2} />
        <TurismoCarretera Car={Car3} />
        <TurismoCarretera Car={Car4} />
        <TurismoCarretera Car={Car5} />
      </div>
      
    </>
  );
};

const Productcard = () => {
  return (
    <>
      <div>
        <h3>Titulo producto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          soluta, ea sed doloremque porro vero possimus magnam sit voluptates
          fuga necessitatibus architecto tempore quos perferendis voluptas.
          Ipsam nihil provident maiores.
        </p>
        <span>precio: $value</span>
        <button>Comprar</button>
      </div>
      <div>
        <button>like</button>
        <button>dislike</button>
      </div>
    </>
  );
};

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
  );
};

const Item = () => {
  return (
    <div>
      <h2>Nombre del producto</h2>
      <span>Cantidad: x</span>
      <br />
      <button>Eliminar</button>
    </div>
  );
};

export default App;
