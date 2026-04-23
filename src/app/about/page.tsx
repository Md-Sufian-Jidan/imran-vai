import AboutHero from "@/components/modules/about/AboutHero";
import MissionVision from "@/components/modules/about/Mission&Vision";
import Stats from "@/components/modules/about/Stats";
import Team from "@/components/modules/about/Team";
import TeamPhoto from "@/components/modules/about/TeamPhoto";
import WhyChooseUs from "@/components/modules/about/WhyChooseUs";
import CTA from "@/components/modules/home/CTA";
import { Metadata } from 'next';

const site_keywords = process.env.SITE_KEYWORDS

export const metadata: Metadata = {
    title: "About Us ",
    description: "Have a project in mind? Get in touch with Md Abu Sufian Jidan, a professional MERN stack developer specializing in Next.js and React.",
    keywords: site_keywords,
    openGraph: {
        title: "Contact ThePixelVerse",
        description: "Let's build something exceptional together.",
        // images: ["/contact-og.png"], // Optional: Add a custom OG image
    },
};

const AboutPage = () => {
    return (
        <main>
            <AboutHero />
            <TeamPhoto />
            <MissionVision />
            <WhyChooseUs />
            <Team />
            <Stats />
            <CTA />
        </main>
    );
};

export default AboutPage;