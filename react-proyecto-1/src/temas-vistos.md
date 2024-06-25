

1) como crear un componente
recomendacion:

const Nombre = () => {
return(
    <h1>pepe</h1>
)
}

function Nombre (){
    return(
        <h1>hola</h1>
    )
} 

2) como exportar e importar componentes?
/components/boton.jsx
codigo:

import React from 'react'
1ra forma de exportar es colocar la palabra  EXPORT delante de la const
const Boton = () => {
return (
    <button>Mi boton</button>
)
}
2da forma de exportar es colocar
export {Boton}

*********************************************************************


/screen/homeScreen.jsx
codigo:
import React from 'react'
import Boton from /components/boton.jsx
const homeScreen = () {
return(
    <main>
        <Boton/>
    <main>
)
}
export {homeScreen}

3) como invocar o instanciar componentes
/pages/contact.jsx

import React from 'react'
import {ContactForm} from './components/ContactForm.jsx'
const ContactPage = () => {
   return (
    <>
        <h1>formulario de contacto</h1>
        <contactForm/>
    </>
    )
}