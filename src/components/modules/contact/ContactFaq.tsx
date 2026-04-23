"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { contactFaqs } from "@/lib/commonLinks";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function ContactFaq() {
    return (
        <section className="py-24 border-t border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Side: Section Title */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-primary-teal/5 border border-primary-teal/10 text-primary-teal text-[10px] font-black uppercase tracking-[0.3em]">
                        <HelpCircle size={12} />
                        Support Center
                    </div>
                    <h3 className="text-6xl font-black text-black uppercase tracking-tighter leading-none">
                        Frequent <br />
                        <span className="text-[#999999] italic font-medium">Enquiries</span>
                    </h3>
                    <p className="text-base text-[#999999] font-medium leading-relaxed max-w-xs">
                        Quick answers to the most common questions about our editing process,
                        delivery timelines, and bulk pricing.
                    </p>
                </div>

                {/* Right Side: Shadcn Accordion */}
                <div className="lg:col-span-8">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {contactFaqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="border border-border rounded-xl px-6 py-2 transition-all duration-300 data-[state=open]:border-primary-teal data-[state=open]:bg-slate-50/50 group"
                                >
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <span className="text-left font-bold text-lg text-black uppercase tracking-tight group-hover:text-primary-teal transition-colors">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#999999] text-base leading-relaxed font-medium pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
}