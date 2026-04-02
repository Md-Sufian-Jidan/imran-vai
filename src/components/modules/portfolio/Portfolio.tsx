"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { projects } from "@/lib/commonLinks";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <section>
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Portfolio</span>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Work that <span className="text-gradient">speaks</span> for itself.
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                            A collection of our finest projects — each one a testament to strategic thinking and creative excellence.
                        </p>
                    </motion.div>
                </div>
            </section>
            <SectionWrapper className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <Link
                                href={`/portfolio/${project.id}`}
                                className="group block rounded-xl overflow-hidden border border-border card-hover"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="px-8 py-6 bg-card">
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">{project.title}</h3>
                                    <span className="text-sm text-muted-foreground block mb-1">{project.category}</span>
                                    <p className="text-sm text-muted-foreground/70">{project.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all duration-300">
                                        View Case Study <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}