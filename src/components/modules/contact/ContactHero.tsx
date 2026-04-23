"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Ready to edit your images today</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-black leading-1.5 uppercase">
                    Transform Your <br />
                    <span className="text-[#1fb1c1] italic font-medium">Photos.</span>
                </h1>

                <p className="text-[#999999] text-xl md:text-2xl font-medium max-w-2xl leading-tight">
                    Send us your raw images for professional retouching, clipping path, background removal, and high-end photo editing services.
                </p>
            </motion.div>
        </section>
    );
}