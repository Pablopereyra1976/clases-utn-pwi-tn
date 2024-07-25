import React from "react";
import ChatHeaderUsuario from "../Components/Chat/ChatHeaderInfo/ChatHeader";
import ChatPersonas from "../Components/Chatusuarios/ChatPersonas";
import NuevoMensajeForm from "../Components/Chat/MensajeForm/NuevoMensajeForm";
import "./ChatScreem.css";
import { useState } from "react";



function ChatContactosScreem() {
  const [selectedContactId, setSelectedContactId] = useState(null);


  return (
    <div className="chat-screen">
      <ChatHeaderUsuario contactId={selectedContactId} />
      <ChatPersonas onContactSelect={setSelectedContactId} />
      <NuevoMensajeForm />
    </div>
  );
}
export { ChatContactosScreem };
