import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  {/*Menu DeskTop*/}
  return (
    <nav className="bg-indigo-800 shadow-sm p-4 rounded-sm  z-10 fixed">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">Portafolio</h1>
        </div>
        <button
          onClick={() => setClick(!click)}
          className="md:hidden text-green-50 text-2xl"
        >
          {click ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex md:flex-row md:gap-6 text-white">
          <li className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm">
            <Link  to="principal" smooth duration={800}>
              Inicio
            </Link>
          </li>
          <li className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm">
            <Link to="sobre-mi" smooth duration={800}>
              Sobre mí
            </Link>
          </li>
          <li className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm">
            <Link to="habilidades" smooth duration={800}>
              Habilidades
            </Link>
          </li>
          <li className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm">
            <Link to="proyectos" smooth duration={800}>
              Proyectos
            </Link>
          </li>
          <li className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm " >
            <Link to="contacto" smooth duration={800}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      {/*Menu Mobile*/}
    {click &&(
        <ul className=" m-4 fixed top-16 left-0 right-0 z-20  flex flex-col gap-4  bg-gray-800 text-white p-4 rounded-sm md:hidden">
            <li className="delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm">
                <Link to="principal" smooth duration={800} onClick={closeMenu}>Inicio</Link>
            </li>
            <li  className="delay-150 duration-300 ease-in-out hover:-traslate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm">
                <Link to="sobre-mi" smooth duration={800} onClick={closeMenu}>sobre mi</Link>
            </li>
            <li className="delay-150 duration-300 ease-in-out hover:-traslate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm">
                <Link to="habilidades" smooth duration={800} onClick={closeMenu}>Habilidades</Link>
            </li>
            <li className="delay-150 duration-300 ease-in-out hover:-traslate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm">
                <Link to="proyecto" smooth duration={800} onClick={closeMenu}>Proyectos</Link>
            </li>
            <li className="delay-150  duration-300 ease-in-out hover:-traslate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm">
                <Link to="contacto" smooth duration={800} onClick={closeMenu}>Contacto</Link>
            </li>

        </ul>
    )}
    </nav>
  );
};

export default Navbar;
