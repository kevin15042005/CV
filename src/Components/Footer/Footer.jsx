import React from "react";
import Whatsapp from "../../assets/whatsapp.svg";
import Correo from "../../assets/correo.svg";
import GitHub from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
export default function Footer() {
  return (
    <>
      <footer id="contacto" className="bg-black text-white px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              className="border rounded-full bg-green-400 p-4 w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-105"
              src={Whatsapp}
              alt="Whatsapp"
            />
            <h4 className="text-xl font-inter">Whatsapp</h4>
            <a
              className="font-merri text-purple-400 md:text-white hover:text-purple-400"
              href="https://wa.me/573202837622"
            >
              +57 320 283 7622
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              className="border rounded-full bg-green-400 p-4 w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-105"
              src={Correo}
              alt="Correo"
            />
            <h4 className="text-xl font-inter" >Correo</h4>
            <a
              className="font-merri text-purple-400 md:text-white hover:text-purple-400"
              href="mailto:kevin2013118@gmail.com"
            >
              kevin2013118@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              className="border rounded-full bg-green-400 p-4 w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-105"
              src={GitHub}
              alt="GitHub"
            />
            <h4 className="text-xl font-inter">GitHub</h4>
            <a
              className="font-merri text-purple-400 md:text-white hover:text-purple-400"
              href="https://github.com/kevin150425"
            >
              kevin150425
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              className="border rounded-full bg-green-400 p-4 w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-100"
              src={Linkedin}
              alt="LinkedIn"
            />
            <h4 className="text-xl font-inter">LinkedIn</h4>
            <a
              className="font-merri text-purple-400 md:text-white hover:text-purple-400"
              href="#"
            >
              Kevin Reyes
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>
            © 2025 - Todos los derechos reservados -{" "}
            <span className="text-white font-bold">
              Desarrollado por Kevin Reyes
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
