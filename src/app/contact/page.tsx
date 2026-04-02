import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/modules/contact/ContactForm";
import { Metadata } from "next";
const site_keywords = process.env.SITE_KEYWORDS

export const metadata: Metadata = {
    title: "Contact Md Abu Sufian Jidan | MERN Stack Developer for Hire",
    description: "Have a project in mind? Get in touch with Md Abu Sufian Jidan, a professional MERN stack developer specializing in Next.js and React.",
    keywords: site_keywords,
    openGraph: {
        title: "Contact Md Abu Sufian Jidan",
        description: "Let's build something exceptional together.",
        images: ["/contact-og.png"], // Optional: Add a custom OG image
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-background py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                            Let's build <br />
                            <span className="text-primary italic">together.</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-md">
                            Have a specific project in mind or just want to say hi?
                            Drop a message and I'll respond within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-6 pt-8">
                        {contactInfo.map((item) => {
                            const Icon = getIconComponent(item.icon);
                            return (
                                <div key={item.label} className="group flex items-center gap-5 transition-all">
                                    {/* Icon Container */}
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3",
                                        item.color // Uses your specific colors from the array
                                    )}>
                                        <Icon size={20} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
                                            {item.label}
                                        </p>
                                        <a
                                            href={item.href}
                                            target={item.label === "Location" ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
}