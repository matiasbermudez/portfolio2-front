import Image from 'next/image';
import { ProjectsInterface } from '../constants/constants';
interface ProjectsCompProps {
  project: ProjectsInterface;
}
/* export interface ProyectsInterface {
    title: string;
    descriptionBrief: string;
    imageMain: string;
    imageSecundary: ProyectImage[];
    alt: string;
    link: string;
}*/
export const ProjectsComp = ( {project} : ProjectsCompProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
      <Image
        src={project.imageMain}
        alt={project.title}
        width={300}
        height={200}
        className="rounded-2xl border border-[var(--secondary)] object-cover"
      />
      
      <p className="text-gray-400 text-sm text-center">{project.descriptionBrief}</p>
    </div>
  )
}
