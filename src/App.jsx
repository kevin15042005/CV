import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import FotoPerfil from "./assets/FotoPerfil.webp";
import ImagenFondo from "./assets/Fondo-Inicio.webp"
const Desempeño = () => {
  const nombre = "Front End";

  const letrasAnimada = nombre.split("").map((letra, index) => (
    <span
      key={`texto${index}`}
      className="letra"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {letra === " " ? "\u00A0" : letra}
    </span>
  ));

  return <h1 className="text-green-500 text-[2rem] font-bold">{letrasAnimada}</h1>;
};

function App() {
  return (
    <>
      <main>
        <div>
        <navbar>
          <Navbar />
        </navbar>
        </div>
        <div className="mt-8 flex justify-evenly">
          <img className= "absolute inset-0 w-full h-full object-cover z-[-1] "src={ImagenFondo} alt="" />
            <section className="">
              <h1 className="text-[2rem] font-bold max-w-sm ">
                HOLA , YO SOY! KEVIN REYES DESARROLLADOR <Desempeño />{" "}
              </h1>
              <p className=" mt-3 text-lg text-white font-medium leading-5 max-w-[30rem]  items-start">
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user-friendly
                interfaces that captivate and engage.{" "}
              </p>
              <button className="bg-green-400 m-5 p-5 text-[18px] rounded-md shadow-sm hover:bg-indigo-600 transition-colors duration-300">
                <a href="Ytoueb"></a>
                Descargar CV{" "}
              </button>
            </section>
            <section className="hidden md:block relative w-60 h-60">
              <img
                className="absolute inset-0  border-spacing-4 border-green-500 clip-hexagon z-10 pointer-events-none"
                src={FotoPerfil}
                alt=""
              />
            </section>
        </div>
      </main>
    </>
  );
}

export default App;
