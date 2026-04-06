import SectionWrapper from "@/components/shared/SectionWrapper";
import { Project } from "@/types/common.types";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioResults({ study }: { study: Project }) {
    return (
        <SectionWrapper className="py-32" containerClassName="px-6">
            <div className="text-center mb-20">
                <Trophy className="text-primary-teal mx-auto mb-6" size={40} />
                <h2 className="font-heading text-5xl font-black text-black uppercase tracking-tighter">Impact Generated</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {study.results.map((r, i) => (
                    <motion.div
                        key={r.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-10 rounded-[2.5rem] border border-border text-center group hover:bg-black transition-all duration-500"
                    >
                        <span className="font-heading text-5xl font-black text-black group-hover:text-primary-teal transition-colors block mb-2">
                            {r.value}
                        </span>
                        <span className="text-[#999999] text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors block">
                            {r.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}