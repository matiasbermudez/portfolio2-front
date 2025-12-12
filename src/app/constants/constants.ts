export interface MenuItemInterface {
    name: string;
    href: string;
}
export interface UserToolsInterface {
    name: string;
    alt: string;
    href: string;
}

interface ProjectImage {
    src: string;
    alt: string;
}
export interface ProjectsInterface {
    title: string;
    descriptionBrief: string;
    descriptionComplete:string;
    imageMain: string;
    imageSecundary: ProjectImage[];
    alt: string;
    link: string;
}
export const MenuItems: MenuItemInterface[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Sobre mí",
        href: "/sobre-mi"
    },
    {
        name: "Proyectos",
        href: "/proyectos"
    },
    {
        name: "Contacto",
        href: "/contacto"
    }
];

export const UserTools: UserToolsInterface[] = [
    {
        name: "React",
        alt: "React Logo",
        href: "/react.svg"
    },
    {
        name: "Next.js",
        alt: "Next.js Logo",
        href: "/nextjs.svg"
    },
    {
        name: "TypeScript",
        alt: "TypeScript Logo",
        href: "/typescript.svg"
    },
    {
        name: "JavaScript",
        alt: "JavaScript Logo",
        href: "/javascript.svg"
    },
    {
        name: "Tailwind CSS",
        alt: "Tailwind CSS Logo",
        href: "/tailwind.svg"
    },
    {
        name: "Git",
        alt: "Git Logo",
        href: "/git.svg"
    },
    {
        name: "GitHub",
        alt: "GitHub Logo",
        href: "/github.svg"
    },
    {
        name: "Figma",
        alt: "Figma Logo",
        href: "/figma.svg"
    },
    {
        name: "Node.js",
        alt: "Node js Logo",
        href: "/node.svg"
    },
    {
        name: "HTML5",
        alt: "HTML5 Logo",
        href: "/html.svg"
    },
    {
        name: "CSS",
        alt: "CSS Logo",
        href: "/css.svg"
    }
];
export const Projects: ProjectsInterface[] = [
    {
        title: "Proyecto 1",
        descriptionBrief: "Descripción del proyecto 1",
        descriptionComplete:"Descripción completa del proyecto 1, con todas sus funcionalidades y tecnologías utilizadas.",
        imageMain: "/projects/project1.webp",
        imageSecundary: [{ src: "/projects/project1Sec1.webp", alt: "descripcion proyecto 1 img sec 1" },
        { src: "/projects/project1Sec2.webp", alt: "descripcion proyecto 1 img sec 2" }],
        alt: "Proyecto 1 Image",
        link: "google.com",
    },
    {
        title: "Proyecto 2",
        descriptionComplete:"Descripción completa del proyecto 2, con todas sus funcionalidades y tecnologías utilizadas.",
        descriptionBrief: "Descripción del proyecto 2",
         imageMain: "/projects/project2.webp",
        imageSecundary: [{ src: "/projects/project2Sec1.webp", alt: "descripcion proyecto 3 img sec 1" },
        { src: "/proyects/project2Sec2.webp", alt: "descripcion 3 proyecto img sec 2" }],
        alt: "Proyecto 2 Image",
        link: "google.com",
    },
    {
        title: "Proyecto 3",
        descriptionBrief: "Descripción del proyecto 3 ",
        descriptionComplete:"Descripción completa del proyecto 3, con todas sus funcionalidades y tecnologías utilizadas.",
         imageMain: "/projects/project3.webp",
        imageSecundary: [{ src: "/projects/project3Sec1.webp", alt: "descripcion proyecto 3 img sec 1" },
        { src: "/projects/project3Sec2.webp", alt: "descripcion proyecto 3 img sec 2" }],
        alt: "Proyecto 3 Image",
        link: "google.com",
    },
];
