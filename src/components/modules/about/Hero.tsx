"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="container-narrow">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        We're a team of creatives obsessed with <span className="text-gradient">great design.</span>
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                        Founded in 2026, ThePixelVerse has grown from a small design studio to a full-service creative agency. We partner with ambitious brands to create digital experiences that matter.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}