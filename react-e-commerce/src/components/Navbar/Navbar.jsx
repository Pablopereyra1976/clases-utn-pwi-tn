import React from 'react'
import { NavLink } from 'react-router-dom';
 function Navbar() {
  return (
    <header>
        <h2>logo</h2>
        <nav>
            <NavLink to={'/Contacto'}>Contacto</NavLink>
        </nav>
    </header>
  
  );
}
export default Navbar
