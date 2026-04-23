"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/commonLinks";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const PricingPlans = () => (
    <SectionWrapper className="py-20 bg-[#FAFAFA]" containerClassName="px-6">
        <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
                <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card
                        className={cn(
                            "relative flex flex-col transition-all duration-500 rounded-[2.5rem] p-4 border-border/60",
                            plan.popular ? "border-primary-teal shadow-2xl shadow-primary-teal/10 scale-105 z-10 bg-white" : "hover:border-primary-teal/30"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Badge className="bg-primary-teal text-white px-6 py-2 rounded-full uppercase tracking-[0.2em] text-sm font-black border-none">
                                    Most Popular
                                </Badge>
                            </div>
                        )}

                        <CardHeader className="text-center pb-8 pt-6">
                            <CardTitle className="font-heading text-2xl font-black uppercase tracking-tight text-black">{plan.name}</CardTitle>
                            <CardDescription className="text-[#999999] font-medium mt-2">{plan.description}</CardDescription>
                            <div className="mt-8 flex items-baseline justify-center">
                                <span className="text-lg font-black text-black mr-1">$</span>
                                <span className="text-6xl font-black tracking-tighter text-black">{plan.price}</span>
                                <span className="text-[#999999] text-xs font-bold uppercase tracking-widest ml-2">/img</span>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1 border-t border-border/50 pt-8">
                            <ul className="space-y-5">
                                {plan.features.map((feature: string) => (
                                    <li key={feature} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-teal/10 flex items-center justify-center mt-0.5">
                                            <Check className="text-primary-teal" size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-[#999999] text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="pt-8 pb-4">
                            <Button
                                className={cn(
                                    "w-full rounded-2xl h-14 font-black uppercase tracking-widest text-[10px] transition-all duration-300",
                                    plan.popular ? "bg-black hover:bg-primary-teal text-white" : "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                                )}
                            >
                                Select {plan.name}
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    </SectionWrapper>
);