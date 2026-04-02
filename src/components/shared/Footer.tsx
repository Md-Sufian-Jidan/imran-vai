"use client";

import { footerLinks, socialLinks } from "@/lib/commonLinks";
import { ArrowUpRight, Send, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card relative overflow-hidden font-sans">
            {/* Subtle background glow using your OKLCH primary */}
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
                style={{ background: "var(--primary)" }}
                aria-hidden="true"
            />

            <div className="container-narrow px-6 py-16 pb-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Newsletter col */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group relative z-10">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                                <Zap size={20} className="text-primary-foreground fill-current" />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight">
                                ThePixel<span className="text-primary">Verse</span>
                            </span>
                        </Link>

                        <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
                            We craft digital experiences that elevate brands and drive results.
                            Let&apos;s build something extraordinary together.
                        </p>

                        {/* Newsletter with Shadcn Components */}
                        <div className="space-y-3 max-w-md">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                                Stay updated
                            </h4>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="hello@agency.com"
                                    className="bg-background border-border h-11 focus-visible:ring-primary/20"
                                />
                                <Button type="submit" size="default" className="h-11 px-6 font-semibold shadow-sm active:scale-95 transition-transform">
                                    Join <Send size={14} className="ml-2" />
                                </Button>
                            </form>
                            <p className="text-[11px] text-muted-foreground italic">
                                No spam. Weekly studio updates only.
                            </p>
                        </div>
                    </div>

                    {/* Spacer for Desktop */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Link columns */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.map((footerLink) => (
                            <div key={footerLink.title} className="space-y-5">
                                <h4 className="font-bold text-foreground text-[11px] uppercase tracking-[0.2em]">
                                    {footerLink.title}
                                </h4>
                                <ul className="space-y-3">
                                    {footerLink.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                                            >
                                                <span className="relative">
                                                    {link.label}
                                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1">
                        <p className="text-muted-foreground text-xs">
                            © {new Date().getFullYear()} {" "}
                            <span className="text-foreground font-semibold">ThePixelVerse</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
                                Terms
                            </Link>
                        </div>
                    </div>

                    {/* Socials with animated Icons */}
                    <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs font-bold uppercase tracking-widest"
                            >
                                {social.label}
                                <ArrowUpRight
                                    size={12}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 opacity-50 group-hover:opacity-100"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;