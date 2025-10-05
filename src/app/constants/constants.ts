export interface MenuItemInterface {
    name: string;
    href: string;
}
export interface UserToolsInterface {
    name : string ;
    alt : string ;
    href : string ;
}
export const MenuItems : MenuItemInterface[] = [
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

export const UserTools : UserToolsInterface[] = [
    {
        name : "React",
        alt : "React Logo",
        href : "/react.svg"
    },
    {
        name : "Next.js",
        alt : "Next.js Logo",
        href : "/nextjs.svg"
    },
    {
        name : "TypeScript",    
        alt : "TypeScript Logo",
        href : "/typescript.svg"
    },
    {
        name : "JavaScript",
        alt : "JavaScript Logo",
        href : "/javascript.svg"
    },
    {
        name : "Tailwind CSS",
        alt : "Tailwind CSS Logo",
        href : "/tailwind.svg"
    },
    {
        name : "Git",
        alt : "Git Logo",
        href : "/git.svg"
    },
    {
        name : "GitHub",
        alt : "GitHub Logo",
        href : "/github.svg"
    },
    {
        name : "Figma",
        alt : "Figma Logo",
        href : "/figma.svg"
    },
    {
        name : "Node.js",
        alt : "Node js Logo",
        href : "/node.svg"
    },
    {
        name : "HTML5",
        alt : "HTML5 Logo",
        href : "/html.svg"
    },
    {
        name : "CSS",
        alt : "CSS Logo",
        href : "/css.svg"
    }
    ]
