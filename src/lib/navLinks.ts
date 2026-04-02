import { NavLink } from "@/types/nav.types";

export const navLinks: NavLink[] = [
    { title: "About", href: "/about", icon: "User" },
    {
        title: "Services",
        href: "/services",
        icon: "Settings",
        isDropdown: true,
        subServices: [
            { title: "Basic Clipping Path", href: "/services/basic-clipping-path" },
            { title: "Advanced Clipping Path", href: "/services/advanced-clipping-path" },
            { title: "Product Clipping Path", href: "/services/product-clipping-path" },
            { title: "Hair Clipping Path", href: "/services/hair-clipping-path" },
            { title: "Jewelry Clipping Path", href: "/services/jewelry-clipping-path" },
            { title: "Complex Clipping Path", href: "/services/complex-clipping-path" },
            { title: "Color Correction", href: "/services/color-correction" },
            { title: "Shadow Creation", href: "/services/shadow-creation" },
            { title: "Image Retouching", href: "/services/image-retouching" },
            { title: "Ghost Mannequin", href: "/services/ghost-mannequin" },
            { title: "Jewelry Retouching", href: "/services/jewelry-retouching" },
            { title: "Product Retouching", href: "/services/product-retouching" },
            { title: "E-commerce Retouching", href: "/services/e-commerce-retouching" },
            { title: "Portrait Retouching", href: "/services/portrait-retouching" },
            { title: "Real Estate Retouching", href: "/services/real-estate-retouching" },
            { title: "Background Removal", href: "/services/image-background-removal" },
            { title: "Background Replacement", href: "/services/image-background-replacement" },
            { title: "Background Editing", href: "/services/image-background-editing" },
        ]
    },
    { title: "Portfolio", href: "/portfolio", icon: "Briefcase" },
    { title: "Pricing", href: "/pricing", icon: "DollarSign" },
    { title: "Contact", href: "/contact", icon: "Mail" },
];