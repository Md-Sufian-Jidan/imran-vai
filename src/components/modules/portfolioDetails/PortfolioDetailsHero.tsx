"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types/common.types";

export default function PortfolioDetailsHero({ study }: { study: Project }) {
    return (
        <header className="pt-32 pb-20 overflow-hidden bg-white">
            <SectionWrapper containerClassName="px-6">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-[#999999] hover:text-primary-teal text-xs font-black uppercase tracking-[0.2em] mb-12 transition-colors group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">

                    {/* ── Left Column: Main Content ── */}
                    <div className="lg:col-span-8">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary-teal text-[10px] font-black uppercase tracking-[0.4em] mb-6 block"
                        >
                            {study.category} Case Study
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-10"
                        >
                            {study.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#999999] text-xl md:text-2xl font-medium leading-relaxed max-w-3xl"
                        >
                            {study.overview}
                        </motion.p>
                    </div>

                    {/* ── Right Column: Project Metadata ── */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="border-l border-border pl-8 py-2 space-y-8"
                        >
                            {/* Role / Tech */}
                            <div>
                                <p className="text-[10px] font-black text-black uppercase tracking-widest mb-2">Role & Stack</p>
                                <p className="text-[#999999] text-sm font-bold uppercase tracking-tight">
                                    Lead Developer <br />
                                    <span className="text-primary-teal">MERN Stack / Next.js</span>
                                </p>
                            </div>

                            {/* Timeline */}
                            <div>
                                <p className="text-[10px] font-black text-black uppercase tracking-widest mb-2">Timeline</p>
                                <p className="text-[#999999] text-sm font-bold uppercase tracking-tight">
                                    8 Weeks (2026)
                                </p>
                            </div>

                            {/* Live Link */}
                            <div className="pt-4">
                                <Link
                                    href={study.liveLink || "#"}
                                    target="_blank"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary-teal transition-all group"
                                >
                                    Live Preview
                                    <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
        </header>
    );
}