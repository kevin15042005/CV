import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  // Datos de los items del menú
  const menuItems = [
    { id: "principal", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-indigo-800 shadow-sm p-4 rounded-sm z-10 fixed w-full">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">Portafolio</h1>
        </div>

        {/* Botón para móvil */}
        <button
          onClick={() => setClick(!click)}
          className="md:hidden text-green-50 text-2xl"
        >
          {click ? "✕" : "☰"}
        </button>

        {/* Menú Desktop */}
        <ul className="hidden md:flex md:flex-row md:gap-6 text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-400 p-2 rounded-sm"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                offset={-70}  // Ajusta según la altura de tu navbar
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú Móvil */}
      {click && (
        <ul className="m-4 fixed top-16 left-0 right-0 z-20 flex flex-col gap-4 bg-gray-800 text-white p-4 rounded-sm md:hidden">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 p-2 rounded-sm"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={800}
                onClick={closeMenu}
                spy={true}
                activeClass="active"
                offset={-70}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;