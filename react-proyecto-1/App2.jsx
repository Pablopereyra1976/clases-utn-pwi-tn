import React from "react"
import { ProfileCard } from "./ProfileCard"
let nombre = 'pepe'
const obtenerNombre = () => 'pepe'
    
const App2 = () => {
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
        <div>
            <h1>Hola {obtenerNombre()}</h1>
            <ProfileCard />
            <ProfileCard
            persona={persona1}
            />
            <ProfileCard
            persona={persona2}/>
            <span>contador.{contador}</span>
            <button onClick={incrementar}>incrementar</button>
        </div>
    )

export {App2}