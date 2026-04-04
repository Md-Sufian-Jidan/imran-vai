"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Images (Replace with your emerald-themed retouching samples)
import beforeImg from "../../../assests/images/about-team.jpg";
import afterImg from "../../../assests/images/hero-abstract.jpg";

export default function HomeHero1() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in e ? e.touches[0].clientX : e.clientX;
        const relativeX = x - rect.left;
        const position = (relativeX / rect.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, position)));
    };

    return (
        <section className="relative min-h-screen flex items-center bg-[#022c22] py-20 lg:py-0 overflow-hidden text-emerald-50">
            {/* Soft Emerald Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

            <div className="container-narrow px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge
                            className="mb-8 px-4 py-1.5 rounded-full border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase gap-2"
                        >
                            <Sparkles size={14} className="animate-pulse fill-emerald-400" />
                            Elite Retouching Studio
                        </Badge>

                        <h1 className="font-heading text-7xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-8 text-white">
                            Defined by <br />
                            <span className="italic text-emerald-400">Precision.</span>
                        </h1>

                        <p className="text-emerald-100/60 text-lg md:text-xl max-w-sm mb-12 leading-relaxed">
                            Premium clipping path and image masking services tailored for high-fashion and e-commerce.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Button
                                size="lg"
                                asChild
                                className="h-14 px-10 rounded-full font-bold text-base bg-emerald-500 hover:bg-emerald-400 text-[#022c22] shadow-2xl shadow-emerald-500/20 transition-all active:scale-95"
                            >
                                <Link href="/contact">
                                    Free Trial <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-10 rounded-full font-bold text-base border-emerald-500/20 hover:bg-emerald-500/5 text-emerald-100"
                            >
                                Our Portfolio
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side: Shadcn-Styled Slider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <Card className="relative aspect-[4/5] md:aspect-square w-full max-w-[500px] mx-auto rounded-[2.5rem] overflow-hidden border-none shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] bg-emerald-950">
                            <div
                                ref={containerRef}
                                onClick={handleInteraction}
                                onMouseMove={(e) => e.buttons === 1 && handleInteraction(e)}
                                onTouchMove={handleInteraction}
                                className="relative w-full h-full cursor-crosshair select-none"
                            >
                                {/* After Image */}
                                <Image
                                    src={afterImg}
                                    alt="After Editing"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Before Image (Clipped) */}
                                <div
                                    className="absolute inset-0 z-10 transition-all duration-75 ease-out"
                                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                                >
                                    <Image
                                        src={beforeImg}
                                        alt="Before Editing"
                                        fill
                                        className="object-cover brightness-75 grayscale-[0.2]"
                                    />
                                </div>

                                {/* Slider UI Line & Handle */}
                                <div
                                    className="absolute top-0 bottom-0 z-20 w-[2px] bg-emerald-400 pointer-events-none"
                                    style={{ left: `${sliderPos}%` }}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#022c22] rounded-full flex items-center justify-center border-2 border-emerald-400 shadow-2xl shadow-emerald-500/50">
                                        <MousePointer2 className="text-emerald-400 w-5 h-5 animate-pulse" />
                                    </div>
                                </div>

                                {/* Dynamic Labels */}
                                <div className="absolute top-6 left-6 z-30 px-3 py-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded text-[10px] font-black uppercase tracking-widest text-white">
                                    Original
                                </div>
                                <div className="absolute top-6 right-6 z-30 px-3 py-1 bg-emerald-500/80 backdrop-blur-xl rounded text-[10px] font-black uppercase tracking-widest text-white">
                                    Retouched
                                </div>
                            </div>
                        </Card>

                        {/* Floating Interaction Hint */}
                        <motion.p
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-emerald-500/60 text-[10px] font-bold uppercase tracking-widest"
                        >
                            Click or Drag to Compare
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};