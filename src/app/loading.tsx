"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <main className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-30">
                {/* Brand Teal Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#1fb1c1]/10 rounded-full blur-[120px] animate-pulse" />
                {/* Secondary Soft Glow */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1fb1c1]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-12">
                {/* Modern Branded Loader */}
                <div className="relative">
                    {/* Outer Box - Glassmorphism style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-28 h-28 bg-white/[0.03] border border-[#1fb1c1]/20 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden"
                    >
                        {/* Shimmering Scan Effect */}
                        <motion.div
                            animate={{ y: [-120, 120] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#1fb1c1]/10 to-transparent pointer-events-none"
                        />

                        {/* Pulsing Dots - Primary Teal */}
                        <div className="flex gap-2 relative z-10">
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.3, 1, 0.3],
                                        backgroundColor: ["#1fb1c1", "#ffffff", "#1fb1c1"]
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-[#1fb1c1]"
                                    style={{ boxShadow: '0 0 15px rgba(31, 177, 193, 0.4)' }}
                                />
                            ))}
                        </div>

                        {/* Accent notification dot */}
                        <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#1fb1c1] animate-ping" />
                    </motion.div>

                    {/* Rotating Tech Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border border-[#1fb1c1]/5 rounded-[3rem]"
                        style={{ borderStyle: 'dashed', borderWidth: '1.5px' }}
                    />
                </div>

                {/* Brand Identity */}
                <div className="text-center space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-black tracking-[0.3em] uppercase text-white"
                    >
                        THEPIXEL<span className="text-[#1fb1c1] italic">VERSE</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <span className="h-px w-6 bg-white/10" />
                        <p className="text-[10px] font-bold text-[#999999] uppercase tracking-[0.5em]">
                            Initializing Interface
                        </p>
                        <span className="h-px w-6 bg-white/10" />
                    </motion.div>
                </div>
            </div>

            {/* Subtle Teal Dot Grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #1fb1c1 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
        </main>
    );
}