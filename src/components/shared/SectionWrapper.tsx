"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`py-10 md:py-20 px-6 md:px-12 lg:px-20 ${className}`}
        >
            <div className="max-w-6xl mx-auto">{children}</div>
        </motion.section>
    );
}