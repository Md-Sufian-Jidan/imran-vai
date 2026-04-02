"use client";

import { ArrowLeft, CheckCircle2, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/commonLinks";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";

export default async function PortfolioDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    console.log(id);
    const study = projects.find((p) => p.id === id);

    return (
        <main>
            <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
                <div className="container-narrow">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">{study?.category}</span>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">{study?.title}</h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{study?.overview}</p>
                    </motion.div>
                </div>
            </section>

            {/* Hero visual */}
            <SectionWrapper className="pt-0">
                <div className={`rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border aspect-[16/7] flex items-center justify-center`}>
                    {study?.image ? (
                        <Image
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <span className="font-heading text-4xl md:text-6xl font-bold text-foreground/20">{study?.title}</span>
                    )}
                </div>
            </SectionWrapper>

            {/* Problem & Solution */}
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">{study?.problem}</p>
                    </div>
                    <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                        <p className="text-muted-foreground leading-relaxed">{study?.solution}</p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Process */}
            <SectionWrapper className="bg-card/50">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study?.process.map((step, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{step}</span>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Results */}
            <SectionWrapper>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {study?.results.map((r, i) => (
                        <motion.div
                            key={r.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-card rounded-xl border border-border p-6 text-center"
                        >
                            <span className="font-heading text-3xl font-bold text-gradient block">{r.value}</span>
                            <span className="text-muted-foreground text-sm mt-2 block">{r.label}</span>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}