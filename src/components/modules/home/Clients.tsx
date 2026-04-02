"use client";

import { motion, Variants } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { clients } from "@/lib/commonLinks";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function Clients() {
    return (
        <section className="bg-background">
            <SectionWrapper className="md:py-20 py-10 border-y border-border/50">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <p className="text-center text-muted-foreground text-base md:text-xl font-bold uppercase tracking-[0.3em] font-plus-jakarta">
                        Trusted by forward-thinking brands
                    </p>
                    <div className="h-px w-12 bg-primary/30 mt-4" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center"
                >
                    {clients.map((client) => (
                        <motion.div
                            key={client.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="group relative flex items-center justify-center p-4 w-full h-20"
                        >
                            <span
                                className={cn(
                                    "font-heading font-bold text-lg md:text-xl tracking-tighter transition-all duration-500",
                                    "text-muted-foreground group-hover:text-primary/80"
                                )}
                            >
                                {client.name}
                            </span>

                            {/* Subtle hover glow matching your OKLCH primary */}
                            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}