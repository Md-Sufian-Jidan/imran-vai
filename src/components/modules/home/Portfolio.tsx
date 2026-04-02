"use client";

import SectionHeading from "@/components/shared/SectionHeading"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/animations";
import { projects } from "@/lib/commonLinks"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
    return (
        <section>
            <SectionWrapper className="bg-card/50">
                <SectionHeading
                    label="Our Work"
                    title="Selected projects"
                    description="A showcase of our recent work across branding, design, and digital experiences."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <Link
                                href="/portfolio"
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
                                    <span className="text-sm text-muted-foreground">{project.category}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/portfolio">
                            View All Projects
                            <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </SectionWrapper>
        </section>
    )
}