import React from "react";
import "./ChatHeader.css";
import Imagenes  from "../../../Imagenes";
import { FaEllipsisVertical } from "react-icons/fa6";
import contactos from "../contactos.json"


function ChatHeaderUsuario(contactId) {
  const contacto = contactos.find(c => c.id === contactId);
const image = Imagenes;
  if (!contacto) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div className="chat-header">
      <img src={ contacto.image } alt="foto" />
      <div className="contact-info">
        <div className="contact-name">{contacto.nombre}</div>
        <div className="contact-status">Online</div>
      </div>
      <div className="container-icon">
        <h1 className="icon"><FaEllipsisVertical /></h1>
      </div>
    </div>
  );
}
export default ChatHeaderUsuario;
