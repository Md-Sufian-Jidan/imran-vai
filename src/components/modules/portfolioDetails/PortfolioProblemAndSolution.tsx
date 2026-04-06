import SectionWrapper from "@/components/shared/SectionWrapper";
import { Project } from "@/types/common.types";
import { Zap, Target } from "lucide-react";

export default function PortfolioProblemAndSolution({ study }: { study: Project }) {
    return (
        <SectionWrapper className="py-20 border-t border-border/50" containerClassName="px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-8 rounded-3xl bg-black text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-teal/20 blur-3xl" />
                            <h3 className="text-[10px] font-black text-primary-teal uppercase tracking-[0.3em] mb-6">Project Brief</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Client</p>
                                    <p className="font-bold text-sm uppercase">International Partner</p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Year</p>
                                    <p className="font-bold text-sm uppercase">2026</p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Core Tech</p>
                                    <p className="font-bold text-sm uppercase text-primary-teal">Next.js / Tailwind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-24">
                    {/* Challenge */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="text-primary-teal" size={24} />
                            <h2 className="font-heading text-3xl font-black text-black uppercase tracking-tight">The Challenge</h2>
                        </div>
                        <p className="text-[#999999] text-lg leading-relaxed font-medium">
                            {study.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="group">
                        <div className="flex items-center gap-4 mb-6">
                            <Zap className="text-primary-teal" size={24} />
                            <h2 className="font-heading text-3xl font-black text-black uppercase tracking-tight">Our Solution</h2>
                        </div>
                        <p className="text-[#999999] text-lg leading-relaxed font-medium">
                            {study.solution}
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}