export interface MenuItem {
    name: string;
    href: string;
}
export const MenuItems : MenuItem[] = [
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


