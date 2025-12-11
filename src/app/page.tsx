import { HeroSection } from "./components/heroSection";
import { ToolsSection } from "./components/toolsSection";
import { ProjectsComp } from "./components/projectsComp";
import { ProjectsInterface, Projects } from "./constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col">
       <HeroSection/>
       <ToolsSection/>
       <section>
        <h2>Proyectos</h2>
        {/* Aquí puedes mapear y mostrar los proyectos usando el componente proyectosComp */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
        {
          Projects.map((project: ProjectsInterface, i: number) => (
            <ProjectsComp key={i} project={project} />
          ))
        }
        </div>
       </section>
    </div>
  );
}
