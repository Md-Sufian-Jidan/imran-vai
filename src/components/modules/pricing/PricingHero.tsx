"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const PricingHero = () => (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-teal/5 blur-[120px] -z-10 rounded-full" />

        <div className="container-narrow relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge variant="outline" className="mb-6 border-primary-teal/20 text-primary-teal bg-primary-teal/5 px-6 py-1.5 uppercase tracking-[0.2em] text-[10px] font-black">
                    Photo Editing Pricing
                </Badge>
                <h1 className="font-heading text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-8">
                    Professional Editing, <br />
                    <span className="text-primary-teal">Competitive Pricing</span>
                </h1>
                <p className="text-[#999999] text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                    Transparent pricing for all photo editing services. From basic clipping path to high-end retouching, we deliver quality results at affordable rates.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button size="lg" className="bg-primary-teal hover:bg-black text-white rounded-2xl px-10 h-14 font-black uppercase tracking-widest text-xs transition-all duration-300">
                        Get Free Sample
                    </Button>
                    <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-2xl px-10 h-14 font-black uppercase tracking-widest text-xs transition-all duration-300">
                        Request Quote
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);