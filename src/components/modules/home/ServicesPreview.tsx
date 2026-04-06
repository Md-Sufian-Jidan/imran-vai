"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { services } from "@/lib/commonLinks";


export default function ServicesPreview() {
    return (
        <section className="py-24 bg-[#021a14] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeading
                    label="Our Expertise"
                    title="Professional Image Editing"
                    description="Experience the difference with our precision-driven post-production workflow."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                    {services.slice(0, 7).map((service, i) => (
                        <motion.div
                            key={service.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="group flex flex-col"
                        >
                            {/* Fixed Aspect Ratio Container for Slider */}
                            <div className="relative aspect-[4/3] w-full mb-6 shadow-2xl shadow-black/20">
                                <BeforeAfterSlider
                                    beforeSrc={service.before}
                                    afterSrc={service.after}
                                    afterAlt={service.title}
                                    beforeAlt={service.title}
                                />
                            </div>

                            <div className="space-y-3 flex-grow">
                                <h3 className="font-jakarta text-xl font-bold text-[#ecfdf5] group-hover:text-[#10b981] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-[#ecfdf5]/60 text-sm leading-relaxed line-clamp-2">
                                    {service.desc}
                                </p>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[#10b981] pt-2 group/link"
                                >
                                    Learn More
                                    <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button
                        asChild
                        className="h-14 px-10 bg-[#10b981] text-[#021a14] hover:bg-white hover:text-[#021a14] rounded-full font-bold shadow-lg shadow-[#10b981]/10 transition-all duration-300"
                    >
                        <Link href="/services">
                            Explore All Services
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}