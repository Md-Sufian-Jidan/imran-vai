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
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021a14] px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl" />
            <div className="relative w-24 h-24 bg-[#022c22]/40 border border-[#10b981]/20 rounded-2xl flex items-center justify-center shadow-2xl">
              <AlertCircle size={48} className="text-red-500 animate-pulse" />
            </div>
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#10b981] border-4 border-[#021a14]" />
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#ecfdf5]">
            Something went <span className="text-[#10b981] italic">wrong.</span>
          </h1>
          <p className="text-[#ecfdf5]/60 text-lg max-w-lg mx-auto leading-relaxed">
            An unexpected error occurred. You can try refreshing the page or check the details below.
          </p>

          {/* DEBUGGING SECTION: Shows the actual error message */}
          <div className="mt-6 flex justify-center">
            <Collapsible className="w-full max-w-md bg-[#022c22]/40 border border-red-500/20 rounded-xl overflow-hidden">
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-xs font-mono text-red-400 hover:bg-red-500/5 transition-colors">
                <span>VIEW ERROR DETAILS</span>
                <ChevronDown size={14} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4 text-left">
                <div className="p-3 bg-black/40 rounded border border-red-500/10">
                  <p className="text-xs font-mono text-red-400 break-all leading-relaxed">
                    <strong>Message:</strong> {error.message || "Unknown error"}
                  </p>
                  {error.digest && (
                    <p className="text-[10px] font-mono text-[#ecfdf5]/40 mt-2">
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
            className="h-12 px-8 bg-[#10b981] text-[#021a14] hover:bg-[#10b981]/90 font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-[#10b981]/20"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 px-8 border-[#10b981]/20 text-[#ecfdf5] hover:bg-[#10b981]/10 rounded-full transition-all"
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
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
    </main>
  );
}