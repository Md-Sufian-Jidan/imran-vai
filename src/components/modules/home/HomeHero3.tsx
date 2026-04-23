"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Shield, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import BeforeImage from "../../../assets/images/about-team.jpg";
import AfterImage from "../../../assets/images/project-arc.jpg";

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
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeHero3() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

            {/* ── Subtle Teal dot-grid background ── */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05]"
                style={{
                    backgroundImage: "radial-gradient(circle, #187c8b 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-teal/20 to-transparent z-10" />

            <div className="container mx-auto px-6 relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Eyebrow badge */}
                        <motion.div variants={fadeUp} className="mb-7">
                            <Badge
                                variant="secondary"
                                className="inline-flex items-center gap-2 md:px-4 px-2 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase border border-primary-teal/20 bg-primary-teal/5 backdrop-blur-sm text-primary-teal"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-primary-teal opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-xl bg-primary-teal" />
                                </span>
                                Professional Photo Editing Services
                            </Badge>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading font-black tracking-tight leading-[1.02] mb-6 text-[clamp(2.4rem,5vw,4.5rem)] text-black"
                        >
                            Pixel-Perfect{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                <span className="relative z-10 bg-gradient-to-br from-primary-teal to-[#0d4d57] bg-clip-text text-transparent italic">
                                    Retouching
                                </span>
                                <motion.svg
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
                                    className="absolute -bottom-1.5 left-0 w-full overflow-visible pointer-events-none"
                                    height="10"
                                    viewBox="0 0 300 10"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M 0 7 Q 75 2 150 7 Q 225 12 300 7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="text-primary-teal/30"
                                        strokeLinecap="round"
                                    />
                                </motion.svg>
                            </span>
                            <br />
                            that Sells.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[#999999] text-lg md:text-xl max-w-md leading-relaxed mb-9"
                        >
                            From background removal to high-end retouching — studio-quality
                            edits trusted by e-commerce brands, photographers, and agencies
                            worldwide.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-9">
                            {trust.map(({ icon: Icon, text }) => (
                                <span
                                    key={text}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-[#999999] border border-border bg-muted backdrop-blur-sm"
                                >
                                    <Icon size={12} className="text-primary-teal" />
                                    {text}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
                            <Button
                                size="lg"
                                asChild
                                className="group h-12 px-8 rounded-xl font-bold text-base bg-black text-white shadow-lg shadow-black/10 hover:bg-primary-teal hover:shadow-xl hover:shadow-primary-teal/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                            >
                                <Link href="/contact">
                                    Get Free Trial
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="group h-12 px-6 rounded-xl font-bold border border-primary-teal bg-primary-foreground text-black hover:bg-primary-teal hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                            >
                                <Link href="/portfolio">
                                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary-teal/10 text-primary-teal group-hover:bg-white transition-colors">
                                        <Play size={14} className="translate-x-0.5" />
                                    </span>
                                    View Portfolio
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-6 border-t border-border">
                            {stats.map(({ value, label }, i) => (
                                <div key={label} className="flex items-start gap-3">
                                    {i !== 0 && (
                                        <div className="w-px self-stretch bg-border mr-1 hidden sm:block" />
                                    )}
                                    <div>
                                        <p className="font-black text-3xl tracking-tight text-black leading-none mb-1">
                                            {value}
                                        </p>
                                        <p className="text-xs text-[#999999] font-medium uppercase tracking-widest">
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 48, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:flex flex-col items-center gap-4"
                    >
                        {/* Teal glow halo behind slider */}
                        <div className="absolute inset-0 -z-10 blur-3xl opacity-[0.07] bg-gradient-to-br from-primary-teal via-primary-teal/20 to-transparent rounded-xl scale-110" />

                        <div className="w-full aspect-[4/5] max-h-[600px]">
                            <BeforeAfterSlider
                                beforeSrc={BeforeImage}
                                afterSrc={AfterImage}
                                initialPosition={45}
                                className="shadow-2xl shadow-black/10 ring-1 ring-border"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#999999] font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-primary-teal opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-xl bg-primary-teal" />
                            </span>
                            Drag the handle to reveal the difference
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Decorative right-edge rule */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden 2xl:block" />
        </section>
    );
}