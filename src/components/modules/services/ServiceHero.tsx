"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ServiceHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* ── Background Aesthetics ── */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-teal/5 blur-[140px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 blur-[100px] -z-10 rounded-full" />

            <SectionWrapper className="pt-32 pb-16 container mx-auto" containerClassName="px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* ── Left Column: Content (7 Cols) ── */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-teal/20 bg-primary-teal/5 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                <Sparkles size={12} fill="currentColor" />
                                Premium Solutions 2026
                            </div>

                            {/* Main Headline - Massive & Bold */}
                            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.85] tracking-tighter mb-8">
                                Crafting <br />
                                <span className="text-primary-teal">Digital</span> <br />
                                Impact.
                            </h1>

                            {/* Subtitle / Description - Gray #999999 */}
                            <p className="text-[#999999] text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-10">
                                We blend technical precision with creative intuition to build
                                scalable MERN stack applications and high-conversion designs.
                            </p>

                            {/* Action Row */}
                            <div className="flex flex-wrap items-center gap-6">
                                <Link
                                    href="#services"
                                    className="px-8 py-4 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-teal transition-all duration-300 flex items-center gap-3 group"
                                >
                                    Explore Services
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-primary-teal">
                                                {i}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                                        50+ Brands <br />
                                        <span className="text-[#999999]">Trusted us</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Right Column: Visual Brand Element (5 Cols) ── */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="relative aspect-square md:aspect-[4/5] lg:aspect-square"
                        >
                            {/* The "Experience" Card */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary-teal/20 to-transparent border border-primary-teal/10 p-8 flex flex-col justify-end overflow-hidden group">
                                <div className="absolute top-10 left-10 text-primary-teal/10 font-black text-[12rem] leading-none select-none">
                                    PV
                                </div>

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl"
                                >
                                    <Zap className="text-primary-teal mb-4" size={32} fill="currentColor" />
                                    <h3 className="text-black font-black text-2xl uppercase tracking-tighter mb-2">High Velocity <br />Development</h3>
                                    <p className="text-[#999999] text-xs font-bold uppercase tracking-widest">Next.js • MERN • Tailwind</p>
                                </motion.div>

                                {/* Decorative floating tag */}
                                <div className="absolute top-12 right-0 translate-x-4 bg-black text-white px-6 py-3 rounded-2xl rotate-12 shadow-xl">
                                    <ShieldCheck size={20} className="text-primary-teal" />
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary-teal/20 rounded-full animate-pulse" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-primary-teal/10 rounded-full" />
                        </motion.div>
                    </div>

                </div>
            </SectionWrapper>
        </section>
    );
}