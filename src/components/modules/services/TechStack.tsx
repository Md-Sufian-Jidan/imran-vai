"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion, Variants } from "framer-motion";
import {
    Database,
    Layers,
    Cpu,
    Globe,
    Zap,
    Code2,
    Infinity,
    Smartphone
} from "lucide-react";
import { serviceTechnologies } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";


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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
};

export default function TechStack() {
    return (
        <section className="bg-white border-t border-border/50">
            <SectionWrapper containerClassName="px-0 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* ── Left Side: Content ── */}
                    <div className="w-full lg:w-1/3 sticky top-32">
                        <SectionHeading
                            label="Our Tools"
                            title="Professional software for pixel-perfect results"
                            description="We use industry-leading photo editing software and tools to deliver high-quality, professional results that exceed client expectations."
                        />

                        <div className="mt-8 p-6 rounded-xl bg-primary-teal/5 border border-primary-teal/10">
                            <p className="text-black text-sm font-bold uppercase tracking-widest mb-2">
                                Quality First
                            </p>
                            <p className="text-[#999999] text-sm leading-relaxed font-medium">
                                Every tool in our arsenal is chosen for precision, quality, and
                                delivering stunning visual results.
                            </p>
                        </div>
                    </div>

                    {/* ── Right Side: Tech Grid ── */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                        {serviceTechnologies.map((tech) => {
                            const Icon = getIconComponent(tech.icon)
                            return (
                                <motion.div
                                    key={tech.name}
                                    variants={itemVariants}
                                    className="group relative p-8 rounded-xl border border-border bg-white transition-all duration-500 hover:border-primary-teal/40 hover:shadow-xl hover:shadow-primary-teal/5"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-slate-50 text-[#999999] group-hover:bg-primary-teal group-hover:text-white transition-all duration-500">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>

                                        <h4 className="text-black font-black text-sm uppercase tracking-tight mb-1">
                                            {tech.name}
                                        </h4>
                                        <span className="text-[#999999] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {tech.category}
                                        </span>
                                    </div>

                                    {/* Background Decorative Number/Label */}
                                    <div className="absolute top-4 right-6 text-[8px] font-black text-slate-100 group-hover:text-primary-teal/10 transition-colors">
                                        TECH
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}