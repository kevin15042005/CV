import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import FotoPerfil from "./assets/FotoPerfil.webp";
import ImagenFondo from "./assets/Fondo-Inicio.webp";
import Footer from "./Components/Footer/Footer.jsx";
import LeerMas from "./Components/LeerMas/LeerMas.jsx";
import ProfileCard from "./Components/Card/ProfileCard.jsx";
import ImageFondoPerfil from "./assets/Fondo-Perfil.webp";
import TextoAnimado from "./Components/TextoAnimado/TextoAnimado.jsx";
import ButtonCV from "./Components/ButtonCV/ButtonCV.jsx";
const Desempeño = ({ texto }) => {
  const letrasAnimada = texto.split("").map((letra, index) => (
    <span
      key={`texto${index}`}
      className="letra text-5xl"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {letra === " " ? "\u00A0" : letra}
    </span>
  ));

  return (
    <span className="text-green-500 text-[2rem] font-bold font-serif">
      {letrasAnimada}
    </span>
  );
};

function App() {
  const proyectos = [
    {
      id: 1,
      imagen: ImagenFondo,
      fecha: "1/01/2025",
      descripcion: `Proyecto elaborado para una microempresa de pintura y diseños especializados en motocicletas. Esta plataforma beneficia a los usuarios mediante una interacción fácil e intuitiva, permitiéndoles seguir paso a paso el proceso del diseño. El sitio integra diversos aspectos como la calidad del trabajo, la ubicación del taller, el número de personas que conforman la microempresa, y la confianza que se genera entre ellos, entre otros elementos clave.`,
      link:"https://www.youtube.com/watch?v=Dt9w2CCatrc&t=32s"
    },
    {
      id: 2,
      imagen: ImagenFondo,
      fecha: "November 12, 2023",
      descripcion: "Texto del proyecto 2 que será recortado con Leer más.",
    },
    {
      id: 3,
      imagen: ImagenFondo,
      fecha: "December 5, 2023",
      descripcion:
        "Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.Texto del proyecto 3 que será recortado con Leer más.",
    },
    // Agrega más proyectos según necesites
  ];
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <main>
        <div>
          <header className="flex justify-center  ">
            <Navbar />
          </header>
        </div>
        <div className="z-0">
          <section
            id="principal"
            className="relative w-full h-screen flex  justify-evenly items-center bg-black text-white overflow-hidden m"
          >
            <img
              className="opacity-20 absolute top-0 left-0 w-full h-full object-cover z-0 "
              src={ImageFondoPerfil}
              alt=""
            />
            <div className="relative z-5 p-6 max-lg:mt-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-sm  items-center ">
                <TextoAnimado
                  text="HOLA , YO SOY! KEVIN REYES, DESARROLLADOR"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl sm:text-3xl md:text-4xl mt-6 font-Playfair"
                />
                <TextoAnimado
                  text="   FRONT END"
                  delay={500}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#00ffaa]  mb-8 font-Playfair "
                />
              </h1>

              <div className="mt-3 text-base sm:text-lg md:text-xl text-white font-medium leading-6 max-w-xl">
                <TextoAnimado
                  text="Soy un apasionado por el desarrollo web con interés en crear experiencias digitales intuitivas. Me gusta aprender constantemente y mejorar mis habilidades para construir interfaces claras, funcionales y pensadas para el usuario."
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-sm sm:text-base md:text-lg font-mono"
                />
              </div>

              <div className="mt-4">
                <ButtonCV />
              </div>
            </div>

            <div className="hidden md:block  w-80 z-5">
              <ProfileCard
                name="Kevin A. Reyes S."
                title="Tecnologo Software"
                handle="Kevin"
                contactText="Contacta me"
                avatarUrl={FotoPerfil}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </section>
        </div>
        {/*---------------------------------*/}
        <section id="sobre-mi" className="w-full px-4 py-8 my-12">
          <div className="flex justify-center items-center mt-6">
            <h2 className="font-bold text-center">
              <Desempeño texto={"Educacion"} />
            </h2>
          </div>
          <div className="grid grid-rows-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
            <div>
              <span className="neon-border font-bold">2025</span>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-Playfair p-2">
                Practicante
              </h3>
              <p className="text-[20px] font-mono p-2">
                Desarorlador FullStack , y colaborando gestion de Redes y
                gestion de datos en Microsoft 365 en Comsel S.A.S
              </p>
            </div>
            <div>
              <span className="neon-border font-bold">2023–2025</span>

              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-Playfair p-2">
                Tecnologo de Software
              </h3>
              <p className="text-[20px] font-mono p-2">
                Desarrollador de aplicaciones web utilizando React , MySql2 ,
                Node.js{" "}
              </p>
            </div>
            <div>
              <span className="neon-border font-bold">2022</span>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-Playfair p-2">
                Tecnico de Software
              </h3>
              <p className="text-[20px] font-mono p-2">
                Habilidades técnicas en mantenimiento de software y buena
                comprensión del código. Técnico en Software.
              </p>
            </div>
          </div>
        </section>
        {/*------------------------------*/}
        <section
          id="habilidades"
          className="relative w-full min-h-screen py-10  flex justify-evenly items-center bg-black text-white overflow-hidden"
        >
          <img
            className="opacity-20 absolute top-0 left-0 w-full h-full object-cover z-0 "
            src={ImagenFondo}
            alt=""
          />
          <div className=" z-5  w-full max-w-6xl px-4 ">
            <h2 className="text-center  mb-4 font font-bold ">
              <Desempeño texto={"Habilidades"} />
            </h2>

            <div className="conocimiento-herramientas grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              <div>
                <h3 className="text-center font-serif font-bold font- text-4xl my-6">
                  Front End
                </h3>
                <div className="gap-3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-front hover:traslate-y-1  hover:scale-105 hover:text-teal-800">
                      HTML{" "}
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  hover:bg-teal-800"
                          style={{ width: "75%" }}
                        >
                          {" "}
                          75%
                        </div>
                      </div>
                    </li>
                    <li className="  font-inter text-3xl border-2 p-3 rounded-md text-[#38b48b]  item-front  hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      CSS
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "65%" }}
                        >
                          {" "}
                          65%
                        </div>
                      </div>
                    </li>
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-front hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      REACT
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "45%" }}
                        >
                          {" "}
                          45%
                        </div>
                      </div>
                    </li>
                    <li className=" font-inter text-3xl border-2 p-3 rounded-md text-[#38b48b]  item-front hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      TAILWINDCSS
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "35%" }}
                        >
                          {" "}
                          35%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-center font-serif font-bold font- text-4xl my-6">
                  Back End
                </h3>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-backend hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      Node.js
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "35%" }}
                        >
                          {" "}
                          35%
                        </div>
                      </div>
                    </li>
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-backend hover:traslate-y-2 hover:scale-105 hover:text-teal-800">
                      Express
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "25%" }}
                        >
                          {" "}
                          25%
                        </div>
                      </div>
                    </li>
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-backend hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      JavaScript
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "70%" }}
                        >
                          {" "}
                          70%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-center font-serif font-bold font- text-4xl my-6">
                  Base de Datos
                </h3>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <li className=" font-inter  text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-db hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      MongDB
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "25%" }}
                        >
                          {" "}
                          25%
                        </div>
                      </div>
                    </li>
                    <li className=" font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-db hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      MySql
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "65%" }}
                        >
                          {" "}
                          65%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-center font-serif font-bold font- text-4xl my-6">
                  Adicionales
                </h3>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <li className="  font-inter text-3xl  border-2 p-3 rounded-md text-[#38b48b]  item-adicional hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      Git
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "55%" }}
                        >
                          {" "}
                          55%
                        </div>
                      </div>
                    </li>
                    <li className="  font-inter  text-3xl  border-2 p-3 rounded-md text-[#38b48b] item-adiciona hover:traslate-y-2  hover:scale-105 hover:text-teal-800">
                      GitHub
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#38b48b]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full hover:bg-teal-800"
                          style={{ width: "50%" }}
                        >
                          {" "}
                          50%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-------------------------*/}
        <section id="proyectos" className="w-full px-4 py-8 my-12">
          <div className="my-8">
            <h2>
              <Desempeño texto={"Proyectos"} />
            </h2>
            <p className="my-6 text-0 sm:text-1xl lg:text-2xl font-inter">
              Proyectos personales elaborados mejorar mi experiencia y
              conocimientos{" "}
            </p>
          </div>
          <ul className="grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {proyectos.map((proyecto) => (
              <li
                key={proyecto.id}
                className="item-proyecto flex flex-col justify-between items-center border rounded-[25px] p-4 h-full"
              >
                <img
                  className="w-full h-60 object-contain mt-1 mb-6"
                  src={proyecto.imagen}
                  alt=""
                />
                <span className="border bg-[#38b48b] p-3 my-4">
                  {proyecto.fecha}
                </span>
                <LeerMas texto={proyecto.descripcion} limite={40} />
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Ver Proyecto
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Footer className="bg-black text-white px-4 py-10" />
      </main>
    </>
  );
}

export default App;
