"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import aboutTeam from "../../../assets/images/about-team.jpg";
import Image from "next/image";

export default function TeamPhoto() {
    return (
        <section>
            <SectionWrapper className="pt-0" containerClassName="px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group rounded-[2.5rem] overflow-hidden border border-border bg-white p-2 md:p-4 shadow-sm transition-all duration-500 hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/5"
                >
                    {/* Inner Image Container */}
                    <div className="relative overflow-hidden rounded-[1.8rem] h-[400px] md:h-[600px]">
                        <Image
                            src={aboutTeam}
                            alt="ThePixelVerse team collaborating in the office"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />

                        {/* Subtle Overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Studio Indicator Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-teal opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-teal"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-black">
                                Studio Session
                            </span>
                        </div>
                    </div>

                    {/* Background Decorative Glow (Primary Teal) */}
                    <div
                        className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-teal/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        aria-hidden="true"
                    />
                </motion.div>

                {/* Sub-caption in Gray #999999 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8 text-[#999999] text-sm font-medium tracking-wide"
                >
                    A peek inside our collaborative process at the heart of <span className="text-black font-bold">ThePixelVerse</span>.
                </motion.p>
            </SectionWrapper>
        </section>
    );
}