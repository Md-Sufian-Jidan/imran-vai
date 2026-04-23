"use client";

import { services } from "@/lib/commonLinks";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function AllServices() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* ── Background Decoration ── */}
            {/* Soft Primary Teal Glow - Top Right */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-teal/5 blur-[120px] -z-10 rounded-full"
                aria-hidden="true"
            />
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20 opacity-20" />

            <SectionWrapper className="pt-32 pb-20" containerClassName="px-0 md:px-6">
                <div className="flex flex-col items-center">
                    {/* ── Header Section ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <SectionHeading
                            label="Solutions & Expertise"
                            title="Services built for sustainable growth"
                            description="From strategy to execution, we deliver end-to-end creative solutions that transform brands and accelerate business growth."
                        />
                    </motion.div>

                    {/* ── Services Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 w-full">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                <ServiceCard service={service} i={i} />
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Bottom Trust Indicator ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 pt-10 border-t border-border w-full flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                        <p className="text-[#999999] text-sm font-medium tracking-wide">
                            Trusted by <span className="text-black font-bold">50+ ambitious brands</span> worldwide.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-primary-teal/30" />
                            <span className="text-primary-teal text-[10px] font-black uppercase tracking-[0.2em]">
                                Explore Our Process Below
                            </span>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}