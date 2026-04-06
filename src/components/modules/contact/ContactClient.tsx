"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/commonLinks";
import { getIconComponent } from "@/lib/iconMapper";
import ContactForm from "@/components/modules/contact/ContactForm";
import ContactMap from "./ContactMap";

export default function ContactClient() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1d2d3d] leading-[0.9]">
                            Let's build <br />
                            <span className="text-[#1fb1c1] italic">together.</span>
                        </h1>
                        <p className="text-[#4b5563] text-lg md:text-xl max-w-md leading-relaxed">
                            Have a specific project in mind or just want to say hi?
                            Drop a message and I'll respond within 24 hours.
                        </p>
                    </div>

                    {/* Contact Info List */}
                    <div className="space-y-8">
                        {contactInfo.map((item, i) => {
                            const Icon = getIconComponent(item.icon);
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-center gap-6"
                                >
                                    {/* Icon Container - Navy Background with Teal Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#1d2d3d] flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[#1fb1c1] text-[#1fb1c1] group-hover:text-white shadow-lg shadow-[#1fb1c1]/10">
                                        <Icon size={24} />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9ca3af] mb-1">
                                            {item.label}
                                        </p>
                                        <a
                                            href={item.href}
                                            target={item.label === "Location" ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="text-xl font-bold text-[#1d2d3d] hover:text-[#1fb1c1] transition-colors underline-offset-8 decoration-[#1fb1c1]/20 hover:underline"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ContactForm />
                </motion.div>
            </div>

            {/* Bottom Section: Map */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-24"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#1d2d3d]">Find me here</h2>
                    <p className="text-[#6b7280]">Based in the heart of Narayanganj, available globally.</p>
                </div>
                <ContactMap />
            </motion.div>
        </div>
    );
}