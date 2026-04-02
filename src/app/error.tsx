"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MoveLeft, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-fade-up">
        {/* Error Icon/Status */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-destructive/20 rounded-2xl blur-xl group-hover:bg-destructive/30 transition-colors duration-500" />
            <div className="relative w-24 h-24 bg-card border border-border rounded-2xl flex items-center justify-center shadow-2xl">
              <AlertCircle size={48} className="text-destructive animate-pulse" />
            </div>
            {/* Branded dot accent */}
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse-glow" />
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Something went <span className="text-primary italic">wrong.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-lg mx-auto leading-relaxed">
            An unexpected error occurred while processing your request. Our team has been notified.
          </p>
          {error.digest && (
            <p className="text-xs font-mono text-muted-foreground/60 bg-muted/50 py-1.5 px-3 rounded-full inline-block">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            onClick={() => reset()}
            size="lg"
            className="h-14 px-8 text-base font-semibold font-heading group min-w-[180px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-14 px-8 text-base font-semibold font-heading border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 min-w-[180px]"
          >
            <Link href="/">
              <MoveLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Footer help */}
        <p className="pt-8 text-sm text-muted-foreground font-body">
          Still having issues? <Link href="/contact" className="text-primary hover:underline font-medium">Contact Support</Link>
        </p>
      </div>

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </main>
  );
}