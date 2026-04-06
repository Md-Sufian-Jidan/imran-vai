"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import { Code2, Play, Sparkles } from "lucide-react";

export default function PortfolioHero() {
    return (
        <section className="bg-white overflow-hidden">
            <SectionWrapper className="pt-32 md:pt-48 pb-20" containerClassName="px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* ── Left Column: Content (7 Cols) ── */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-teal/5 border border-primary-teal/10 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                <Code2 size={12} />
                                Selected Works
                            </div>

                            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.85] tracking-tighter mb-8">
                                Work that <br />
                                <span className="text-primary-teal underline decoration-primary-teal/20 underline-offset-[12px]">speaks</span> <br />
                                for itself.
                            </h1>

                            <p className="text-[#999999] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                A curated gallery of digital experiences — where high-performance
                                engineering meets intuitive, human-centered design.
                            </p>

                            {/* Experience Stats (Subtle) */}
                            <div className="mt-10 flex gap-10 border-t border-border/50 pt-10">
                                <div>
                                    <p className="text-black font-black text-2xl uppercase tracking-tighter">50+</p>
                                    <p className="text-[#999999] text-[10px] font-bold uppercase tracking-widest">Global Clients</p>
                                </div>
                                <div>
                                    <p className="text-black font-black text-2xl uppercase tracking-tighter">150+</p>
                                    <p className="text-[#999999] text-[10px] font-bold uppercase tracking-widest">Projects Done</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Right Column: Visual Element (5 Cols) ── */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Decorative Background Glow */}
                            <div className="absolute -inset-4 bg-primary-teal/10 blur-3xl rounded-[3rem] -z-10" />

                            {/* Main Visual Container */}
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] bg-slate-100 border border-border overflow-hidden group shadow-2xl">

                                {/* Placeholder for your Before/After Slider or Video */}
                                <div className="absolute inset-0 bg-black flex items-center justify-center">
                                    {/* If Video, use <video> tag here. If Slider, insert your component */}
                                    <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-20 h-20 rounded-full bg-primary-teal/20 border border-primary-teal/40 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                            <Play className="text-primary-teal ml-1" fill="currentColor" size={24} />
                                        </div>
                                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Watch Reel</span>
                                    </div>

                                    {/* Floating Design Tag */}
                                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                                        <Sparkles className="text-primary-teal" size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Status" Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 md:-left-12 p-6 rounded-3xl bg-white border border-border shadow-xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary-teal animate-pulse" />
                                    <p className="text-black font-black text-xs uppercase tracking-widest">Available for hire</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </SectionWrapper>
        </section>
    );
}