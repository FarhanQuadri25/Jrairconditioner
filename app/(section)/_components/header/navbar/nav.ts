interface DropdownItem {
    name: string;
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
        path: "/about",
    },
    {
        id: 3,
        label: "Product",

        dropdown: [
            { name: "daikin", label: "Daikin", path: "/product/daikin" },
            { name: "lloyd", label: "Lloyd", path: "/product/lloyd" },
            { name: "mitsubishi", label: "Mitsubishi", path: "/product/mitsubishi" },
            { name: "blue-star", label: 'Blue star', path: '/product/blue-star' },
            { name: "hitachi", label: 'Hitachi', path: '/product/hitachi' },
            { name: "lg", label: 'lg', path: '/product/lg' },
            { name: "panasonic", label: 'Panasonic', path: '/product/panasonic' },
            { name: "samsung", label: 'Samsung', path: '/product/samsung' },
            { name: "carrier", label: 'Carrier', path: '/product/carrier' }
        ],
    },
    {
        id: 4,
        label: "Gallery",

        dropdown: [
            { name: "photos", label: "Photos", path: "/gallery/photos" },
            { name: "videos", label: "Videos", path: "/gallery/videos" },
        ],
    },
    {
        id: 5,
        label: "Contact",
        path: "#contact",
    },
];
