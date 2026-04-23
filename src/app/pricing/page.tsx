"use client";

import { PricingComparison } from "@/components/modules/pricing/PricingComparison";
import { PricingHero } from "@/components/modules/pricing/PricingHero";
import { PricingPlans } from "@/components/modules/pricing/PricingPlans";
import { PricingTrustBadges } from "@/components/modules/pricing/PricingTrustBadge";

const PricingPage = () => {
    return (
        <div className="min-h-screen">
            {/* Pricing Hero */}
            <PricingHero />
            {/* Pricing Plans */}
            <PricingPlans />
            {/* Pricing Comparison */}
            <PricingComparison />
            {/* --- Pricing TRUST BADGES --- */}
            <PricingTrustBadges />
        </div>
    );
};

export default PricingPage;