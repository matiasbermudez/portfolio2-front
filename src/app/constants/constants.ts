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
        name: "About", 
        href: "/about"  
    },
    { 
        name: "Projects", 
        href: "/projects" 
    },
    { 
        name: "Contact", 
        href: "/contact" 
    }
];


