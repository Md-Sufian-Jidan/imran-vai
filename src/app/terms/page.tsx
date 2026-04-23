"use client";

import { motion } from "framer-motion";
import { Scale, MessageSquare, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { termSections } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* ── Editorial Header ── */}
            <header className="py-20 border-b border-border/50 bg-[#FAFAFA]">
                <SectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end px-6"
                    >
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-teal/10 border border-primary-teal/20 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                <Scale size={12} />
                                Legal Framework
                            </div>
                            <h1 className="font-heading text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-8">
                                Terms & <br />
                                <span className="text-[#999999] italic font-medium">Conditions</span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10 pb-2">
                            <p className="text-[#999999] text-lg font-medium leading-relaxed">
                                Standard operating procedures designed to ensure a seamless professional
                                partnership and clear project boundaries.
                            </p>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </header>

            {/* ── Content Grid ── */}
            <SectionWrapper className="py-24" containerClassName="px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                        {termSections.map((section, index) => {
                            const Icon = getIconComponent(section.icon);
                            return (
                                <motion.section
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group"
                                >
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center group-hover:border-primary-teal group-hover:shadow-lg group-hover:shadow-primary-teal/10 transition-all duration-500">
                                                <Icon className="w-5 h-5 text-black group-hover:text-primary-teal transition-colors" />
                                            </div>
                                            <span className="text-[10px] font-black text-border group-hover:text-primary-teal/40 transition-colors">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-black text-black uppercase tracking-tight">
                                            {section.title}
                                        </h2>

                                        <p className="text-[#999999] text-base leading-relaxed font-medium">
                                            {section.content}
                                        </p>

                                        <div className="pt-4 overflow-hidden">
                                            <div className="h-px bg-border group-hover:bg-primary-teal transition-colors duration-500 origin-left" />
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}
                    </div>

                    {/* ── Contact Call-to-Action ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-32 p-12 rounded-[3rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-teal/10 blur-[80px] rounded-full" />

                        <div className="flex items-start gap-6 relative z-10">
                            <div className="w-14 h-14 rounded-full bg-primary-teal flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-6 h-6 text-black" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-black text-2xl uppercase tracking-tighter">Need Clarification?</h3>
                                <p className="text-white/50 font-medium max-w-sm">
                                    Legal jargon can be complex. If any part of these terms is unclear,
                                    I am happy to discuss them before we begin.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="relative z-10 px-10 py-5 bg-white text-black rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-primary-teal transition-colors group/btn flex items-center gap-3"
                        >
                            Contact Me
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
}