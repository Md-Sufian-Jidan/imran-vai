"use client";

import SectionHeading from "@/components/shared/SectionHeading"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/animations";
import { projects } from "@/lib/commonLinks"
import { motion } from "framer-motion"
import { ArrowRight, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
    return (
        <section className="bg-white relative overflow-hidden font-jakarta">
            {/* Background Glows - Subtle Teal */}
            <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-primary-teal/[0.03] blur-[120px] -z-10 rounded-full" />

            <SectionWrapper containerClassName="px-0 md:px-6">
                <SectionHeading
                    label="Our Work"
                    title="Selected projects"
                    description="A showcase of our recent work across branding, design, and digital experiences."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            <Link
                                href="/portfolio"
                                className="group relative block rounded-3xl overflow-hidden border border-border bg-white transition-all duration-500 hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/[0.05]"
                            >
                                {/* Image Container with Overlay */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                                    />
                                    {/* Hover Overlay - Teal Tint */}
                                    <div className="absolute inset-0 bg-primary-teal/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="h-14 w-14 rounded-full bg-primary-teal flex items-center justify-center text-white shadow-xl shadow-primary-teal/20">
                                                <Plus size={28} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="px-8 py-7 bg-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {/* Category - Teal Accent */}
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-teal mb-2 block">
                                                {project.category}
                                            </span>
                                            {/* Title - Black to Teal on hover */}
                                            <h3 className="font-playfair text-2xl font-bold text-black group-hover:text-primary-teal transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                        {/* Arrow Button */}
                                        <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-black group-hover:bg-primary-teal group-hover:text-white group-hover:border-primary-teal transition-all duration-500">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Action - Themed Outline Button */}
                <div className="text-center mt-20">
                    <Button
                        asChild
                        variant="outline"
                        className="group h-12 px-6 rounded-xl font-bold border border-primary-teal bg-primary-foreground text-black hover:bg-primary-teal hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                        <Link href="/portfolio">
                            View All Projects
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </SectionWrapper>
        </section>
    )
}