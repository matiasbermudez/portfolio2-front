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
        {/* Mapeo Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center p-5">
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
