"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { values } from "@/lib/commonLinks";
import { motion, Variants } from "framer-motion";
import { getIconComponent } from "@/lib/iconMapper";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

export default function WhyChooseUs() {
    return (
        <section>
            <SectionWrapper className="bg-white" containerClassName="px-6">
                {/* Heading uses your brand logic */}
                <SectionHeading
                    label="The Difference"
                    title="What sets ThePixelVerse apart"
                    description="We combine creative excellence with strategic thinking to deliver results that matter."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {values.map((v, i) => {
                        const Icon = getIconComponent(v.icon);
                        return (
                            <motion.div
                                key={v.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-border transition-all duration-500 hover:border-primary-teal/30 hover:shadow-xl hover:shadow-primary-teal/5"
                            >
                                {/* Icon Container - Primary Teal */}
                                <div className="w-14 h-14 rounded-2xl bg-primary-teal/5 flex items-center justify-center mb-6 border border-primary-teal/10 group-hover:bg-primary-teal transition-all duration-500">
                                    <Icon
                                        className="text-primary-teal group-hover:text-white transition-colors duration-500"
                                        size={26}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Content - Black & Gray #999999 */}
                                <h3 className="font-heading font-black text-xl text-black mb-3 uppercase tracking-tight">
                                    {v.title}
                                </h3>
                                <p className="text-[#999999] text-base leading-relaxed font-medium">
                                    {v.desc}
                                </p>

                                {/* Subtle decorative element on hover */}
                                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-1 h-1 rounded-full bg-primary-teal" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionWrapper>
        </section>
    );
}