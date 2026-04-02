"use client";

import { motion } from "framer-motion";
import { Scale, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { termSections } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";

export default function TermsPage() {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-background py-32 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    className="space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                        <Scale className="w-4 h-4" />
                        Legal Framework
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                        Terms & <span className="text-muted-foreground italic">Conditions</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Standard operating procedures for collaboration and site usage.
                    </p>
                </motion.div>

                <Separator className="mb-16" />

                {/* Content Sections */}
                <div className="space-y-12">
                    {termSections.map((section, index) => {
                        const Icon = getIconComponent(section.icon);
                        return (
                            (
                                <motion.section
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.section>
                            )
                        )
                    })}
                </div>

                {/* Contact/Support Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold">Have questions?</h3>
                            <p className="text-sm opacity-80">
                                If you need clarification on any terms, feel free to ask.
                            </p>
                        </div>
                    </div>
                    <a
                        href="/contact"
                        className="px-6 py-2 bg-white text-primary rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </div>
    );
}