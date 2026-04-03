"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getIconComponent } from "@/lib/iconMapper";
import { privacySectionInfo } from "@/lib/commonLinks";

export default function PrivacyPage() {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-background py-32 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    className="space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4" />
                        Privacy First
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                        Privacy <span className="text-muted-foreground italic">Policy</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Last updated: March 2026. Your privacy is a priority, not an afterthought.
                    </p>
                </motion.div>

                <Separator className="mb-16" />

                {/* Content Sections */}
                <div className="space-y-12">
                    {privacySectionInfo.map((item, index) => {
                        const Icon = getIconComponent(item.icon);
                        return (
                            <motion.section
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <h2 className="text-xl font-bold tracking-tight">{item.title}</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-8 rounded-3xl bg-muted/30 border border-border flex items-center gap-6"
                >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                        <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold">Policy Updates</h3>
                        <p className="text-sm text-muted-foreground">
                            Any changes to this policy will be posted on this page immediately.
                            By using this site, you agree to the terms outlined here.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}