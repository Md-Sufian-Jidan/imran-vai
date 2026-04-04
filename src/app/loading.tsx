"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <main className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#021a14] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-30">
                {/* Large Emerald Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/20 rounded-full blur-[120px] animate-pulse" />
                {/* Secondary Deep Forest Glow */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-8">
                {/* Branded Loader */}
                <div className="relative">
                    {/* Outer Ring - Individual Dark Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-24 h-24 bg-[#022c22]/40 border border-[#10b981]/20 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#000]/40 backdrop-blur-md"
                    >
                        {/* Pulsing Dots - Individual Emeralds */}
                        <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    animate={{
                                        y: [0, -8, 0],
                                        opacity: [0.3, 1, 0.3],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-[#10b981]"
                                    style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}
                                />
                            ))}
                        </div>

                        {/* Branded dot accent - Top Right Notification Style */}
                        <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-[#021a14] shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                    </motion.div>

                    {/* Animated Spinner Background - Dashed Emerald */}
                    <div
                        className="absolute -inset-4 border border-[#10b981]/10 rounded-[2rem] animate-[spin_10s_linear_infinite]"
                        style={{ borderStyle: 'dashed', borderWidth: '1px' }}
                    />
                </div>

                {/* Messaging */}
                <div className="text-center space-y-3">
                    <p className="font-heading text-lg font-bold tracking-widest uppercase text-[#ecfdf5]/90">
                        ThePixel<span className="text-[#10b981] italic">Verse</span>
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-[#10b981]/20" />
                        <p className="text-xs font-medium text-[#ecfdf5]/50 uppercase tracking-[0.2em]">
                            Crafting Excellence
                        </p>
                        <span className="h-px w-8 bg-[#10b981]/20" />
                    </div>
                </div>
            </div>

            {/* Decorative Grid Pattern Overlay - Emerald Dot Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
        </main>
    );
}