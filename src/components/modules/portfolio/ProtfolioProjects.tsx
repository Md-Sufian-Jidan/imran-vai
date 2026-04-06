import SectionWrapper from "@/components/shared/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { projects } from "@/lib/commonLinks";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioProjects() {
    return (
        <section className="bg-white">
            {/* ── Projects Grid ── */}
            <SectionWrapper className="pt-0 pb-32" containerClassName="px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            <Link
                                href={`/portfolio/${project.id}`}
                                className="group block relative"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-slate-50 border border-border transition-all duration-700 group-hover:border-primary-teal/30 group-hover:shadow-2xl group-hover:shadow-primary-teal/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="w-16 h-16 rounded-full bg-primary-teal flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                                            <ArrowUpRight size={32} strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Category Floating Tag */}
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 text-black text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="mt-8 px-4">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <h3 className="font-heading text-2xl md:text-3xl font-black text-black uppercase tracking-tight group-hover:text-primary-teal transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#999999] text-base font-medium leading-relaxed max-w-md">
                                                {project.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end pt-2">
                                            <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em]">Case Study</span>
                                            <div className="w-8 h-1 bg-primary-teal/10 mt-2 group-hover:w-16 group-hover:bg-primary-teal transition-all duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}