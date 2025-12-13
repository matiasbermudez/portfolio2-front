import { ProjectsCompCard } from "../components/projectsCompCard";
import { ProjectsInterface } from "../constants/constants";
import { Projects } from "../constants/constants";



export default function Proyectos() {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-center text-4xl md:text-5xl font-semibold mt-16">
                    Proyectos
                </h1>
                <h3 className="text-center text-xs md:text-sm tracking-widest uppercase mt-4 text-white/70">
                    Aquí irán algunos de los proyectos en los que he trabajado
                </h3>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5 m-5 md:gap-10 md:m-10">
            {Projects.map((project: ProjectsInterface, i: number) => (
                <ProjectsCompCard key={i} project={project}/>
            ))}
        </div>
        </div>
    )
}