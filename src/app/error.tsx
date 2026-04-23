"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MoveLeft, RefreshCw, AlertCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1fb1c1]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1fb1c1]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Soft Red Glow for the Error itself */}
            <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
            <div className="relative w-24 h-24 bg-white/[0.03] border border-[#1fb1c1]/20 rounded-2xl flex items-center justify-center shadow-2xl">
              <AlertCircle size={48} className="text-red-500 animate-pulse" />
            </div>
            {/* Accent dot in your primary teal */}
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#1fb1c1] border-4 border-black" />
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
            Something went <span className="text-[#1fb1c1] not-italic">wrong.</span>
          </h1>
          <p className="text-[#999999] text-lg font-medium max-w-lg mx-auto leading-tight">
            An unexpected error occurred. You can try refreshing the page or check the technical details below.
          </p>

          {/* DEBUGGING SECTION */}
          <div className="mt-6 flex justify-center">
            <Collapsible className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
              <CollapsibleTrigger className="flex items-center justify-between w-full px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-red-400 hover:bg-white/[0.02] transition-colors">
                <span>View Error Details</span>
                <ChevronDown size={14} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-5 pb-5 text-left">
                <div className="p-4 bg-black rounded-xl border border-white/5">
                  <p className="text-xs font-mono text-red-400/80 break-all leading-relaxed">
                    <strong className="text-red-400 uppercase mr-2">Message:</strong> {error.message || "Unknown error"}
                  </p>
                  {error.digest && (
                    <p className="text-[10px] font-mono text-white/30 mt-3 pt-3 border-t border-white/5 uppercase tracking-widest">
                      Digest: {error.digest}
                    </p>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            onClick={() => reset()}
            className="h-14 px-10 bg-[#1fb1c1] text-black hover:bg-[#1fb1c1]/90 font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl transition-all active:scale-95 shadow-xl shadow-[#1fb1c1]/20 group"
          >
            <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-14 px-10 border-white/10 bg-transparent text-white hover:bg-white hover:text-black font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl transition-all"
          >
            <Link href="/">
              <MoveLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
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