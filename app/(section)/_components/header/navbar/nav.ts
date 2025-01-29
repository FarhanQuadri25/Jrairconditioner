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
            { id: 34, label: 'Blue star', path: '/product/blue-star' },
            { id: 35, label: 'Hitachi', path: '/product/hitachi' },
            { id: 36, label: 'lg', path: '/product/lg' },
            { id: 37, label: 'Panasonic', path: '/product/panasonic' },
            { id: 38, label: 'Samsung', path: '/product/samsung' },
            { id: 39, label: 'Carrier', path: '/product/carrier' }
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
