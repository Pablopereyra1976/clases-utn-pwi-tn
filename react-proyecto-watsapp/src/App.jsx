import React from 'react'

import ChatScreem from "./Screems";
import { ContactoScreem } from "./Screems/ContactoScreem";
import { Routes, Route } from "react-router-dom";
import { ChatContactosScreem } from './Screems/ChatContactosScreem';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactoScreem />} />
        <Route path="/contactosId/:id" element={<ChatContactosScreem />} />
        <Route path="/chat" element={<ChatScreem />} />
      </Routes>
    </div>
  );
}

export default App
