import React from 'react';
import { ChatHeader, ListamensajesChat,NuevoMensajeForm } from '../Components';
import './ChatScreem.css';


 function ContactoScreem() {
  return (
    <div className='chat-screen'>
        <ChatHeader/>
        <ListamensajesChat />
        <NuevoMensajeForm />
    </div>
  )
}
export {ChatScreem}