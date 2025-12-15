"use client"
import { motion } from "framer-motion";

export default function CVPage() {
    return (
        <div className="w-full bg-gradient-to-b from-black via-neutral-950 to-black">
            <div className="max-w-6xl mx-auto px-6  ">
                <h1 className="text-center text-[2.5rem] font-semibold tracking-tight mt-10">Perfil profesional</h1>
                <div className="mx-auto mt-4 w-12 h-[1px] bg-[#FF5733]/70" />
                <h2 className="text-center text-[1.2rem] text-white/60 mt-2">Experiencia, proyectos y forma de trabajo</h2>
                <section className="text-center sm:text-start flex flex-col gap-4 mt-8">

                    <h2 className=" text-[#FF5733] text-[2rem]">Matías Alejandro Bermúdez</h2>
                    <h3 className=" text-orange-500 text-[1.3rem]">Frontend Developer (Jr)</h3>
                    <p>Costa Azul, Buenos Aires, Argentina</p>
                    <p> <a href="mailto:mabermudez.dev@gmail.com" className="hover:text-[#FF5733] hover:text-[1.01rem]"> ● mabermudez.dev@gmail.com</a> |
                        <a href="https://www.github.com/matiasbermudez" target="_blank" className="hover:text-[#FF5733] hover:text-[1.01rem]" > ● github.com/matiasbermudez</a> |
                        <a href="https://www.linkedin.com/in/matias-bermudez-95355927a" target="_blank" className="hover:text-[#FF5733] hover:text-[1.01rem]"> ● linkedin.com/in/matias-bermudez-95355927a</a>
                    </p>
                    <h3 className=" text-orange-500 text-[1.3rem]">Perfil Profesional</h3>
                    <p>Desarrollador frontend en formación con conocimientos sólidos en JavaScript, TypeScript, React y Next.js.
                        Experiencia colaborando en proyectos reales, como el desarrollo del frontend principal de www.joaquingabotto.com.
                        Cuento con 2 años y medio de formación en la Licenciatura en Informática en la Universidad Atlántida Argentina, que
                        me brindó bases en programación, algoritmos y bases de datos. Actualmente desarrollo proyectos propios con Next.js
                        + Supabase y participo en tareas freelance junto a un desarrollador Senior. Busco mi primera experiencia formal para
                        crecer en un entorno profesional.</p>
                    <h3 className=" text-orange-500 text-[1.3rem]">Habilidades Técnicas</h3>
                    <ul className="list-disc list-inside ml-5">
                        <li>Frontend: HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React, Next.js</li>
                        <li>Backend (básico): Node.js, Express, Sequelize, Supabase (PostgreSQL)</li>
                        <li>Herramientas: Git, GitHub, VS Code, Axios- Extras: Consumo de APIs REST, autenticación JWT/cookies, despliegue en Vercel</li>
                    </ul>
                    <h3 className=" text-orange-500 text-[1.3rem]"> Proyectos Destacados </h3>

                    <p>www.joaquingabotto.com Participación en gran parte del frontend. Implementación de componentes reutilizables y
                        diseño responsive con React + TailwindCSS. Trabajo colaborativo con un desarrollador Senior. (Motivo de menor
                        actividad en GitHub: dedicación a este proyecto real en producción).
                        Portfolio personal (en desarrollo) Proyecto con Next.js y TailwindCSS. Backend propio con autenticación JWT y
                        cookies. Incluye vistas pública y privada con login para entrevistadores.</p>
                    <h3 className=" text-orange-500 text-[1.3rem]">Formación Académica</h3>
                    <ul className="list-disc list-inside ml-5">
                        <li> Licenciatura en Informática (2 años y medio cursados) </li>
                        <li>Universidad Atlántida Argentina</li>
                        <li>Formación autodidacta en desarrollo web (cursos online y práctica personal).</li>
                    </ul>

                    <h3 className=" text-orange-500 text-[1.3rem]">Soft Skills</h3>
                    <ul className="list-disc list-inside ml-5">
                        <li>Capacidad de aprendizaje rápido</li>
                        <li>Organización y responsabilidad</li>
                        <li>Trabajo en equipo</li>
                        <li>Proactividad para resolver problemas</li>
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
        </div>
    )
}