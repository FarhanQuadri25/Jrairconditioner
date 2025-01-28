interface DropdownItem {
    id: number;
    label: string;
    path: string;
}

interface NavbarLink {
    id: number;
    label: string;
    path?: string;
    dropdown?: DropdownItem[];
}

export const NAVBAR_LINKS: NavbarLink[] = [
    {
        id: 1,
        label: "Home",
        path: "/",
    },
    {
        id: 2,
        label: "About Us",
        path: "/about-us",
    },
    {
        id: 3,
        label: "Product",
        
        dropdown: [
            { id: 31, label: "Daikin", path: "/product/daikin" },
            { id: 32, label: "Lloyd", path: "/product/lloyd" },
            { id: 33, label: "Mitsubishi", path: "/product/mitsubishi" },
        ],
    },
    {
        id: 4,
        label: "Gallery",
      
        dropdown: [
            { id: 41, label: "Photos", path: "/gallery/photos" },
            { id: 42, label: "Videos", path: "/gallery/vidoes" },
        ],
    },
    {
        id: 5,
        label: "Contact",
        path: "#contact",
    },
];
