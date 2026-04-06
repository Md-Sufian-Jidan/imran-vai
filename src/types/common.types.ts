import { StaticImageData } from "next/image";

export interface Service {
    icon: string;
    title: string;
    desc: string;
    benefits: string[];
    url?: string;
    before: StaticImageData;
    after: StaticImageData;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    overview: string;
    problem: string;
    solution: string;
    process: string[];
    results: { label: string; value: string }[];
    image: StaticImageData;
    desc: string;
    liveLink: string;
}

export interface Testimonial {
    name: string;
    role: string;
    text: string;
    rating: number;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface Client {
    name: string;
    logo: string;
};

export interface FooterLink {
    title: string;
    links: { label: string; href: string }[];
}

export interface SocialLink {
    label: string;
    href: string;
};

export interface Stat {
    number: string;
    label: string;
    sub: string;
}

export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    color: string;
    href: string;
};

export interface PricingTable {
    label: string;
    basic: string | boolean;
    standard: string | boolean;
    premium: string | boolean;
}

export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
}

export interface PricingFeature {
    icon: string;
    title: string;
    desc: string;
}

export interface PrivacyInfo {
    icon: string;
    title: string;
    content: string
}

export interface TermsInfo {
    icon: string;
    title: string;
    content: string;
}

export interface Steps {
    step: string;
    icon: string;
    title: string;
    desc: string;
}

export interface TeamMember {
    name: string;
    role: string;
    designation: string;
    initial: string;
}

export interface ServiceStep {
    title: string;
    desc: string;
    icon: string;
}

export interface ServiceTech {
    name: string;
    category: string;
    icon: string;
}

export interface FAQ {
    question: string;
    answer: string;
}
