"use client";

import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/types/common.types";
import { getIconComponent } from "@/lib/iconMapper";

export default function ServiceDetailsPage({ service }: { service: Service }) {
    const Icon = getIconComponent(service.icon);

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Thematic Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

                <div className="container-narrow px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group mr-5"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>

                        <Badge variant="outline" className="mb-8 px-3 py-1 border-primary/20 bg-primary/5 text-primary rounded-full">
                            Expert Solutions
                        </Badge>

                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                                <Icon className="text-primary-foreground" size={32} />
                            </div>

                            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                                {service.title}
                            </h1>
                        </div>

                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10 antialiased">
                            {service.desc}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/10 group" asChild>
                                <Link href="/contact">
                                    Start Your Project
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full bg-background/50 backdrop-blur-sm" asChild>
                                <Link href="/portfolio">See Case Studies</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="py-24 bg-secondary/30">
                <div className="container-narrow px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
                                What you&apos;ll get
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                High-impact deliverables designed to scale your brand.
                            </p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-border mx-12 mb-5" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                    <CardContent className="p-8">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <Check size={20} className="text-primary" strokeWidth={3} />
                                        </div>
                                        <p className="font-sans font-semibold text-foreground leading-snug">
                                            {benefit}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-24">
                <div className="container-narrow px-6">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Workflow</Badge>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Our Proven Process</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -z-10" />

                        {[
                            { title: "Requirement Analysis", desc: "Understanding your goals" },
                            { title: "Planning & Strategy", desc: "Mapping the blueprint" },
                            { title: "Execution", desc: "Bringing it to life" },
                            { title: "Delivery & Support", desc: "Launching for success" },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm relative z-10">
                                    <span className="text-xl font-heading font-bold text-primary">0{i + 1}</span>
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24">
                <div className="container-narrow px-6">
                    <Card className="relative overflow-hidden border-none bg-primary text-primary-foreground p-12 md:p-20 text-center">
                        {/* Abstract Background for CTA */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--background)_0%,transparent_50%)] opacity-10" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <Sparkles className="mx-auto mb-6 opacity-80" size={32} />
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Ready to accelerate your brand?
                            </h2>
                            <p className="text-primary-foreground/80 mb-10 text-lg md:text-xl font-sans">
                                Let&apos;s work together and bring your vision to life with our {service.title} expertise.
                            </p>
                            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full font-bold text-lg hover:scale-105 transition-transform" asChild>
                                <Link href="/contact">Start Your Project</Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}