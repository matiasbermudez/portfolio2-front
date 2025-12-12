
import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";
export const FooterComp = () => {
  return (

      <footer className="w-full bg-black text-white py-10 mt-20 border-t border-white/10 ">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:flex md:justify-between md:items-start gap-12">
          {/* Nombre y marca personal */}
          <div className=' '>
            <h2 className="text-xl font-bold">Matías A. Bermúdez</h2>
            <p className="text-sm text-white/60 mt-2">
              Desarrollador Web — Frontend / Fullstack
            </p>
          </div>


          {/* NavLinks */}
          <div>
            <h3 className="font-semibold mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#home" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">Inicio</a></li>
              <li><a href="#projects" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">Contacto</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-semibold mb-3">Conectemos</h3>
            <div className="flex gap-4">
              <a href="https://github.com/matiasbermudez" target="_blank" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/matias-bermudez-95355927a/" target="_blank" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">
                <Linkedin />
              </a>
              <a href="mailto:mabermudez.dev@gmail.com" className="hover:text-[#FF5733] transition delay-100 duration-200 ease-in-out">
                <Mail />
              </a>
            </div>
          </div>
        </div>


        <div className="mt-10 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Matías Bermúdez — Todos los derechos reservados.
        </div>
      </footer>
  )
}
