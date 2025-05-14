import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import imagenGithub from "./assets/github.png";
import imagenLinkedin from "./assets/linkedin.png";
import imagenwhatsapp from "./assets/whatsapp.png";
import imagenHtml from "./assets/html.png";
import imagenCss from "./assets/css.png";
import imagenJs from "./assets/js.png";
import imagenReact from "./assets/react.png";
import imagenNode from "./assets/node.png";
import imagenExpress from "./assets/express.png";
import imagenmysql from "./assets/mysql.png";
import imagenMongo from "./assets/mongo.png";
import imagenGit from "./assets/git.png";
import imagenUbicacion from "./assets/ubicacion.png";
import imagenTelefono from "./assets/telefono.png";
import imagenGmail from "./assets/correo.png";
import CV from "./assets/Hoja-de-Vida.pdf";
import Perfil from "./assets/Perfil.png";
import "./App.css";

function App() {
  return (
    <>
      <headers>
        <Navbar />
      </headers>
      <main>
        <div id="Principal" className="Principal">
          <section className="Principal-App">
            <h3>Kevin Reyes</h3>
            <p>Desarrollador Web </p>
            <a href="tel:+573202837622">
              <button>Contactame</button>
            </a>
          </section>
          <section className="Imagen-Perfil">
            <img className="holi" src={Perfil} alt="" />
          </section>
        </div>
        <div className="Redes">
          <a hrfe="https://github.com/settings/admin">
            <img src={imagenGithub} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-alejandro-b28039190/">
            <img src={imagenLinkedin} alt="Linkedink" />
          </a>
          <a href="">
            <img src={imagenwhatsapp} alt="Whatsapp" />
          </a>
        </div>
        <div className="general">
          <div className="sobre-mi ">
            <div id="sobre-mi" className="sobre-mi">
              <h3>Sobre MI </h3>
              <p>
                <hr />
                !Hola¡Soy Kevin Reyes, un apasionantes por el desarrollo web ,
                con una enfoque en interfaces de usuarios funcionales. Mi
                portafolio refleja las habilidades para desarrollar proyectos
                Web de gran apoyo para el avance de mis capacidades Estoy
                constatemente formando nuevos conocimientos con el fin de estar
                actualizado en las competencias de hoy en dia.
                <br />
                <a className="CV" href={CV}>
                  {" "}
                  Descargar CV{" "}
                </a>
              </p>
            </div>

            <div id="Habilidades" className="Habilidades">
              <h2>Habilidades</h2>
              <hr />
              <div className="secciones">
                <h3> Front</h3>
                <div className="seccion-front">
                  <section>
                    <div>
                      <img src={imagenHtml} alt="Html" />{" "}
                    </div>
                    <label>HTML </label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenCss} alt="CSS" />{" "}
                    </div>
                    <label>CSS </label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenJs} alt="JavaScript" />
                    </div>
                    <label>JAVASCRIPT</label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenReact} alt="React" />
                    </div>
                    <label>REACT</label>
                  </section>
                </div>
                <h3>Backend</h3>
                <div className="seccion-backend">
                  <section>
                    <div>
                      <img src={imagenNode} alt="Node" />
                    </div>
                    <label>NODE</label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenExpress} alt="Express" />
                    </div>
                    <label>EXPRESS</label>
                  </section>
                </div>
                <h3>Base de datos</h3>
                <div className="seccion-bd">
                  <section>
                    <div>
                      <img src={imagenmysql} alt="Mysql" />
                    </div>
                    <label>MYSQL</label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenMongo} alt="Mongo" />
                    </div>
                    <label>MONGODB</label>
                  </section>
                  <section>
                    <div>
                      <img src={imagenGit} alt="Git" />
                    </div>
                    <label>GIT</label>
                  </section>
                </div>
              </div>
            </div>
            <div id="Proyecto" className="Proyecto">
              <h3>Proyecto Personales</h3>
              <hr />
              <section className="contenedor-proyectos">
                <div>
                  <a href="">
                    <img src={imagenCss} alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src={imagenCss} alt="" />
                  </a>
                </div>
              </section>

              <div id="Contacto" className="Contacto">
                <h3>Contactame</h3>
                <form className="formulario-contacto">
                  <button>
                    <img src={imagenGmail} alt="" />
                    <span> kevinrey150425@gmail.com</span>
                  </button>
                  <button>
                    <img src={imagenTelefono} alt="" />
                    <span>+57 3202837622</span>
                  </button>
                  <button>
                    <img className="Mapa" src={imagenUbicacion} alt="" />
                    <span>Bogota,Colombia</span>
                  </button>
                </form>
              </div>
              <div className="Redes">
                <a hrfe="">
                  <img src={imagenGithub} alt="Github" />
                </a>
                <a href="">
                  <img src={imagenLinkedin} alt="Linkedink" />
                </a>
                <a href="">
                  <img src={imagenwhatsapp} alt="Whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
