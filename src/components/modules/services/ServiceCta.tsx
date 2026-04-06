"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function ServiceCta() {
    return (
        <section className="bg-white pb-20">
            <SectionWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden bg-black rounded-[3rem] p-12 md:p-20 text-center"
                >
                    {/* ── Background Decorative Elements ── */}
                    <div
                        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-teal/20 blur-[120px] rounded-full pointer-events-none"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-teal/10 blur-[100px] rounded-full pointer-events-none"
                        aria-hidden="true"
                    />

                    {/* ── Content ── */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                        >
                            <Zap size={12} fill="currentColor" />
                            Ready to Elevate?
                        </motion.div>

                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                            Let&apos;s build something <br />
                            <span className="text-primary-teal">extraordinary.</span>
                        </h2>

                        <p className="text-[#999999] text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
                            Whether you have a fully-formed idea or just a spark of inspiration,
                            we&apos;re here to turn it into a high-performance digital reality.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Primary Button */}
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-primary-teal text-white font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                            </Link>

                            {/* Secondary Link */}
                            <Link
                                href="/portfolio"
                                className="text-white/60 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* ── Subtle Bottom Text ── */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full opacity-20">
                        <p className="text-[8px] font-black text-white uppercase tracking-[1em]">
                            ThePixelVerse Agency • 2026
                        </p>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}