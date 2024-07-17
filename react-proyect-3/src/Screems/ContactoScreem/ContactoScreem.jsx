import React from 'react'
import './ContactoScreem.css'
import { useState } from 'react'




function ContactoScreem() {
const [Buscar, setBuscar] = useState('')
const handleBuscarChange = (event) => {
    setBuscar(event.target.value)
}


  return (
    <div>
        
    </div>
  )
}

export default ContactoScreem