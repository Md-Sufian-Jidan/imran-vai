"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { faqs } from "@/lib/commonLinks";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";


export default function FAQSection() {
    return (
        <SectionWrapper className="bg-white" containerClassName="px-6">
            <div className="flex flex-col lg:flex-row gap-16">

                {/* ── Left Side: Intro ── */}
                <div className="w-full lg:w-1/3">
                    <SectionHeading
                        label="Support"
                        title="Common Questions"
                        description="Everything you need to know about our process, pricing, and how we deliver world-class digital products."
                    />

                    <div className="mt-10 p-8 rounded-[2rem] border border-primary-teal/20 bg-primary-teal/5">
                        <HelpCircle className="text-primary-teal mb-4" size={32} />
                        <h4 className="text-black font-black uppercase tracking-tight mb-2">Still have questions?</h4>
                        <p className="text-[#999999] text-sm font-medium leading-relaxed mb-6">
                            Can&apos;t find what you&apos;re looking for? Reach out to our team for a personalized consultation.
                        </p>
                        <button className="text-primary-teal text-xs font-black uppercase tracking-widest hover:underline">
                            Contact Support →
                        </button>
                    </div>
                </div>

                {/* ── Right Side: Accordion ── */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-2/3"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-border rounded-3xl px-6 md:px-8 transition-all duration-300 data-[state=open]:border-primary-teal/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary-teal/5"
                            >
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <span className="text-left font-heading font-black text-lg text-black uppercase tracking-tight group-data-[state=open]:text-primary-teal transition-colors">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <p className="text-[#999999] text-base leading-relaxed font-medium max-w-2xl border-t border-border/50 pt-4">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}