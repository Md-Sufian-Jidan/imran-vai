"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { pricingFeatures, pricingPlans, pricingTable } from "@/lib/commonLinks";
import { cn } from "@/lib/utils";
import { getIconComponent } from "@/lib/iconMapper";

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="container-narrow relative z-10 text-center">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
                        Pricing Plans
                    </Badge>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Quality Editing, <span className="text-primary">Affordable Rates</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                        Transparent pricing for bulk image editing. No hidden costs.
                        Save up to 50% on large-scale e-commerce projects.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8">Free Trial</Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8">Custom Quote</Button>
                    </div>
                </div>
            </section>

            {/* --- PRICING CARDS --- */}
            <SectionWrapper className="py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={cn(
                                "relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 overflow-visible",
                                plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border/50"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="font-heading text-2xl font-bold">{plan.name}</CardTitle>
                                <CardDescription className="min-h-[40px] mt-2">{plan.description}</CardDescription>
                                <div className="mt-6">
                                    <span className="text-sm font-medium text-muted-foreground align-top mt-2 inline-block">$</span>
                                    <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground ml-1">/per image</span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 border-t pt-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Check className="text-primary" size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="pb-8">
                                <Button className="w-full rounded-full h-12" variant={plan.popular ? "default" : "outline"}>
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* --- DETAILED COMPARISON --- */}
            <SectionWrapper className="py-20">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-4">Detailed Service Comparison</h2>
                    <p className="text-muted-foreground">Find the perfect match for your image complexity.</p>
                </div>

                <div className="rounded-2xl border bg-card overflow-hidden">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="w-[300px] font-bold">Service Category</TableHead>
                                <TableHead className="text-center font-bold">Basic</TableHead>
                                <TableHead className="text-center font-bold">Standard</TableHead>
                                <TableHead className="text-center font-bold">Premium</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pricingTable.map((row) => (
                                <TableRow key={row.label} className="hover:bg-muted/30">
                                    <TableCell className="font-medium">{row.label}</TableCell>
                                    <TableCell className="text-center">{renderCell(row.basic)}</TableCell>
                                    <TableCell className="text-center">{renderCell(row.standard)}</TableCell>
                                    <TableCell className="text-center">{renderCell(row.premium)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </SectionWrapper>

            {/* --- TRUST BADGES --- */}
            <section className="bg-secondary/50 py-16">
                <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-8">
                    {pricingFeatures.map((item, i) => {
                        const Icon = getIconComponent(item.icon)
                        return (
                            <div key={i} className="text-center space-y-2">
                                <Icon className="mx-auto text-primary mb-2" size={32} />
                                <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        )
                    }

                    )}
                </div>
            </section>
        </div>
    );
};

const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
        return val ? <Check className="mx-auto text-primary" size={18} /> : <span className="text-muted-foreground/30">—</span>;
    }
    return <span className="text-sm font-medium">{val}</span>;
};

export default PricingPage;