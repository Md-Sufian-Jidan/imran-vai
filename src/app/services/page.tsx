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
    title: "Services | Md Abu Sufian Jidan | MERN Stack Developer for Hire",
    description: "Have a project in mind? Get in touch with Md Abu Sufian Jidan, a professional MERN stack developer specializing in Next.js and React.",
    keywords: site_keywords,
    openGraph: {
        title: "Contact Md Abu Sufian Jidan",
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