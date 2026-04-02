"use client";

import SectionHeading from "@/components/shared/SectionHeading"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { fadeUp } from "@/lib/animations"
import { process } from "@/lib/commonLinks"
import { motion } from "framer-motion"

export default function Process() {
    return (
        <section>
            <SectionWrapper>
                <SectionHeading
                    label="Our Process"
                    title="How we bring ideas to life"
                    description="A proven four-step approach that ensures every project is delivered with precision and purpose."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {process.map((step, i) => (
                        <motion.div
                            key={step.step}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="relative p-8 rounded-xl border border-border bg-card"
                        >
                            <span className="text-5xl font-heading font-bold text-primary/15 block mb-4">{step.step}</span>
                            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    )
}