"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { pricingFeatures } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import { motion } from "framer-motion";

export const PricingTrustBadges = () => {
    return (
        <SectionWrapper className="bg-[#FAFAFA]" containerClassName="px-6">
            {/* Section Header */}
            <div className="mb-20">
                <span className="text-primary-teal text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                    Our Commitment
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
                    Why industry leaders <br />
                    <span className="text-[#999999]">trust our process.</span>
                </h2>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40 rounded-[3rem] overflow-hidden">
                {pricingFeatures.map((item, i) => {
                    const Icon = getIconComponent(item.icon);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white p-10 hover:bg-slate-50 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Hover Gradient Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center mb-8 shadow-sm group-hover:border-primary-teal/30 group-hover:shadow-lg group-hover:shadow-primary-teal/5 transition-all duration-500">
                                    <Icon className="text-black group-hover:text-primary-teal transition-colors duration-500" size={24} />
                                </div>

                                {/* Text Content */}
                                <h4 className="font-black text-black text-[11px] uppercase tracking-[0.25em] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                                    {item.title}
                                </h4>

                                <p className="text-[#999999] text-sm font-medium leading-relaxed max-w-[200px]">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-teal group-hover:w-full transition-all duration-700 ease-in-out" />
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};