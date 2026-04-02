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
        <section className="bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />

            <SectionWrapper>
                <SectionHeading
                    label="What We Do"
                    title="Services built for growth"
                    description="From strategy to execution, we deliver end-to-end creative solutions that transform brands and accelerate business growth."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
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
                                <Link href={`${service.url}`} className="cursor-pointer">
                                    <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 cursor-default">
                                        {/* Hover Spotlight Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <CardHeader className="relative z-10 pb-2">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary border border-border group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                                                <Icon
                                                    className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                                                    size={22}
                                                />
                                            </div>
                                            <CardTitle className="font-heading text-2xl font-bold tracking-tight text-foreground">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="relative z-10">
                                            <p className="font-plus-jakarta text-muted-foreground leading-relaxed text-sm antialiased">
                                                {service.desc}
                                            </p>

                                            {/* Bottom accent line */}
                                            <div className="mt-6 h-1 w-0 bg-primary/40 transition-all duration-500 group-hover:w-full rounded-full" />
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