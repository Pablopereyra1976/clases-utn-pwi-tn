import React from "react"
import { ProfileCard } from "./componentesPractica/ProfileCard"
let nombre = 'pepe'
const obtenerNombre = () => 'pepe'

const Personas = () => {
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



}

return (
    <>
        <h1>Hola {obtenerNombre()}</h1>
        <ProfileCard persona={persona1} />
        <ProfileCard persona={persona2} />
        <span>contador.{contador}</span>
        <button onClick={incrementar}>incrementar</button>
    </>
)

export { Personas }