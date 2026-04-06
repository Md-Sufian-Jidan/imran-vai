"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Sparkles } from "lucide-react";
import aboutHeroImg from "@/assets/images/hero-abstract.jpg"

export default function AboutHero() {
    return (
        <SectionWrapper className="pt-24 md:pt-32 lg:pt-40 bg-[#FAFAFA]" containerClassName="px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── Left Content ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Badge - Primary Teal */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-teal/20 bg-primary-teal/5 text-primary-teal text-sm font-black uppercase tracking-[0.2em] mb-8">
                        <Sparkles size={12} />
                        Our Story
                    </span>

                    {/* Headline - Black & Primary Teal */}
                    {/* <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-black mb-8 leading-[0.95]">
                        Obsessed with <br />
                        <span className="text-primary-teal">
                            great design.
                        </span>
                    </h1> */}

                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-black mb-8 leading-[0.95]">
                        We&apos;re a team of creatives obsessed with{" "}
                        <span className="text-primary-teal">
                            great design.
                        </span>
                    </h1>

                    {/* Body - Gray #999999 */}
                    <p className="text-[#999999] text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                        Founded in 2026, ThePixelVerse has grown from a small design studio to a
                        full-service creative agency. We partner with ambitious brands to
                        create digital experiences that truly matter.
                    </p>

                    {/* Stats or Sub-feature */}
                    <div className="mt-12 flex gap-8 border-t border-border pt-8">
                        <div>
                            <p className="text-2xl font-bold text-black">2026</p>
                            <p className="text-[#999999] text-xs uppercase tracking-widest font-bold">Est. Year</p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div>
                            <p className="text-2xl font-bold text-black">120+</p>
                            <p className="text-[#999999] text-xs uppercase tracking-widest font-bold">Projects</p>
                        </div>
                    </div>
                </motion.div>

                {/* ── Right Image Column ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative group"
                >
                    {/* Decorative Background Glow - Primary Teal */}
                    <div
                        className="absolute -inset-4 bg-primary-teal/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                        aria-hidden="true"
                    />

                    {/* Image Container */}
                    <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                        <Image
                            src={aboutHeroImg}
                            alt="Professional Creative at ThePixelVerse"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Floating Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl border border-border shadow-xl hidden md:block"
                    >
                        <p className="text-primary-teal text-3xl font-black leading-none">05+</p>
                        <p className="text-black text-[10px] font-bold uppercase tracking-tighter mt-1">Years of Excellence</p>
                    </motion.div>

                    {/* Decorative Geometric Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary-teal/30 rounded-tr-3xl pointer-events-none" />
                </motion.div>

            </div>
        </SectionWrapper>
    );
}