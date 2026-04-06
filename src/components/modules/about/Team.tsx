"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { teamMembers } from "@/lib/commonLinks";
import { motion, Variants } from "framer-motion";

// Local team data based on your profile and professional needs


const memberVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function Team() {
    return (
        <SectionWrapper className="bg-[#FAFAFA]" containerClassName="px-6">
            <SectionHeading
                label="The Architects"
                title="The people behind the work"
                description="A diverse group of strategists, designers, and developers united by a passion for excellence."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={member.name}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={memberVariants}
                        className="group relative"
                    >
                        {/* Avatar Container */}
                        <div className="relative aspect-square mb-6 rounded-3xl overflow-hidden bg-slate-50 border border-border transition-all duration-500 group-hover:border-primary-teal/30 group-hover:shadow-xl group-hover:shadow-primary-teal/5">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-slate-100">
                                <span className="font-heading font-black text-4xl text-primary-teal opacity-20 group-hover:opacity-40 transition-opacity">
                                    {member.initial}
                                </span>
                            </div>

                            {/* Teal Accent Bar on Hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary-teal transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </div>

                        {/* Info */}
                        <div className="text-center md:text-left md:pl-2">
                            <h4 className="font-heading font-black text-lg text-black uppercase tracking-tight">
                                {member.name}
                            </h4>
                            <div className="flex flex-col gap-1 mt-1">
                                <p className="text-primary-teal text-[10px] font-black uppercase tracking-[0.2em]">
                                    {member.designation}
                                </p>
                                <p className="text-[#999999] text-sm font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}