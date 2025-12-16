import { HeroSection } from "./components/heroSection";
import { ToolsSection } from "./components/toolsSection";
import { ProjectsCompCard } from "./components/projectsCompCard";
import { ProjectsInterface, Projects } from "./constants/constants";

export default function Home() {
  //Filtro proyectos imporantes con un maximo de 3
  const projectsImportants = Projects.filter(project => project.important).slice(0, 3);

  return (
    <div className="flex flex-col">
       <HeroSection/>
       <ToolsSection/>
       <section>
        {/* Mapeo Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center p-5">
        {
          projectsImportants.map((project: ProjectsInterface, i: number) => (
            
            <ProjectsCompCard key={i} project={project}  />
            
          ))
        }
        </div>
       </section>
    </div>
  );
}
