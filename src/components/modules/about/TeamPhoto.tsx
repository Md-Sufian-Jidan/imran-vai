"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import aboutTeam from "../../../assests/images/about-team.jpg";
import Image from "next/image";

export default function TeamPhoto() {
    return (
        <section>
            <SectionWrapper className="pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-border"
                >
                    <Image
                        src={aboutTeam}
                        alt="ThePixelVerse team collaborating in the office"
                        loading="lazy"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                </motion.div>
            </SectionWrapper>
        </section>
    );
}