"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVission() {
    return (
        <section>
            <SectionWrapper className="bg-card/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Target className="text-primary" size={20} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl text-foreground">Our Mission</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To empower brands with world-class design and digital strategy that drives meaningful growth. We believe great design isn't just beautiful — it's a powerful business tool.
                        </p>
                    </motion.div>
                    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Eye className="text-primary" size={20} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl text-foreground">Our Vision</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To be the creative partner of choice for brands that refuse to settle. We envision a world where every digital interaction is thoughtfully designed and deeply impactful.
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}