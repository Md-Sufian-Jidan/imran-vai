"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { steps } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#021a14]">
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
                                // Individual border and background colors
                                className="relative p-8 rounded-2xl border border-[#10b981]/10 bg-[#022c22]/30 backdrop-blur-sm hover:border-[#10b981]/40 transition-all duration-500 group"
                            >
                                {/* Step Icon Box - Individual Emerald Styling */}
                                <div className="w-14 h-14 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-6 group-hover:bg-[#10b981] transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                                    <Icon
                                        className="text-[#10b981] group-hover:text-[#021a14] transition-colors"
                                        size={26}
                                    />
                                </div>

                                <div className="space-y-3">
                                    {/* Individual Step Label Color */}
                                    <span className="text-xs font-bold text-[#10b981]/60 uppercase tracking-[0.2em] block">
                                        Step {step.step}
                                    </span>

                                    {/* Individual Heading Color (Emerald-50 equivalent) */}
                                    <h3 className="font-heading font-semibold text-xl text-[#ecfdf5]">
                                        {step.title}
                                    </h3>

                                    {/* Individual Description Color */}
                                    <p className="text-[#ecfdf5]/60 text-sm leading-relaxed group-hover:text-[#ecfdf5]/90 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Decorative Corner Glow */}
                                <div className="absolute -right-2 -top-2 w-16 h-16 bg-[#10b981]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};