"use client";

import { motion, Variants } from "framer-motion";
import { services } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    }),
};

export default function Services() {
    return (
        <section className="bg-[#FAFAFA] relative overflow-hidden font-jakarta">
            {/* Soft Teal Accents (Replacing Emerald Glow) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-teal/[0.03] blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary-teal/[0.03] blur-[100px] -z-10 rounded-full" />

            <SectionWrapper containerClassName="px-6">
                <SectionHeading
                    label="What We Do"
                    title="Services built for growth"
                    description="From strategy to execution, we deliver end-to-end creative solutions that transform brands and accelerate business growth."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
                    {services.map((service, i) => {
                        const Icon = getIconComponent(service.icon);

                        return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                            >
                                <Link href={`${service.url}`} className="block h-full group">
                                    <Card className="relative h-full overflow-hidden border-border bg-white transition-all duration-500 hover:border-primary-teal/40 hover:shadow-xl hover:shadow-primary-teal/[0.05]">

                                        {/* Hover Spotlight Gradient - Teal */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <CardHeader className="relative z-10 pb-2">
                                            {/* Icon Container - Primary Teal Styling */}
                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 border border-border group-hover:border-primary-teal/30 group-hover:bg-primary-teal/10 transition-all duration-500">
                                                <Icon
                                                    className="text-[#999999] group-hover:text-primary-teal group-hover:scale-110 transition-all duration-500"
                                                    size={24}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <CardTitle className="font-playfair text-2xl font-bold tracking-tight text-black group-hover:text-primary-teal transition-colors duration-300">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="relative z-10 pt-2">
                                            {/* Description - Gray #999999 */}
                                            <p className="text-[#999999] leading-relaxed text-sm antialiased group-hover:text-black/70 transition-colors duration-300">
                                                {service.desc}
                                            </p>

                                            {/* Bottom accent line - Teal Animated */}
                                            <div className="mt-8 h-[2px] w-0 bg-primary-teal opacity-0 transition-all duration-700 group-hover:w-full group-hover:opacity-100 rounded-full" />
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionWrapper>
        </section>
    );
}