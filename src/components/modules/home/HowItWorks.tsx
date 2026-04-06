"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { steps } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeading
                    label="Process"
                    title="Simplified Steps For Image Editing"
                    description="Simple few clicks can complete your photo editing work following our easy process."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {steps.map((step, i) => {
                        const Icon = getIconComponent(step.icon);
                        return (
                            <motion.div
                                key={step.step}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                // Updated to light border and subtle muted background
                                className="relative p-8 rounded-2xl border border-border bg-muted/30 backdrop-blur-sm hover:border-primary-teal/40 transition-all duration-500 group"
                            >
                                {/* Step Icon Box - Teal Accents */}
                                <div className="w-14 h-14 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal transition-all duration-300 shadow-[0_0_15px_rgba(24,124,139,0.05)] group-hover:shadow-[0_0_25px_rgba(24,124,139,0.3)]">
                                    <Icon
                                        className="text-primary-teal group-hover:text-white transition-colors"
                                        size={26}
                                    />
                                </div>

                                <div className="space-y-3">
                                    {/* Step Label - Gray (#999999) */}
                                    <span className="text-xs font-bold text-[#999999] uppercase tracking-[0.2em] block">
                                        Step {step.step}
                                    </span>

                                    {/* Heading - Black */}
                                    <h3 className="font-heading font-semibold text-xl text-black">
                                        {step.title}
                                    </h3>

                                    {/* Description - Muted Gray */}
                                    <p className="text-[#999999] text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Decorative Corner Glow - Teal */}
                                <div className="absolute -right-2 -top-2 w-16 h-16 bg-primary-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};