import { Metadata } from "next";

const site_keywords = process.env.SITE_KEYWORDS

export const metadata: Metadata = {
    title: "Contact Apex Studio | Professional Photo Editing & Retouching Services",
    description: "Get in touch with Apex Studio for high-quality clipping path, background removal, and photo retouching services. Fast turnaround and 24/7 support for photographers and e-commerce businesses.",
    keywords: "photo editing contact, clipping path service, background removal, photo retouching studio, ecommerce photo editing",
    openGraph: {
        title: "Contact Apex Studio - Photo Editing Experts",
        description: "Transform your images with professional retouching and clipping path services. Contact us today for a free trial.",
    },
    alternates: {
        canonical: "https://thepixelverse.com/contact",
    }
};

import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactHero from "@/components/modules/contact/ContactHero";
import ContactFormSection from "@/components/modules/contact/ContactFormSection";
import ContactFaq from "@/components/modules/contact/ContactFaq";
import ContactMap from "@/components/modules/contact/ContactMap";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <SectionWrapper containerClassName="px-0 md:px-6">
                <ContactHero />
                <ContactFormSection />
                <ContactFaq />
                <ContactMap />
            </SectionWrapper>
        </main>
    );
}
