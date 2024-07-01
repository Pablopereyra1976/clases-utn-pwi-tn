import React from 'react'
import './NuevoMensajeForm.css'
export default function NuevoMensajeForm() {
  return (
    <div className='input-container'>
        <input type="text" placeholder="Escribe aqui"/>
        <button>Enviar</button>
    </div>
  )
}
export {NuevoMensajeForm}
