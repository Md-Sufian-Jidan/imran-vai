"use client";

import { fadeUp } from "@/lib/animations";
import { getIconComponent } from "@/lib/iconMapper";
import { Service } from "@/types/common.types";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service, i }: { service: Service, i: number }) {
    const Icon = getIconComponent(service.icon);

    return (
        <motion.div
            key={service.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col h-full bg-white hover:shadow-2xl hover:shadow-primary-teal/5 transition-all duration-500 rounded-xl border border-border p-8 overflow-hidden cursor-pointer"
        >
            <Link href={`${service.url}`} className="h-full">
                {/* ── Background Decoration ── */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary-teal/5 rounded-full blur-3xl group-hover:bg-primary-teal/10 transition-colors duration-500" />

                <div className="relative flex flex-col h-full">

                    {/* ── Header: Icon & Arrow ── */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16 rounded-xl bg-primary-teal/5 flex items-center justify-center border border-primary-teal/10 group-hover:bg-primary-teal group-hover:border-primary-teal transition-all duration-500">
                            <Icon
                                className="text-primary-teal group-hover:text-white group-hover:scale-110 transition-all duration-500"
                                size={30}
                                strokeWidth={1.5}
                            />
                        </div>
                        <div className="p-2 rounded-full bg-slate-50 group-hover:bg-primary-teal transition-colors duration-500">
                            <ArrowRight
                                className="text-[#999999] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-500"
                                size={18}
                            />
                        </div>
                    </div>

                    {/* ── Main Content ── */}
                    <div className="flex-1">
                        <h3 className="font-heading font-black text-2xl text-black mb-3 uppercase tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-[#999999] text-base leading-relaxed mb-10 font-medium">
                            {service.desc}
                        </p>
                    </div>

                    {/* ── Deliverables Section ── */}
                    <div className="pt-8 border-t border-border/60">
                        <h4 className="text-[10px] font-black text-black uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                            Key Deliverables
                        </h4>

                        <ul className="space-y-4">
                            {service.benefits.slice(0, 4).map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-3 text-[14px] text-[#999999] group-hover:text-black transition-colors duration-300 font-medium"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-teal/10 flex items-center justify-center border border-primary-teal/5">
                                        <CheckCircle2 size={12} className="text-primary-teal" />
                                    </div>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Bottom Accent Line ── */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-teal group-hover:w-full transition-all duration-700 ease-in-out" />
            </Link>
        </motion.div>
    );
}