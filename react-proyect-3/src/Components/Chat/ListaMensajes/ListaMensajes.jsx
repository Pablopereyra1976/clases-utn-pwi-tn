import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import "./ListaMensajes.css"

export default function ListamensajesChat() {
  return (
    <div className="mensaje-container">
        <Mensaje />
    </div>
  )
}
export {ListamensajesChat}
