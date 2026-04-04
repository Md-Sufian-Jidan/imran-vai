"use client";

import { footerLinks, socialLinks } from "@/lib/commonLinks";
import { ArrowUpRight, Send, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
    return (
        <footer className="border-t border-[#10b981]/10 bg-[#021a14] relative overflow-hidden font-sans">
            {/* Emerald background glow */}
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
                style={{ background: "#10b981" }}
                aria-hidden="true"
            />

            <div className="container mx-auto px-6 py-16 pb-10 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Newsletter col */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#10b981] flex items-center justify-center shadow-lg shadow-[#10b981]/20 group-hover:rotate-12 transition-transform duration-300">
                                <Zap size={20} className="text-[#021a14] fill-current" />
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight text-[#ecfdf5]">
                                ThePixel<span className="text-[#10b981]">Verse</span>
                            </span>
                        </Link>

                        <p className="text-[#ecfdf5]/60 max-w-sm leading-relaxed text-sm">
                            We craft high-end digital experiences that elevate brands and drive global results.
                            Let&apos;s build something extraordinary together.
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-4 max-w-md">
                            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#10b981]">
                                Stay updated
                            </h4>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="hello@pixelverse.com"
                                    className="bg-[#022c22]/30 border-[#10b981]/20 text-[#ecfdf5] h-12 focus-visible:ring-[#10b981]/30 placeholder:text-[#ecfdf5]/30"
                                />
                                <Button
                                    type="submit"
                                    className="h-12 px-6 bg-[#10b981] text-[#021a14] hover:bg-[#10b981]/90 font-bold active:scale-95 transition-all shadow-lg shadow-[#10b981]/10"
                                >
                                    Join <Send size={14} className="ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Link columns */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2">
                        {footerLinks.map((footerLink) => (
                            <div key={footerLink.title} className="space-y-6">
                                <h4 className="font-bold text-[#ecfdf5] text-[11px] uppercase tracking-[0.2em] opacity-90">
                                    {footerLink.title}
                                </h4>
                                <ul className="space-y-4">
                                    {footerLink.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[#ecfdf5]/50 hover:text-[#10b981] transition-colors duration-300 text-sm flex items-center group"
                                            >
                                                <span className="relative">
                                                    {link.label}
                                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#10b981] transition-all duration-300 group-hover:w-full" />
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
                <div className="border-t border-[#10b981]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 order-2 md:order-1">
                        <p className="text-[#ecfdf5]/40 text-xs">
                            © {new Date().getFullYear()} {" "}
                            <span className="text-[#10b981] font-semibold">ThePixelVerse</span>
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-[#ecfdf5]/40 hover:text-[#ecfdf5] transition-colors text-xs">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-[#ecfdf5]/40 hover:text-[#ecfdf5] transition-colors text-xs">
                                Terms of Service
                            </Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-wrap justify-center gap-8 order-1 md:order-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 text-[#ecfdf5]/40 hover:text-[#10b981] transition-colors duration-300 text-[10px] font-bold uppercase tracking-[0.15em]"
                            >
                                {social.label}
                                <ArrowUpRight
                                    size={12}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 opacity-40 group-hover:opacity-100"
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