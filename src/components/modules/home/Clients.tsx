"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { clients } from "@/lib/commonLinks";
import { cn } from "@/lib/utils";

export default function Clients() {
    // Duplicate clients for a seamless infinite loop
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="bg-[#FAFAFA]">
            <SectionWrapper className="md:py-20 py-10 border-y border-border/50">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <p className="text-center text-[#999999] text-sm md:text-base font-bold uppercase tracking-[0.3em] font-plus-jakarta">
                        Trusted by forward-thinking brands
                    </p>
                    <div className="h-px w-12 bg-primary-teal/30 mt-4" />
                </motion.div>

                {/* Marquee Container */}
                <div className="relative flex overflow-hidden py-4">
                    <motion.div
                        className="flex gap-12 md:gap-20 flex-nowrap"
                        animate={{
                            x: [0, -1035], // Adjust this value based on your content width if needed
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="group relative flex items-center justify-center flex-shrink-0"
                            >
                                <span
                                    className={cn(
                                        "font-heading font-bold text-xl md:text-2xl tracking-tighter transition-all duration-500",
                                        "text-[#999999]/40 group-hover:text-primary-teal group-hover:drop-shadow-[0_0_8px_rgba(24,124,139,0.3)]"
                                    )}
                                >
                                    {client.name}
                                </span>

                                {/* Hover Glow */}
                                <div className="absolute inset-x-[-20px] inset-y-0 bg-primary-teal/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Fades for Smooth Edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
            </SectionWrapper>
        </section>
    );
}