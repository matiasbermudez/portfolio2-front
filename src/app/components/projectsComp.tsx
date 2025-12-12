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
export const ProjectsComp = ({ project }: ProjectsCompProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="bg-white/5 backdrop-blur-sm rounded-2xl w-full h-96 flex flex-col p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_10px_rgba(255,87,51,0.7)] transition duration-300 hover:scale-[1.01] border border-white/10"
      >
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl">
          <Image
            src={project.imageMain}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className='flex flex-col justify-between h-full w-[90%]'>
          <h3 className="text-xl font-semibold mt-4 text-white">
            {project.title}
          </h3>
          <p className="text-sm text-white/60 mt-1">{project.descriptionBrief}</p>


          <a
            href={project.link}
            target="_blank"
            className="inline-block mt-4 text-white hover:text-[#FF5733] transition text-sm font-medium"
          >
            Ver proyecto →
          </a>
        </div>
      </div>

    </div>
  )
}
