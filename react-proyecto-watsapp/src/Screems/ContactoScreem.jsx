import React from 'react';
import './ContactoScreem.css';
import ContactoHeader from '../Components/Contactos/Contactoheader/ContactoHeader';
import ListaMensajeContacto from '../Components/Contactos/ListaMensajeContacto/ListaMensajeContacto';
import NuevoMensajeContactos from '../Components/Contactos/MensajeFormContactos/NuevoMensajeContactos';


 function ContactoScreem() {
  return (
    <div className='contacto-screen'>
       <ContactoHeader/> 
       <ListaMensajeContacto/>
       <NuevoMensajeContactos/>
    </div>
  )
}
export {ContactoScreem}