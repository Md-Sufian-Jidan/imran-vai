"use client";

import { stats } from "@/lib/commonLinks";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function Stats() {
    return (
        <section>
            <SectionWrapper>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center"
                        >
                            <span className="font-heading text-4xl md:text-5xl font-bold text-gradient block">{stat.number}</span>
                            <span className="text-muted-foreground text-sm mt-2 block">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    )
};