"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import before from "../../../assests/images/about-team.jpg"
import after from "../../../assests/images/hero-abstract.jpg"


// --- Services Data (Updated structure for Before/After) ---
const services = [
    { title: "Clipping Path", desc: "Precise hand-drawn clipping paths for clean product cutouts.", before, after },
    { title: "Photo Retouching", desc: "Professional retouching for portraits and commercial photography.", before, after },
    { title: "Background Removal", desc: "Clean background removal for high-end e-commerce products.", before, after },
    { title: "Color Correction", desc: "Perfect color balance and tone adjustments for any photo.", before, after },
    { title: "Real Estate Editing", desc: "HDR blending and sky replacement for property listings.", before, after },
    { title: "Image Masking", desc: "Advanced masking for complex edges like hair and fur.", before, after },
];

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-[#021a14]">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeading
                    label="Our Expertise"
                    title="Professional Image Editing"
                    description="Experience the difference with our precision-driven post-production workflow."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group space-y-5"
                        >
                            {/* Slider Container */}
                            <BeforeAfterSlider beforeSrc={service.before} afterSrc={service.after} afterAlt={service.title} beforeAlt={service.title} />

                            <div className="space-y-2">
                                <h3 className="font-heading text-xl font-bold text-[#ecfdf5] group-hover:text-[#10b981] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#ecfdf5]/60 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#10b981] pt-2 group/link"
                                >
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        asChild
                        className="h-14 px-10 bg-[#10b981] text-[#021a14] hover:bg-[#10b981]/90 rounded-full font-bold shadow-lg shadow-[#10b981]/10"
                    >
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
};