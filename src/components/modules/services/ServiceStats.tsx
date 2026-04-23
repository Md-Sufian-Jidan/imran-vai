"use client";

import { stats } from "@/lib/commonLinks";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function ServiceStats() {
    return (
        <SectionWrapper className="py-12 md:py-24 border-y border-border/40 bg-[#FAFAFA]" containerClassName="px-0 md:px-6" >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="group relative p-10 rounded-xl border border-border bg-white transition-all duration-500 hover:border-primary-teal/30 hover:shadow-2xl hover:shadow-primary-teal/5"
                    >
                        {/* Top Decorative Dot - Primary Teal */}
                        <div
                            className="absolute top-8 right-10 w-2 h-2 rounded-full bg-primary-teal/20 group-hover:bg-primary-teal transition-colors duration-500"
                            aria-hidden="true"
                        />

                        <div className="flex flex-col items-center lg:items-start">
                            {/* Number - Large Black font-black */}
                            <span className="font-heading text-5xl md:text-6xl font-black text-black tracking-tighter block mb-3 transition-transform duration-500 group-hover:-translate-y-1">
                                {stat.number}
                            </span>

                            {/* Main Label - Bold Black uppercase */}
                            <span className="text-black text-[10px] font-black uppercase tracking-[0.25em] mb-2">
                                {stat.label}
                            </span>

                            {/* Subtitle - Your Gray #999999 */}
                            <span className="text-[#999999] text-xs font-medium tracking-wide">
                                {stat.sub}
                            </span>
                        </div>

                        {/* Hover Bottom Bar - Primary Teal */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary-teal rounded-full transition-all duration-700 group-hover:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}