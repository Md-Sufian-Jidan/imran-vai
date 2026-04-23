"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { Service } from "@/types/common.types";
import { motion } from "framer-motion";
import { getIconComponent } from "@/lib/iconMapper";
import { CheckCircle2, ArrowLeft, Zap, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServiceDetailsPage({ service }: { service: Service }) {
    const Icon = getIconComponent(service.icon);

    return (
        <main className="bg-[#FAFAFA] min-h-screen">
            {/* ── Page Header ── */}
            <header className="relative py-20 overflow-hidden border-b border-border/50">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-teal/5 blur-[120px] -z-10 rounded-full" />

                <SectionWrapper containerClassName="px-3 md:px-6">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[#999999] hover:text-primary-teal text-xs font-black uppercase tracking-widest mb-12 transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-20 h-20 rounded-xl bg-primary-teal/5 border border-primary-teal/10 flex items-center justify-center mb-8"
                        >
                            <Icon className="text-primary-teal" size={40} strokeWidth={1.5} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-8"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#999999] text-xl md:text-2xl font-medium leading-relaxed"
                        >
                            {service.desc}
                        </motion.p>
                    </div>
                </SectionWrapper>
            </header>

            {/* ── Content Section ── */}
            <SectionWrapper className="py-20" containerClassName="px-3 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Detailed Breakdown */}
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <h2 className="font-heading font-black text-2xl text-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary-teal" />
                                The Approach
                            </h2>
                            <p className="text-[#999999] text-lg leading-relaxed font-medium">
                                We utilize a specialized workflow for <span className="text-black font-bold">{service.title}</span> that prioritizes
                                efficiency without sacrificing quality. By leveraging modern frameworks like Next.js and
                                TypeScript, we ensure that every deliverable is future-proof and highly performant.
                            </p>
                        </section>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 rounded-xl border border-border bg-slate-50/50">
                                <Zap className="text-primary-teal mb-4" size={24} />
                                <h4 className="text-black font-black uppercase tracking-tight text-sm mb-2">High Performance</h4>
                                <p className="text-[#999999] text-xs font-medium leading-relaxed">Optimized code ensures lightning-fast load times and seamless interactions.</p>
                            </div>
                            <div className="p-8 rounded-xl border border-border bg-slate-50/50">
                                <ShieldCheck className="text-primary-teal mb-4" size={24} />
                                <h4 className="text-black font-black uppercase tracking-tight text-sm mb-2">Secure & Robust</h4>
                                <p className="text-[#999999] text-xs font-medium leading-relaxed">Industry-standard security practices integrated into every build.</p>
                            </div>
                        </div>

                        <section className="pt-8">
                            <h2 className="font-heading font-black text-2xl text-black uppercase tracking-tight mb-6">Our Commitment</h2>
                            <p className="text-[#999999] text-lg leading-relaxed font-medium">
                                At ThePixelVerse, we don’t just provide a service; we become a technical partner.
                                Our goal is to translate your vision into a digital asset that drives revenue
                                and enhances brand reputation.
                            </p>
                        </section>
                    </div>

                    {/* Right: Sticky Deliverables Sidebar */}
                    <aside className="lg:col-span-5">
                        <div className="sticky top-32 p-8 md:p-10 rounded-xl bg-black text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-teal/20 blur-3xl rounded-full" />

                            <h3 className="relative z-10 text-[10px] font-black text-primary-teal uppercase tracking-[0.3em] mb-8">
                                Deliverables Included
                            </h3>

                            <ul className="relative z-10 space-y-6">
                                {service.benefits.map((benefit, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={benefit}
                                        className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0"
                                    >
                                        <CheckCircle2 size={20} className="text-primary-teal flex-shrink-0 mt-0.5" />
                                        <span className="text-white font-medium text-lg tracking-tight">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                                <div className="flex items-center gap-3 text-[#999999] mb-8">
                                    <Clock size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Typical Timeline: 2-4 Weeks</span>
                                </div>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="h-12 px-6 rounded-xl font-bold border border-primary-teal bg-primary-foreground hover:bg-primary-teal hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                                >
                                    <Link href="/contact">
                                        Book This Service
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </aside>

                </div>
            </SectionWrapper>
        </main>
    );
}