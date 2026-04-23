"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { services } from "@/lib/commonLinks";

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-[#FAFAFA] overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                {/* Updated Heading to match new brand style */}
                <div className="relative mb-16">
                    <SectionHeading
                        label="Our Expertise"
                        title="Professional Image Editing"
                        description="Experience the difference with our precision-driven post-production workflow."
                    />
                    {/* Decorative Background Accent */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1fb1c1]/5 rounded-full blur-[100px] pointer-events-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
                    {services.slice(0, 6).map((service, i) => (
                        <motion.div
                            key={service.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="group flex flex-col relative"
                        >
                            {/* Fixed Aspect Ratio Container for Slider */}
                            <div className="relative aspect-[4/3] w-full mb-8 rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-primary-teal/50 group-hover:border-[#1fb1c1]/30 transition-all duration-500">
                                <BeforeAfterSlider
                                    beforeSrc={service.before}
                                    afterSrc={service.after}
                                    afterAlt={service.title}
                                    beforeAlt={service.title}
                                />
                                {/* Modern "Before/After" Badge Overlay */}
                                <div className="absolute bottom-4 left-4 z-20 flex gap-2 pointer-events-none">
                                    <span className="px-2 py-1 bg-primary-teal/60 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white/50 border border-primary-teal/10 rounded-md">
                                        Comparison
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 flex-grow px-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-black text-black uppercase tracking-tighter group-hover:text-[#1fb1c1] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <Sparkles size={14} className="text-[#1fb1c1] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <p className="text-[#999999] text-sm font-medium leading-relaxed line-clamp-2">
                                    {service.desc}
                                </p>

                                <Link
                                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-sm font-black uppercase tracking-[0.3em] text-[#1fb1c1] pt-2 group/link"
                                >
                                    Explore Service
                                    <div className="ml-3 w-8 h-[1px] bg-[#1fb1c1]/30 group-hover/link:w-12 transition-all duration-500" />
                                    <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <Button
                        asChild
                        className="group h-12 px-6 rounded-xl font-bold border border-primary-teal bg-primary-foreground text-black hover:bg-primary-teal hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Subtle Dot Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #1fb1c1 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
        </section>
    );
}