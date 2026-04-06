"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { Eye, Target } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

export default function MissionVision() {
    return (
        <section>
            <SectionWrapper className="bg-[#FAFAFA]" containerClassName="px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* ── Mission Card ── */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group p-8 md:p-10 rounded-[2rem] border border-border bg-white hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/5 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary-teal/5 flex items-center justify-center border border-primary-teal/10 group-hover:bg-primary-teal group-hover:text-white transition-colors duration-500">
                                <Target size={22} className="text-primary-teal group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="font-heading font-black text-2xl text-black uppercase tracking-tight">Our Mission</h3>
                        </div>
                        <p className="text-[#999999] leading-relaxed text-lg font-medium">
                            To empower brands with world-class design and digital strategy that drives meaningful growth.
                            We believe great design isn&apos;t just beautiful — it&apos;s a <span className="text-black font-bold">powerful business tool.</span>
                        </p>
                    </motion.div>

                    {/* ── Vision Card ── */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group p-8 md:p-10 rounded-[2rem] border border-border bg-white hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/5 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary-teal/5 flex items-center justify-center border border-primary-teal/10 group-hover:bg-primary-teal group-hover:text-white transition-colors duration-500">
                                <Eye size={22} className="text-primary-teal group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="font-heading font-black text-2xl text-black uppercase tracking-tight">Our Vision</h3>
                        </div>
                        <p className="text-[#999999] leading-relaxed text-lg font-medium">
                            To be the creative partner of choice for brands that refuse to settle.
                            We envision a world where every digital interaction is <span className="text-black font-bold">thoughtfully designed</span> and deeply impactful.
                        </p>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}