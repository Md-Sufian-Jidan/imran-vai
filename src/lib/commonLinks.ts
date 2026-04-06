import { Client, ContactInfo, FAQ, FooterLink, PricingFeature, PricingPlan, PricingTable, PrivacyInfo, ProcessStep, Project, Service, ServiceStep, ServiceTech, SocialLink, Stat, Steps, TeamMember, TermsInfo, Testimonial } from "@/types/common.types";
import projectMeridian from "../assets/images/project-meridian.jpg";
import projectVolta from "../assets/images/project-volta.jpg";
import projectLuminar from "../assets/images/project-luminar.jpg";
import projectArc from "../assets/images/project-arc.jpg";
import projectNova from "../assets/images/project-nova.jpg";
import before from "../assets/images/about-team.jpg";
import after from "../assets/images/hero-abstract.jpg";

export const services: Service[] = [
    {
        icon: "Scissors",
        title: "Basic Clipping Path",
        url: "/services/basic-clipping-path",
        desc: "Simple image cutout service for products with straight edges and minimal curves.",
        benefits: [
            "White/transparent background",
            "Clean edge selection",
            "Fast turnaround",
            "E-commerce ready images",
        ],
        before,
        after,
    },
    {
        icon: "Scissors",
        title: "Simple Clipping Path",
        url: "/services/simple-clipping-path",
        desc: "Accurate clipping for slightly complex objects like shoes, bags, and electronics.",
        benefits: [
            "Smooth curves handling",
            "Multiple anchor points",
            "High-quality cutouts",
            "Bulk processing support",
        ],
        before,
        after,
    },
    {
        icon: "Scissors",
        title: "Medium Clipping Path",
        url: "/services/medium-clipping-path",
        desc: "Perfect for moderately complex products with holes and multiple curves.",
        benefits: [
            "Detailed path creation",
            "Inner cutouts supported",
            "Pixel-perfect edges",
            "Layered PSD delivery",
        ],
        before,
        after,
    },
    {
        icon: "Scissors",
        title: "Complex Clipping Path",
        url: "/services/complex-clipping-path",
        desc: "Advanced clipping for highly detailed objects like jewelry and machinery.",
        benefits: [
            "High precision paths",
            "Intricate detailing",
            "Multiple paths included",
            "Professional finishing",
        ],
        before,
        after,
    },
    {
        icon: "Layers",
        title: "Multiple Clipping Path",
        url: "/services/multiple-clipping-path",
        desc: "Separate different parts of an image for individual editing control.",
        benefits: [
            "Color editing flexibility",
            "Object separation",
            "Layer-based workflow",
            "Advanced retouching ready",
        ],
        before,
        after,
    },
    {
        icon: "Image",
        title: "Background Removal",
        url: "/services/background-removal",
        desc: "Remove unwanted backgrounds and replace with clean or custom ones.",
        benefits: [
            "White/transparent background",
            "Custom background support",
            "Shadow preservation",
            "E-commerce optimized",
        ],
        before,
        after,
    },
    {
        icon: "Feather",
        title: "Image Masking",
        url: "/services/image-masking",
        desc: "Perfect for hair, fur, and complex edges where clipping path is not enough.",
        benefits: [
            "Hair masking",
            "Soft edge handling",
            "Alpha channel masking",
            "High-detail output",
        ],
        before,
        after,
    },
    {
        icon: "Sun",
        title: "Shadow Creation",
        url: "/services/shadow-creation",
        desc: "Add realistic shadows to enhance product depth and realism.",
        benefits: [
            "Drop shadow",
            "Natural shadow",
            "Reflection shadow",
            "Custom shadow styling",
        ],
        before,
        after,
    },
    {
        icon: "Sparkles",
        title: "Photo Retouching",
        url: "/services/photo-retouching",
        desc: "Professional retouching to enhance image quality and visual appeal.",
        benefits: [
            "Skin retouching",
            "Product cleanup",
            "Color correction",
            "High-end retouching",
        ],
        before,
        after,
    },
    {
        icon: "Palette",
        title: "Color Correction",
        url: "/services/color-correction",
        desc: "Adjust colors to ensure consistency and accurate representation.",
        benefits: [
            "Brightness/contrast fix",
            "Color matching",
            "White balance correction",
            "Batch editing",
        ],
        before,
        after,
    },
    {
        icon: "Repeat",
        title: "Ghost Mannequin",
        url: "/services/ghost-mannequin",
        desc: "Create invisible mannequin effect for apparel photography.",
        benefits: [
            "Neck joint editing",
            "3D apparel look",
            "Professional clothing display",
            "E-commerce ready output",
        ],
        before,
        after,
    },
    {
        icon: "Crop",
        title: "Image Cropping & Resizing",
        url: "/services/image-cropping-resizing",
        desc: "Resize and crop images to meet platform-specific requirements.",
        benefits: [
            "Custom dimensions",
            "Aspect ratio control",
            "Platform optimization",
            "Bulk processing",
        ],
        before,
        after,
    },
    {
        icon: "PenTool",
        title: "Vector Conversion",
        url: "/services/vector-conversion",
        desc: "Convert raster images into scalable vector graphics.",
        benefits: [
            "AI/EPS/SVG formats",
            "Scalable graphics",
            "Logo recreation",
            "Print-ready files",
        ],
        before,
        after,
    },
    {
        icon: "Layers",
        title: "Image Manipulation",
        url: "/services/image-manipulation",
        desc: "Creative editing to transform images into stunning visuals.",
        benefits: [
            "Composite editing",
            "Background replacement",
            "Creative effects",
            "Advanced Photoshop work",
        ],
        before,
        after,
    },
    {
        icon: "Box",
        title: "Product Photo Editing",
        url: "/services/product-photo-editing",
        desc: "Enhance product images for e-commerce platforms like Amazon and Shopify.",
        benefits: [
            "Amazon-ready images",
            "Clean background",
            "Shadow & reflection",
            "High conversion visuals",
        ],
        before,
        after,
    },
    {
        icon: "Sparkles",
        title: "High-End Retouching",
        url: "/services/high-end-retouching",
        desc: "Premium retouching service for fashion, beauty, and advertising.",
        benefits: [
            "Magazine-quality finish",
            "Detailed skin work",
            "Lighting enhancement",
            "Professional grading",
        ],
        before,
        after,
    },
];

export const projects: Project[] = [
    {
        id: "meridian-finance",
        title: "Meridian Finance",
        category: "Branding · Web Design",
        overview:
            "Meridian Finance needed a complete brand transformation to position themselves as a modern, trustworthy fintech leader. We delivered a cohesive identity system and a high-converting marketing website.",
        problem:
            "Their outdated brand and website failed to communicate credibility to sophisticated investors. Conversion rates were stagnant and brand awareness was declining in a competitive market.",
        solution:
            "We developed a bold new visual identity anchored in trust and innovation, paired with a conversion-optimized website featuring dynamic data visualizations and seamless user flows.",
        process: [
            "Brand audit and competitor analysis",
            "Identity system development",
            "Website wireframing and prototyping",
            "Development and launch optimization",
        ],
        results: [
            { label: "Conversion Rate Increase", value: "340%" },
            { label: "Brand Awareness Lift", value: "2.5x" },
            { label: "Page Load Speed", value: "1.2s" },
            { label: "User Engagement", value: "+180%" },
        ],
        desc: "Complete brand overhaul and digital platform for a fintech startup.",
        image: projectMeridian,
        liveLink: "https://meridian-finance-clone.vercel.app/",
    },

    {
        id: "volta-energy",
        title: "Volta Energy",
        category: "UI/UX · Development",
        overview:
            "Volta Energy required a powerful dashboard to monitor renewable energy systems in real-time and provide actionable insights.",
        problem:
            "Users struggled with complex data visualization and lacked clarity in monitoring energy output, leading to inefficiencies.",
        solution:
            "We designed an intuitive dashboard with real-time analytics, simplified data visualization, and seamless navigation for better decision-making.",
        process: [
            "User research and journey mapping",
            "Dashboard wireframing",
            "UI system design",
            "Frontend development and testing",
        ],
        results: [
            { label: "User Efficiency", value: "+220%" },
            { label: "Data Accuracy", value: "99.9%" },
            { label: "User Retention", value: "+150%" },
            { label: "System Performance", value: "1.5s load" },
        ],
        desc: "Dashboard design and development for a renewable energy company.",
        image: projectVolta,
        liveLink: "https://volta-energy-clone.vercel.app/",
    },

    {
        id: "luminar-studios",
        title: "Luminar Studios",
        category: "Brand Identity",
        overview:
            "Luminar Studios wanted a premium brand identity that reflects creativity and professionalism in content production.",
        problem:
            "Their branding lacked consistency and failed to differentiate them in a saturated creative market.",
        solution:
            "We crafted a modern visual identity system with strong typography, cinematic color palettes, and cohesive brand guidelines.",
        process: [
            "Brand discovery workshop",
            "Visual identity exploration",
            "Logo and typography design",
            "Brand guidelines creation",
        ],
        results: [
            { label: "Brand Recognition", value: "+200%" },
            { label: "Client Acquisition", value: "+120%" },
            { label: "Social Engagement", value: "+180%" },
            { label: "Brand Consistency", value: "100%" },
        ],
        desc: "Visual identity system for a premium content production studio.",
        image: projectLuminar,
        liveLink: "https://luminar-studios-clone.vercel.app/",
    },

    {
        id: "arc-athletics",
        title: "Arc Athletics",
        category: "E-commerce · Branding",
        overview:
            "Arc Athletics needed a premium e-commerce experience to match their high-end athletic wear brand.",
        problem:
            "Their previous store had poor UX, low conversions, and didn’t reflect the premium quality of their products.",
        solution:
            "We built a sleek, high-performance e-commerce platform with immersive product pages and a seamless checkout experience.",
        process: [
            "UX audit and competitor analysis",
            "E-commerce wireframing",
            "UI design system",
            "Shopify/Next.js development",
        ],
        results: [
            { label: "Conversion Rate", value: "+310%" },
            { label: "Average Order Value", value: "+70%" },
            { label: "Cart Abandonment", value: "-40%" },
            { label: "Page Speed", value: "1.3s" },
        ],
        desc: "Full e-commerce experience for a premium athletic wear brand.",
        image: projectArc,
        liveLink: "https://arc-athletics-clone.vercel.app/",
    },

    {
        id: "nova-ai",
        title: "Nova AI",
        category: "UI/UX · Web Design",
        overview:
            "Nova AI required a modern product website to explain complex AI solutions in a simple and engaging way.",
        problem:
            "Users found it difficult to understand the product’s value due to overly technical messaging and poor UX.",
        solution:
            "We designed a clean, futuristic website with clear messaging, interactive demos, and strong visual storytelling.",
        process: [
            "User persona development",
            "Content strategy",
            "Wireframing and prototyping",
            "UI design and frontend development",
        ],
        results: [
            { label: "User Understanding", value: "+250%" },
            { label: "Lead Generation", value: "+180%" },
            { label: "Bounce Rate", value: "-35%" },
            { label: "Engagement Time", value: "+90%" },
        ],
        desc: "Product website and interface design for an AI SaaS platform.",
        image: projectNova,
        liveLink: "https://nova-ai-clone.vercel.app/",
    },
];

export const testimonials: Testimonial[] = [
    { name: "Sarah Chen", role: "CEO, Luminary Labs", text: "ThePixelVerse transformed our entire digital presence in under 8 weeks. The attention to detail and strategic thinking they brought was unlike anything we'd experienced before.", rating: 5, },
    { name: "Marcus Webb", role: "Founder, Driftwood Co.", text: "Working with Apex felt collaborative from day one. They pushed back when our ideas weren't serving the brand, and the final product exceeded every expectation we had.", rating: 5, },
    { name: "Priya Nair", role: "Head of Growth, Velox SaaS", text: "Our conversion rate jumped 34% after the redesign. I was skeptical about the timeline, but they delivered a polished, performant product well ahead of schedule.", rating: 5, },
    { name: "Jordan Holt", role: "Creative Director, Mantle Agency", text: "The design system they built us is something we'll use for years. Clean, extensible, and beautiful — it made our dev team's lives so much easier.", rating: 5, },
    { name: "Elena Vasquez", role: "Marketing Lead, Bloom Studio", text: "Every touch point felt intentional. The animations, the copywriting guidance, the brand refresh — it all came together in a way that finally felt like us.", rating: 5, },
    { name: "Sarah Chen", role: "CEO, Meridian Finance", text: "ThePixelVerse transformed our entire digital presence. The results exceeded every expectation we had.", rating: 5 },
    { name: "Marcus Webb", role: "Founder, Volta Energy", text: "Their design thinking and execution is world-class. Our conversion rate increased 340% after the redesign.", rating: 5 },
    { name: "Elena Rodriguez", role: "CMO, Luminar Studios", text: "Working with Apex was a game-changer. They truly understand how to translate a brand into digital excellence.", rating: 5 },
    { name: "Jordan Holt", role: "Creative Director, Mantle Agency", text: "The design system they built us is something we'll use for years. Clean, extensible, and beautiful — it made our dev team's lives so much easier.", rating: 5, },
    { name: "Elena Vasquez", role: "Marketing Lead, Bloom Studio", text: "Every touch point felt intentional. The animations, the copywriting guidance, the brand refresh — it all came together in a way that finally felt like us.", rating: 5, },
];

export const process: ProcessStep[] = [
    { step: "01", title: "Discovery", desc: "We dive deep into your brand, goals, and audience to understand the full picture." },
    { step: "02", title: "Strategy", desc: "We craft a tailored roadmap that aligns creative vision with business objectives." },
    { step: "03", title: "Design", desc: "Our team brings concepts to life with stunning, conversion-focused designs." },
    { step: "04", title: "Launch", desc: "We deliver, test, and optimize to ensure flawless execution and measurable impact." },
];

export const clients: Client[] = [
    { name: "TechCorp", logo: "TechCorp" },
    { name: "InnovateLab", logo: "InnovateLab" },
    { name: "CloudBase", logo: "CloudBase" },
    { name: "DataFlow", logo: "DataFlow" },
    { name: "PixelPerfect", logo: "PixelPerfect" },
    { name: "BrightPath", logo: "BrightPath" }
];

export const steps: Steps[] = [
    { icon: "Upload", step: "01", title: "Upload Your Images", desc: "Send us your unedited images through our easy upload form or free trial page." },
    { icon: "MessageSquare", step: "02", title: "Get Quick Reply", desc: "We respond to any queries in less than 15 minutes with a detailed quote." },
    { icon: "Download", step: "03", title: "Download Images", desc: "We'll deliver a better version of your photos exactly as you want them." },
    { icon: "CreditCard", step: "04", title: "Make Payment", desc: "Pay after approval in your local currency — USD, Euro, GBP, CAD, AUD." },
    { icon: "MessageSquare", step: "02", title: "Get Quick Reply", desc: "We respond to any queries in less than 15 minutes with a detailed quote." },
];

export const serviceSteps: ServiceStep[] = [
    { title: "Discovery & Strategy", desc: "We dive deep into your brand, goals, and target audience to create a data-driven roadmap for success.", icon: "Search" },
    { title: "Design & Experience", desc: "Our creatives craft intuitive, high-fidelity designs that prioritize user experience and brand identity.", icon: "PenTool" },
    { title: "Development & Build", desc: "Using the MERN stack and Next.js, we transform designs into scalable, high-performance digital products.", icon: "Code2" },
    { title: "Launch & Optimization", desc: "We deploy your project with a focus on speed and SEO, ensuring a seamless entry into the market.", icon: "Rocket" },
];

// Footer links
export const footerLinks: FooterLink[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Contact", href: "/contact" },
        ]
    },
    {
        title: "Services",
        links: [
            { label: "Basic Clipping Path", href: "/services/basic-clipping-path" },
            { label: "Background Removal", href: "/services/background-removal" },
            { label: "Image Masking", href: "/services/image-masking" },
            { label: "Photo Retouching", href: "/services/photo-retouching" },
            { label: "View All Services", href: "/services" },
        ]
    },
];

export const socialLinks: SocialLink[] = [
    { label: "Twitter", href: "https://twitter.com/thepixelverse" },
    { label: "LinkedIn", href: "https://linkedin.com/company/thepixelverse" },
    { label: "Dribbble", href: "https://dribbble.com/thepixelverse" },
];

// About page data

export const values = [
    { icon: "Lightbulb", title: "Innovation First", desc: "We push boundaries with fresh thinking and bold creative solutions." },
    { icon: "Target", title: "Results Driven", desc: "Every pixel and line of code is optimized for measurable business impact." },
    { icon: "Shield", title: "Quality Obsessed", desc: "We hold ourselves to the highest standards of craft and excellence." },
    { icon: "Users", title: "Client Partners", desc: "We work alongside you as dedicated partners invested in your success." },
];

export const teamMembers: TeamMember[] = [
    { name: "Imran Hossain", role: "Graphic Designer", designation: "CEO & Founder", initial: "IH", },
    { name: "Md Abu Sufian Jidan", role: "Junior Web Developer", designation: "Software Engineer", initial: "SJ", },
    { name: "Sarah Jenkins", role: "UI/UX Designer", designation: "Product Lead", initial: "SJ", },
    { name: "Alex River", role: "MERN Stack Developer", designation: "Backend Engineer", initial: "AR", },
];

export const stats: Stat[] = [
    { number: "150+", label: "Projects Delivered", sub: "Global Reach" },
    { number: "50+", label: "Happy Clients", sub: "Trusted Partner" },
    { number: "12", label: "Awards Won", sub: "Design Excellence" },
    { number: "05+", label: "Years Experience", sub: "Industry Experts" },
];

// Contact page data

export const contactInfo: ContactInfo[] = [
    { icon: "Mail", label: "Email", value: "hello@thepixelverse.com", href: "mailto:hello@thepixelverse.com", color: "bg-blue-500/10 text-blue-500" },
    { icon: "Phone", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567", color: "bg-green-500/10 text-green-500" },
    {
        icon: "MapPin", label: "Location", value: "San Francisco, CA", href: "https://maps.google.com/?q=San+Francisco,CA",
        color: "bg-purple-500/10 text-purple-500"
    },
];

// Pricing page
export const pricingTable: PricingTable[] = [
    { label: "Clipping Path", basic: "Simple", standard: "Complex", premium: "Super Complex" },
    { label: "Background Removal", basic: true, standard: true, premium: true },
    { label: "Natural Shadow", basic: true, standard: true, premium: true },
    { label: "Color Correction", basic: false, standard: true, premium: true },
    { label: "Neck Joint", basic: false, standard: "2.50/pc", premium: "Included" },
    { label: "Jewelry Retouching", basic: false, standard: false, premium: true },
    { label: "Turnaround Time", basic: "24h", standard: "12-24h", premium: "Express" },
];

export const pricingPlans: PricingPlan[] = [
    { name: "Basic", price: "0.39", description: "Ideal for simple shapes with straight edges.", features: ["Single Path", "Straight Edges", "White Background", "Natural Shadow"], popular: false, },
    { name: "Standard", price: "0.75", description: "Best for apparel, shoes, and curved products.", features: ["Multiple Paths", "Curved Edges", "Color Correction", "Ghost Mannequin"], popular: true, },
    { name: "Premium", price: "2.50", description: "For complex items like jewelry and machinery.", features: ["Intricate Detailing", "Hair Masking", "High-End Retouching", "Reflection Shadow"], popular: false, },
];

export const pricingFeatures: PricingFeature[] = [
    { icon: "Clock", title: "24/7 Support", desc: "Always here for you" },
    { icon: "Zap", title: "Fast Delivery", desc: "Under 24 hours" },
    { icon: "ShieldCheck", title: "Secure Payment", desc: "100% protection" },
    { icon: "MousePointerClick", title: "Free Samples", desc: "Check quality first" },
];

// Privacy Policy
export const privacySectionInfo: PrivacyInfo[] = [
    {
        title: "Information We Collect",
        icon: "Eye",
        content: "We only collect information that you voluntarily provide to us through our contact form, such as your name and email address. We do not use cookies for tracking purposes or collect data behind the scenes.",
    },
    {
        title: "How We Use Your Data",
        icon: "FileText",
        content: "The data you provide is used strictly to respond to your inquiries. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    },
    {
        title: "Data Security",
        icon: "Lock",
        content: "We implement industry-standard security measures to protect your information. Your messages sent via our contact form are processed securely via encrypted SMTP protocols.",
    },
    {
        title: "Third-Party Services",
        icon: "Globe",
        content: "Our website may contain links to external sites (like GitHub or LinkedIn). Please be aware that we are not responsible for the privacy practices of such other sites.",
    },
];

// Terms & Conditions
export const termSections: TermsInfo[] = [
    {
        title: "Project Initiation",
        icon: "PencilRuler",
        content: "All projects begin with a detailed discovery phase. Work commences only after a formal agreement is signed and the initial deposit (if applicable) is processed.",
    },
    {
        title: "Intellectual Property",
        icon: "Copyright",
        content: "Upon full payment, the client owns the final deliverables. However, I reserve the right to display the work in my portfolio and marketing materials unless otherwise agreed in writing.",
    },
    {
        title: "Client Responsibilities",
        icon: "Zap",
        content: "Timely feedback is essential for meeting deadlines. Delays in providing requested content or approvals may result in a shift of the final delivery date.",
    },
    {
        title: "Prohibited Uses",
        icon: "Ban",
        content: "You may not use any code, designs, or assets from this website for commercial purposes without explicit permission. Reverse-engineering or scraping this site is strictly prohibited.",
    },
];

export const serviceTechnologies: ServiceTech[] = [
    { name: "Next.js", category: "Frontend", icon: "Globe" },
    { name: "React", category: "Library", icon: "Layers" },
    { name: "Node.js", category: "Backend", icon: "Cpu" },
    { name: "MongoDB", category: "Database", icon: "Database" },
    { name: "TypeScript", category: "Language", icon: "Code2" },
    { name: "Tailwind CSS", category: "Styling", icon: "Zap" },
    { name: "Prisma", category: "ORM", icon: "Infinity" },
    { name: "Framer Motion", category: "Animation", icon: "Smartphone" },
];

export const faqs: FAQ[] = [
    {
        question: "How long does a typical project take?",
        answer: "Timeline varies depending on complexity. A standard landing page takes 2-3 weeks, while a full-scale MERN stack application typically spans 6-10 weeks from discovery to launch."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer flexible maintenance packages. Whether it's security updates, performance optimization, or adding new features, we ensure your digital product stays ahead of the curve."
    },
    {
        question: "Will my website be SEO friendly?",
        answer: "Absolutely. We build with Next.js which provides superior SSR (Server Side Rendering) capabilities. Combined with clean semantic HTML and optimized metadata, your site is built to rank."
    },
    {
        question: "Can you work with my existing brand guidelines?",
        answer: "We love collaborating with established brands. Our design team will strictly follow your existing style guides while looking for ways to elevate the digital experience."
    }
];
