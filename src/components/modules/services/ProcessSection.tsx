"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { serviceSteps } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import { ShieldCheck } from "lucide-react";


export default function ProcessSection() {
    return (
        <SectionWrapper className="bg-[#FAFAFA]" containerClassName="px-6">
            <SectionHeading
                label="The Roadmap"
                title="How we bring ideas to life"
                description="Our proven 4-step process ensures every project is delivered with precision, speed, and creative excellence."
            />

            <div className="relative mt-20 max-w-5xl mx-auto">
                {/* ── Central Connector Line (Teal Gradient) ── */}
                <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-teal/40 via-primary-teal/10 to-transparent -translate-x-1/2 hidden md:block" />

                <div className="space-y-20">
                    {serviceSteps.map((step, i) => {
                        const Icon = getIconComponent(step.icon);
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* ── Content Side ── */}
                                <div className="flex-1 w-full md:w-auto text-left md:text-right px-4 md:px-12 group">
                                    <div className={`${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                                        <h3 className="font-heading font-black text-2xl text-black uppercase tracking-tight mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#999999] text-base leading-relaxed font-medium max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* ── Icon / Circle Side ── */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-teal flex items-center justify-center shadow-lg shadow-primary-teal/10 transition-transform duration-500 hover:scale-110">
                                        <Icon size={20} className="text-primary-teal" />
                                    </div>
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-primary-teal/40 tracking-[0.3em] uppercase">
                                        Step 0{i + 1}
                                    </span>
                                </div>

                                {/* ── Empty Side (for balance) ── */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* ── Bottom CTA Highlight ── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-slate-50/50">
                    <ShieldCheck size={18} className="text-primary-teal" />
                    <p className="text-black text-sm font-bold uppercase tracking-widest">
                        Guaranteed Quality at Every Stage
                    </p>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}