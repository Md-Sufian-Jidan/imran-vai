"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { process } from "@/lib/commonLinks";
import { motion } from "framer-motion";

export default function Process() {
    return (
        <section className="bg-[#FAFAFA]">
            <SectionWrapper containerClassName="px-0 md:px-6">
                <SectionHeading
                    label="Our Process"
                    title="How we bring ideas to life"
                    description="A proven four-step approach that ensures every project is delivered with precision and purpose."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {process.map((step, i) => (
                        <motion.div
                            key={step.step}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-xl border border-border bg-white transition-all duration-300 hover:border-primary-teal/30 hover:shadow-[0_20px_50px_-20px_rgba(24,124,139,0.1)]"
                        >
                            {/* Step Number - Primary Teal with Low Opacity */}
                            <span className="text-6xl font-heading font-black text-primary-teal/10 group-hover:text-primary-teal/20 block mb-6 transition-colors duration-300">
                                {step.step}
                            </span>

                            {/* Title - Black to Teal on hover */}
                            <h3 className="font-heading font-bold text-xl text-black mb-3 group-hover:text-primary-teal transition-colors">
                                {step.title}
                            </h3>

                            {/* Description - Gray #999999 */}
                            <p className="text-[#999999] text-sm leading-relaxed font-medium">
                                {step.desc}
                            </p>

                            {/* Decorative Bottom Line - Primary Teal */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-primary-teal/40 transition-all duration-500 rounded-xl" />
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}