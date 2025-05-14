import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <>
      <main className="Navbar">
        <div className="Item-Principal">
          <ul className={ click ? "nav-menu active":"nav-menu"}>
            <li><Link to="Principal" smooth={true} duration={800} onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="sobre-mi" smooth={true} duration={800} onClick={closeMenu}>Sobre MI</Link></li>
            <li><Link to="Habilidades" smooth={true} duration={800} onClick={closeMenu}>Habilidades</Link></li>
            <li><Link to="Proyecto" smooth={true} duration={800} onClick={closeMenu}>Proyectos</Link></li>
            <li><Link to="Contacto" smooth={true} duration={800} onClick={closeMenu}>Contacto</Link> </li>           
          </ul>
        </div>
      </main>
    </>
  );
};

export default Navbar;
