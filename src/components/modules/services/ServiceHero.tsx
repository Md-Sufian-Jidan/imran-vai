"use client";

import { services } from "@/lib/commonLinks";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ServiceCard from "./ServiceCard";

export default function ServiceHero() {
    return (
        <section className="bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />

            <SectionWrapper className="py-24">
                <SectionHeading
                    label="What We Do"
                    title="Services built for growth"
                    description="From strategy to execution, we deliver end-to-end creative solutions that transform brands and accelerate business growth."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service, i) => {
                        return (
                            <ServiceCard key={i} service={service} i={i} />
                        );
                    })}
                </div>
            </SectionWrapper>
        </section>
    );
}