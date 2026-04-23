"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, ArrowRight, Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getIconComponent } from "@/lib/iconMapper";
import { privacySectionInfo } from "@/lib/commonLinks";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white selection:bg-primary-teal selection:text-white">
            {/* ── Header Section ── */}
            <header className="py-20 border-b border-border/50">
                <SectionWrapper className="bg-white" containerClassName="px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-teal/5 border border-primary-teal/10 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <ShieldCheck size={12} />
                            Privacy Framework 2.0
                        </div>

                        <h1 className="font-heading text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Privacy <br />
                            <span className="text-[#999999] italic font-medium">Policy</span>
                        </h1>

                        <p className="text-[#999999] text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                            Last updated: March 2026. We believe transparency is the foundation of trust.
                            Your data belongs to you; we simply protect it.
                        </p>
                    </motion.div>
                </SectionWrapper>
            </header>

            {/* ── Content Body ── */}
            <SectionWrapper className="py-24 bg-[#FAFAFA]" containerClassName="px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-32 space-y-4">
                            <p className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-6">Sections</p>
                            <nav className="flex flex-col gap-2">
                                {privacySectionInfo.map((item) => (
                                    <a
                                        key={item.title}
                                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-[#999999] hover:text-primary-teal font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-3 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.title}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-12 p-8 rounded-[2rem] bg-black text-white relative overflow-hidden">
                                <Lock className="absolute -right-4 -bottom-4 text-white/5" size={120} />
                                <h4 className="text-primary-teal text-[10px] font-black uppercase tracking-widest mb-4">Security Status</h4>
                                <p className="text-sm font-medium leading-relaxed relative z-10">
                                    All data is encrypted using AES-256 standards.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Sections */}
                    <div className="lg:col-span-8 space-y-24">
                        {privacySectionInfo.map((item, index) => {
                            const Icon = getIconComponent(item.icon);
                            const sectionId = item.title.toLowerCase().replace(/\s+/g, '-');

                            return (
                                <motion.section
                                    id={sectionId}
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group scroll-mt-32"
                                >
                                    <div className="flex items-start gap-8">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary-teal group-hover:bg-primary-teal/5 transition-all duration-500">
                                            <Icon className="w-5 h-5 text-black group-hover:text-primary-teal transition-colors" />
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-3xl font-black text-black uppercase tracking-tight">
                                                {item.title}
                                            </h2>
                                            <p className="text-[#999999] text-lg leading-relaxed font-medium">
                                                {item.content}
                                            </p>
                                            <Separator className="bg-border/50" />
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}

                        {/* Updated Notification Card */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="p-10 rounded-[3rem] bg-slate-50 border border-border flex flex-col md:flex-row items-center gap-8 group hover:border-primary-teal/30 transition-colors duration-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-border group-hover:scale-110 transition-transform duration-500">
                                <Bell className="w-6 h-6 text-primary-teal" />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="font-black text-black uppercase tracking-tight text-xl mb-2">Policy Updates</h3>
                                <p className="text-[#999999] font-medium leading-relaxed">
                                    Digital landscapes evolve. We update this policy to reflect new security standards.
                                    Changes are effective immediately upon posting.
                                </p>
                            </div>
                            <button className="px-8 py-4 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-teal transition-colors">
                                Subscribe
                            </button>
                        </motion.div>
                    </div>

                </div>
            </SectionWrapper>
        </div>
    );
}