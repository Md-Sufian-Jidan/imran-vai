"use client";

import PortfolioHero from "@/components/modules/portfolio/PortfolioHero";
import PortfolioProjects from "@/components/modules/portfolio/ProtfolioProjects";

export default function Portfolio() {
    return (
        <>
            {/* ── Header Section ── */}
            <PortfolioHero />
            {/* ── Projects Grid ── */}
            <PortfolioProjects />
        </>
    );
}