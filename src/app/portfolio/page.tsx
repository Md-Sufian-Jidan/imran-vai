import Portfolio from '@/components/modules/portfolio/Portfolio';
import { Metadata } from 'next';

const site_keywords = process.env.SITE_KEYWORDS

export const metadata: Metadata = {
    title: "Portfolio | MERN Stack Developer for Hire",
    description: "Have a project in mind? Get in touch with Md Abu Sufian Jidan, a professional MERN stack developer specializing in Next.js and React.",
    keywords: site_keywords,
    openGraph: {
        title: "Portfolio | MERN Stack Developer for Hire",
        description: "Let's build something exceptional together.",
        images: ["/portfolio-og.png"],
    },
};

const PortfolioPage = () => {
    return (
        <main>
            <Portfolio />
        </main>
    );
};

export default PortfolioPage;