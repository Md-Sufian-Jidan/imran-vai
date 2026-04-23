import CTA from '@/components/modules/home/CTA';
import ProcessSection from '@/components/modules/services/ProcessSection';
import ServiceStats from '@/components/modules/services/ServiceStats';
import TechStack from '@/components/modules/services/TechStack';
import FAQSection from '@/components/shared/FAQ';
import { Metadata } from 'next';
import AllServices from '@/components/modules/services/AllServices';
import ServiceHero from '@/components/modules/services/ServiceHero';

const site_keywords = process.env.SITE_KEYWORDS

export const metadata: Metadata = {
    title: "Services | Photoshop Editing, Graphic Design & More",
    description: "Have a project in mind? Get in touch with ThePixelVerse, a professional in photography and graphic design.",
    keywords: site_keywords,
    openGraph: {
        title: "Contact ThePixelVerse",
        description: "Let's build something exceptional together.",
        images: ["/contact-og.png"], // Optional: Add a custom OG image
    },
};

const ServicesPage = () => {
    return (
        <>
            <ServiceHero />
            <AllServices />
            <ProcessSection />
            <TechStack />
            <ServiceStats />
            <FAQSection />
            <CTA />
        </>
    );
};

export default ServicesPage;