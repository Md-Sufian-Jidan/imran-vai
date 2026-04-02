"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { team } from "@/lib/commonLinks";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

export default function Team() {
    return (
        <section>
            <SectionWrapper className="bg-card/50">
                <SectionHeading
                    label="Our Team"
                    title="The people behind the work"
                    description="A diverse group of strategists, designers, and developers united by a passion for excellence."
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-center"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
                                <span className="font-heading font-bold text-xl text-primary">{member.initial}</span>
                            </div>
                            <h4 className="font-heading font-semibold text-foreground">{member.name}</h4>
                            <p className="text-muted-foreground text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}