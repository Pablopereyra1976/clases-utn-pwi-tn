import React from "react";
import "./ChatHeader.css";

import { fotoperfil } from "../../../imagenes";
function ChatHeader() {
  return (
    <div className="chat-header">
      <img src={fotoperfil} alt="foto" />
      <div className="contact-info">
        <div className="contact-name">Pedro</div>
        <div className="contact-status">Online</div>
      </div>
    </div>
  );
}
export default ChatHeader;
