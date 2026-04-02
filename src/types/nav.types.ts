export interface SubService {
    title: string;
    href: string;
}
export interface NavLink {
    title: string;
    href: string;
    icon: string;
    isDropdown?: boolean;
    subServices?: SubService[];
}