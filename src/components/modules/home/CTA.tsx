"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/shared/SectionWrapper";

const Orb = ({
    className,
    delay = 0,
}: {
    className?: string;
    delay?: number;
}) => (
    <motion.div
        className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        aria-hidden="true"
    />
);

const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center gap-0.5">
        <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {value}
        </span>
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
            {label}
        </span>
    </div>
);

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <SectionWrapper>
            <div ref={ref} className="relative rounded-3xl overflow-hidden border border-border/60">
                {/* ── Dark base ── */}
                <div className="absolute inset-0 bg-card" />

                {/* ── Mesh gradient ── */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.18),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_110%,hsl(var(--primary)/0.10),transparent)]" />

                {/* ── Animated orbs ── */}
                <Orb className="w-72 h-72 -top-20 -left-16 bg-primary/20" delay={0} />
                <Orb className="w-56 h-56 -bottom-16 right-8 bg-primary/15" delay={2.5} />
                <Orb className="w-40 h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10" delay={1.2} />

                {/* ── Subtle grid overlay ── */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                    aria-hidden="true"
                />

                {/* ── Parallax headline backdrop ── */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                    aria-hidden="true"
                >
                    <span className="font-heading text-[10rem] md:text-[16rem] font-black text-foreground/[0.025] leading-none whitespace-nowrap">
                        THEPIXELVERSE
                    </span>
                </motion.div>

                {/* ── Content ── */}
                <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20 md:py-28 flex flex-col items-center text-center gap-10">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest"
                    >
                        <Sparkles size={12} aria-hidden="true" />
                        Let&apos;s build together
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] max-w-3xl"
                    >
                        Ready to{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                elevate
                            </span>
                            {/* Underline squiggle */}
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    d="M2 6 C40 2, 80 7, 120 4 S170 1, 198 5"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                />
                            </svg>
                        </span>{" "}
                        your brand?
                    </motion.h2>

                    {/* Body */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.18 }}
                        className="text-muted-foreground text-lg max-w-md leading-relaxed"
                    >
                        Your next breakthrough starts with a conversation. Let&apos;s craft
                        something extraordinary together.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.26 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className="group font-heading font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
                        >
                            <Link href="/contact">
                                Start Your Project
                                <ArrowRight
                                    size={16}
                                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            size="lg"
                            asChild
                            className="font-heading font-medium text-base px-8 py-6 rounded-xl text-muted-foreground hover:text-foreground"
                        >
                            <Link href="/portfolio">View Our Work</Link>
                        </Button>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    />

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.42 }}
                        className="flex items-center gap-10 md:gap-16"
                    >
                        <Stat value="50+" label="Projects" />
                        <div className="w-px h-10 bg-border" aria-hidden="true" />
                        <Stat value="98%" label="Satisfaction" />
                        <div className="w-px h-10 bg-border" aria-hidden="true" />
                        <Stat value="4× " label="Avg. ROI" />
                    </motion.div>
                </div>

                {/* ── Bottom glow strip ── */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    aria-hidden="true"
                />
            </div>
        </SectionWrapper>
    );
};