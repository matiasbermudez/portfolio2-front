'use client'
import { motion } from "framer-motion";
import TimeLineComp from "../components/timeLineComp"

export default function About() {

  return (
    <div className="max-w-6xl mx-auto px-6">


      <h1 className="text-center text-4xl md:text-5xl font-semibold mt-16">
        Cómo llegué hasta acá
      </h1>
      <div className="mx-auto mt-4 w-12 h-[1px] bg-[#FF5733]/70" />
      <h3 className="text-center text-xs md:text-sm tracking-widest uppercase mt-4 text-white/70">
        <span className="text-[#FF5733]">Aprender</span>, construir y{" "}
        <span className="text-[#FF5733]">mejorar</span>, proyecto a proyecto
      </h3>


      <div className="max-w-xl mx-auto mt-12 text-center space-y-3 text-white/60 text-sm leading-relaxed">
        <p>
          Un camino guiado por la curiosidad y el aprendizaje constante.
        </p>
        <p>
          No fue un camino lineal ni planificado.
        </p>
        <p>
          Fue aprender, probar, equivocarme y volver a intentar.
        </p>
      </div>

      <div className="h-px bg-white/10 max-w-3xl mx-auto my-16" />

      <TimeLineComp />


      <div className="h-px bg-white/10 max-w-3xl mx-auto my-16" />

      <section className="max-w-xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold mb-6">
          Cómo trabajo
        </h3>

        <ul className="space-y-3 text-lg text-white/70 list-disc list-inside">
          <li>Prefiero entender el problema antes de escribir código</li>
          <li>Me importa más la claridad que la complejidad</li>
          <li>Valoro el feedback y el aprendizaje continuo</li>
          <li>No busco soluciones mágicas</li>
        </ul>

      </section>

      <div className="flex justify-center">
        <motion.a
          href="/MatiasBermudezCV.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-[#FF5733] rounded-lg text-white font-semibold"
          download
        >
          Descargar CV
        </motion.a>
      </div>
    </div>

  )
}
