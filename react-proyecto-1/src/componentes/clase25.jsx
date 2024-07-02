import React from "react";
import { useState } from "react";

let contador = 1


    const persona1 = {
        nombre: 'pepe',
        apellido: 'perez',
        edad: 48,
        ubicacion: 'calle 123'
    }
    const persona2 = {
        nombre: 'juan',
        apellido: 'lopez',
        edad: 48,
        ubicacion: 'calle 123'
    }




const Clase25 = () => {
return (
    <div>
        <h1>Hola {persona1.nombre}</h1>
        <span>contador.{contador}</span>
        <button onClick={incrementar}>incrementar</button>
    </div >
);
};



contador = contador + 1
console.log(contador)

const [valor, fncambiadora] = useState(1)
const incrementar = () => {
    fncambiadora(valor + 1)
    alert('me estoy incrementando')
};
export { Clase25 }