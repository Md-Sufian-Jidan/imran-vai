"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Shield, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";
import heroAbstract from "../../../assests/images/hero-abstract.jpg";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "50K+", label: "Images Edited" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24h", label: "Turnaround" },
];

const trust = [
    { icon: Star, text: "5-Star Rated" },
    { icon: Shield, text: "100% Satisfaction" },
    { icon: Clock, text: "Fast Delivery" },
];

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const Hero2 = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

            {/* ── Background layer ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroAbstract}
                    alt="Professional photo editing"
                    fill
                    className="object-cover opacity-50 dark:opacity-30 scale-105"
                    priority
                />
                {/* Deep left gradient so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Subtle dot-grid texture overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
                    style={{
                        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
            </div>

            {/* ── Decorative vertical rule (right edge) ── */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-px h-72 bg-gradient-to-b from-transparent via-primary/25 to-transparent hidden xl:block" />
            {/* Top edge accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* ── Main content ── */}
            <div className="container max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl"
                >

                    {/* ── Eyebrow badge ── */}
                    <motion.div variants={fadeUp} className="mb-7">
                        <Badge
                            variant="secondary"
                            className="
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold
                border border-primary/15 bg-primary/5 backdrop-blur-sm
                text-primary tracking-wide uppercase
              "
                        >
                            {/* Pulse dot */}
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            Professional Photo Editing Services
                        </Badge>
                    </motion.div>

                    {/* ── Headline ── */}
                    <motion.h1
                        variants={fadeUp}
                        className="font-heading font-black tracking-tight leading-[1] mb-6 text-[clamp(2.6rem,6vw,5.5rem)]"
                    >
                        Pixel-Perfect{" "}
                        <span className="relative whitespace-nowrap">
                            <span className="relative z-10 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent italic">
                                Retouching
                            </span>
                            {/* Hand-drawn underline */}
                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
                                className="absolute -bottom-2 left-0 w-full overflow-visible"
                                height="10"
                                viewBox="0 0 300 10"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    d="M 0 7 Q 75 2 150 7 Q 225 12 300 7"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="text-primary/30"
                                    strokeLinecap="round"
                                />
                            </motion.svg>
                        </span>
                        <br />
                        that Sells.
                    </motion.h1>

                    {/* ── Sub-headline ── */}
                    <motion.p
                        variants={fadeUp}
                        className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10"
                    >
                        From background removal to high-end retouching — we deliver
                        studio-quality edits trusted by e-commerce brands, photographers,
                        and agencies worldwide.
                    </motion.p>

                    {/* ── Trust pills ── */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                        {trust.map(({ icon: Icon, text }) => (
                            <span
                                key={text}
                                className="
                  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                  text-xs font-medium text-muted-foreground
                  border border-border/60 bg-background/40 backdrop-blur-sm
                "
                            >
                                <Icon size={12} className="text-primary" />
                                {text}
                            </span>
                        ))}
                    </motion.div>

                    {/* ── CTA row ── */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                        {/* Primary CTA */}
                        <Button
                            size="lg"
                            asChild
                            className="
                group h-14 px-8 rounded-2xl font-bold text-base
                shadow-lg shadow-primary/20
                hover:shadow-xl hover:shadow-primary/30
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-200
              "
                        >
                            <Link href="/contact">
                                Get Free Trial
                                <ArrowRight
                                    size={18}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                        </Button>

                        {/* Secondary CTA — watch portfolio */}
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="
                group h-14 px-8 rounded-2xl font-bold text-base
                border-border/60 bg-background/30 backdrop-blur-sm
                hover:bg-secondary/50 hover:-translate-y-0.5
                active:scale-95 transition-all duration-200
              "
                        >
                            <Link href="/portfolio">
                                <span
                                    className="
                    mr-3 inline-flex h-8 w-8 items-center justify-center
                    rounded-full bg-primary/10 text-primary
                    group-hover:bg-primary/20 transition-colors
                  "
                                >
                                    <Play size={14} className="translate-x-0.5" />
                                </span>
                                View Portfolio
                            </Link>
                        </Button>
                    </motion.div>

                    {/* ── Stat strip ── */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
                        {stats.map(({ value, label }, i) => (
                            <div key={label} className="flex items-start gap-3">
                                {/* Separator except first */}
                                {i !== 0 && (
                                    <div className="w-px self-stretch bg-border/50 mr-1 hidden sm:block" />
                                )}
                                <div>
                                    <p className="font-black text-3xl tracking-tight text-foreground leading-none mb-1">
                                        {value}
                                    </p>
                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                                        {label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Floating "before / after" label card — decorative ── */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="
          absolute bottom-12 right-8 hidden lg:flex
          items-center gap-3 px-5 py-3.5 rounded-2xl
          bg-background/80 backdrop-blur-md
          border border-border/50
          shadow-xl shadow-black/10
        "
            >
                {/* Mini before/after swatch */}
                <div className="flex rounded-lg overflow-hidden w-14 h-10 border border-border/40">
                    <div className="w-1/2 bg-muted/80" />
                    <div className="w-1/2 bg-primary/20" />
                </div>
                <div>
                    <p className="text-xs font-bold text-foreground leading-tight">Before &amp; After</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">Instant transformation</p>
                </div>
                {/* Green live dot */}
                <span className="relative flex h-2.5 w-2.5 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
            </motion.div>

        </section>
    );
};

export default Hero2;