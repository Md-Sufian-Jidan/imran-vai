"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { values } from "@/lib/commonLinks";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { getIconComponent } from "@/lib/iconMapper";

export default function WhyChooseUs() {
    return (
        <section>
            {/* Why Choose Us */}
            <SectionWrapper>
                <SectionHeading
                    label="Why Apex"
                    title="What sets us apart"
                    description="We combine creative excellence with strategic thinking to deliver results that matter."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((v, i) => {
                        const Icon = getIconComponent(v.icon);
                        return (
                            <motion.div
                                key={v.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-card rounded-xl p-8 border border-border card-hover"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                    <Icon className="text-primary" size={24} />
                                </div>
                                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </SectionWrapper>
        </section>
    );
}