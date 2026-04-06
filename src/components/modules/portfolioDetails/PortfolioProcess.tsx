import SectionWrapper from "@/components/shared/SectionWrapper";
import { Project } from "@/types/common.types";
import { motion } from "framer-motion";

export default function PortfolioProcess({ study }: { study: Project }) {
    return (
        <SectionWrapper className="bg-slate-50 py-24 rounded-[4rem]" containerClassName="px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-center text-4xl font-black text-black uppercase tracking-tight mb-16">The Build Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {study.process.map((step, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-border group hover:border-primary-teal/40 transition-colors"
                        >
                            <span className="text-4xl font-black text-primary-teal/10 group-hover:text-primary-teal/20 transition-colors">0{i + 1}</span>
                            <span className="text-black font-bold uppercase text-sm tracking-tight">{step}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}