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
            whileHover={{ y: -5 }}
            className="group relative flex flex-col h-full bg-card hover:bg-accent/5 transition-colors rounded-3xl border border-border p-8 overflow-hidden hover:cursor-pointer"
        >
            <Link href={`${service.url}`}>
                {/* Decorative Background Blur */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
                            <Icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
                        </div>
                        <ArrowRight className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-sans font-bold text-xl text-foreground mb-3 tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                            {service.desc}
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="pt-6 border-t border-border/50">
                        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
                            Key Deliverables
                        </h4>
                        <ul className="space-y-3">
                            {service.benefits.slice(0, 4).map((b) => (
                                <li key={b} className="flex items-center gap-3 text-[13px] text-muted-foreground/80 group-hover:text-foreground transition-colors">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 size={12} className="text-primary" />
                                    </div>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}