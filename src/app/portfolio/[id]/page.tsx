"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/commonLinks";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import PortfolioDetailsHero from "@/components/modules/portfolioDetails/PortfolioDetailsHero";
import PortfolioProblemAndSolution from "@/components/modules/portfolioDetails/PortfolioProblemAndSolution";
import PortfolioProcess from "@/components/modules/portfolioDetails/PortfolioProcess";
import PortfolioResults from "@/components/modules/portfolioDetails/PortfolioResults";

export default async function PortfolioDetails({ params }: { params: { id: string } }) {

    const { id } = await params;
    const study = projects.find((p) => p.id === id);

    if (!study) return null;

    return (
        <main className="bg-white min-h-screen">
            {/* ── Header Section ── */}
            <PortfolioDetailsHero study={study} />

            {/* ── Full-Width Hero Visual ── */}

            <SectionWrapper containerClassName="px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[16/8] rounded-[3rem] overflow-hidden bg-slate-100 border border-border shadow-2xl"
                >
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </SectionWrapper>

            {/* ── Problem & Solution (Grid) ── */}
            <PortfolioProblemAndSolution study={study} />

            {/* ── Process Roadmap ── */}
            <PortfolioProcess study={study} />

            {/* ── Quantifiable Results ── */}
            <PortfolioResults study={study} />
        </main>
    );
}