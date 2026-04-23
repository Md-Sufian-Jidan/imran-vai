"use client";

import Link from "next/link";
import { MoveLeft, Home, Search, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1fb1c1]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1fb1c1]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-12">
        {/* Large 404 Display */}
        <div className="relative inline-block group">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[150px] md:text-[240px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 select-none uppercase italic"
          >
            404
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1fb1c1] text-black px-8 py-3 rounded-2xl shadow-2xl skew-x-[-10deg] group-hover:skew-x-0 transition-transform duration-500"
          >
            <span className="text-sm md:text-base font-black uppercase tracking-[0.3em]">
              Void Detected
            </span>
          </motion.div>
        </div>

        {/* Messaging */}
        <div className="space-y-6 pt-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
            Lost in the <span className="text-[#1fb1c1] not-italic">PixelVerse?</span>
          </h2>
          <p className="text-[#999999] text-lg font-medium max-w-md mx-auto leading-tight">
            The coordinates you entered don&apos;t exist in this build. Let&apos;s redirect you to a functional sector.
          </p>
        </div>

        {/* Quick Links / Actions */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              size="lg"
              asChild
              className="h-16 px-10 bg-[#1fb1c1] text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#1fb1c1]/20 hover:bg-[#1fb1c1]/90 transition-all duration-300 min-w-[220px]"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-16 px-10 border-white/10 bg-white/[0.03] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all duration-300 min-w-[220px]"
            >
              <Link href="/portfolio">
                <Briefcase className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>

          {/* Secondary Links as Navigation Chips */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {[
              { label: "My Services", href: "/services", icon: Search },
              { label: "Direct Contact", href: "/contact", icon: Globe },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 py-3 px-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#1fb1c1]/30 transition-all text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] hover:text-white group"
              >
                <link.icon className="h-3 w-3 text-[#1fb1c1] group-hover:scale-110 transition-transform" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Teal Dot Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1fb1c1 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
    </main>
  );
}