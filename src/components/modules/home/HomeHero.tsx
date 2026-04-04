"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroAbstract from "../../../assests/images/hero-abstract.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero () {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroAbstract}
                    alt="Creative abstract design"
                    fill
                    className="object-cover opacity-60 dark:opacity-40"
                    priority
                />
                {/* Gradient transition to match your OKLCH background */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="container-narrow px-6 relative z-10 md:pt-20 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    {/* Shadcn Badge for the Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <Badge
                            variant="secondary"
                            className="px-4 py-1.5 rounded-full border-primary/10 bg-secondary/50 backdrop-blur-md text-sm font-medium gap-2 text-foreground"
                        >
                            <Sparkles size={14} className="text-primary fill-primary animate-pulse" />
                            Award-winning creative agency
                        </Badge>
                    </motion.div>

                    <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                        We craft digital <br />
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent italic pr-2">
                                experiences
                            </span>
                            {/* Decorative accent line */}
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute bottom-2 left-0 h-[2px] bg-primary/20 -z-10"
                            />
                        </span>
                        <br />
                        drive results.
                    </h1>

                    <p className="font-sans text-muted-foreground text-base md:text-xl max-w-xl md:mb-12 mb-6 leading-relaxed">
                        A premium creative studio specializing in brand identity, web design,
                        and digital strategy for ambitious brands.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Primary Action */}
                        <Button
                            size="lg"
                            asChild
                            className="h-14 px-8 rounded-full font-bold text-base shadow-xl shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all"
                        >
                            <Link href="/contact" className="group">
                                Start Your Project
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        {/* Secondary Action */}
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="h-14 px-8 rounded-full font-bold text-base border-border bg-background/20 backdrop-blur-sm hover:bg-secondary/50 active:scale-95 transition-all"
                        >
                            <Link href="/portfolio" className="group">
                                View Our Work
                                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform opacity-60" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative side element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden xl:block" />
        </section>
    );
};