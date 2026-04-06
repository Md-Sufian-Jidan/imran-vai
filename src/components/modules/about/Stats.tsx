"use client";

import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { stats } from "@/lib/commonLinks";

export default function Stats() {
    return (
        <SectionWrapper className="py-12 md:py-20" containerClassName="px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="group relative p-8 rounded-[2rem] border border-border bg-white transition-all duration-500 hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/5"
                    >
                        {/* Decorative Teal Corner */}
                        <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-primary-teal opacity-40 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col items-center lg:items-start">
                            {/* Large Black Number */}
                            <span className="font-heading text-5xl md:text-6xl font-black text-black tracking-tighter block mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                                {stat.number}
                            </span>

                            {/* Main Label - Bold Black */}
                            <span className="text-black text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                {stat.label}
                            </span>

                            {/* Subtitle - Gray #999999 */}
                            <span className="text-[#999999] text-xs font-medium tracking-wide">
                                {stat.sub}
                            </span>
                        </div>

                        {/* Bottom Progress Accent (Primary Teal) */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-teal/10 rounded-t-full transition-all duration-500 group-hover:w-24 group-hover:bg-primary-teal" />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}