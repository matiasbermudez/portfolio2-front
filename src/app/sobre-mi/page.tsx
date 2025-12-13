import TimeLineComp from "../components/timeLineComp"
export default function About() {

    return (
        <div>
            <h1 className="text-center text-4xl mt-10 ">Cómo llegué hasta acá</h1>
            <h3 className="text-center text-xl mt-2 "> <span className="text-[#FF5733]">Aprender</span>, construir y  <span className="text-[#FF5733]">mejorar</span>, proyecto a proyecto.</h3>
            <div className="m-10">
                <p>Cómo llegué hasta acá</p>
                <p>Un camino guiado por la curiosidad y el aprendizaje constante.</p>

                <p>No fue un camino lineal ni planificado.</p>
                <p>Fue aprender, probar, equivocarme y volver a intentar.</p>

        

            </div>
            <p className="text-start mt-10">
                
            </p>
            <TimeLineComp />

            <section className="m-10">
                <h3>Como trabajo</h3>
                <ul className="list-disc ">
                    <li>Prefiero entender el problema antes de escribir codigo</li>
                    <li>Me importa mas la claridad que la complejidad</li>
                    <li>Valoro el feedback y el aprendizaje continuo</li>
                    <li>No busco soluciones magicas</li>
                </ul>
            </section>
        </div>
    )
}
