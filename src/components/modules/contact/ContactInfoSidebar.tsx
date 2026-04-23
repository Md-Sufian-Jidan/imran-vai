"use client";

import { motion } from "framer-motion";
import { getIconComponent } from "@/lib/iconMapper";
import { contactPageSteps, socialLinks } from "@/lib/commonLinks";
import { ArrowUpRight, Globe2 } from "lucide-react";
import Link from "next/link";

export default function ContactInfoSidebar() {
    return (
        <div className="lg:col-span-5 space-y-16">
            {/* ── Process Steps with Vertical Line ── */}
            <div className="relative space-y-12 pl-4">
                {/* Animated Connector Line */}
                <div className="absolute left-10 top-2 bottom-2 w-px bg-gradient-to-b from-primary-teal/50 via-border to-transparent hidden md:block" />

                {contactPageSteps.map((step, i) => {
                    const Icon = getIconComponent(step.icon);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-8 group relative z-10"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center group-hover:border-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary-teal/20">
                                <Icon size={20} className="transition-transform group-hover:scale-110" />
                            </div>
                            <div className="space-y-1 pt-1">
                                <h4 className="font-black text-black uppercase tracking-tight text-sm">
                                    {step.title}
                                </h4>
                                <p className="text-[#999999] text-sm font-medium leading-relaxed max-w-[280px]">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* ── Timezone & Social Card ── */}
            <div className="space-y-6">
                <div className="p-10 rounded-[3rem] bg-black text-white relative overflow-hidden group">
                    {/* Decorative Mesh Gradient */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-teal/10 rounded-full blur-[80px] group-hover:bg-primary-teal/20 transition-colors duration-700" />

                    <div className="relative z-10 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
                                <h4 className="text-primary-teal text-[10px] font-black uppercase tracking-[0.3em]">
                                    Global Availability
                                </h4>
                            </div>
                            <div>
                                <p className="text-3xl font-black uppercase tracking-tighter mb-1">
                                    Narayanganj, BD
                                </p>
                                <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                    <Globe2 size={12} />
                                    GMT +6 — 2:00 PM to 10:00 PM
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-white/10 w-full" />

                        {/* Social Links as "Action Chips" */}
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                                Digital Presence
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group/link"
                                    >
                                        {social.label}
                                        <ArrowUpRight size={14} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}