"use client";

import Link from "next/link";
import { MoveLeft, Home, Search, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-12 animate-fade-up">
        {/* Large 404 Display */}
        <div className="relative inline-block group">
          <h1 className="font-heading text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 select-none">
            404
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-6 py-2 rounded-full shadow-2xl skew-x-[-12deg] group-hover:skew-x-0 transition-transform duration-500">
            <span className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent italic">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-4 pt-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Lost in the <span className="text-primary">Apex</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-md mx-auto leading-relaxed">
            The page you are looking for has been moved, removed, or never existed. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Quick Links / Actions */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-base font-semibold font-heading group min-w-[200px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-base font-semibold font-heading border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 min-w-[200px]"
            >
              <Link href="/portfolio">
                <Briefcase className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            {[
              { label: "Our Services", href: "/services", icon: Search },
              { label: "Contact Us", href: "/contact", icon: MoveLeft },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <link.icon className="h-4 w-4 opacity-70" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </main>
  );
}
