"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/navLinks";
import { getIconComponent } from "@/lib/iconMapper";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setOpen(false), [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4",
                scrolled ? "top-4" : "top-0"
            )}
        >
            <nav
                className={cn(
                    "container mx-auto transition-all duration-500 rounded-xl border",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl border-border shadow-lg py-2" // Changed to white bg, default border, simple shadow
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-10 h-10 rounded-xl bg-primary-teal flex items-center justify-center transition-transform group-hover:rotate-12"> {/* Removed specific glow shadow */}
                            <Zap size={22} className="text-white fill-current" /> {/* Icon is white against primary (black) bg */}
                        </div>
                        <span className="font-heading font-bold text-2xl tracking-tight text-black"> {/* Logo text is black */}
                            ThePixel<span className="text-primary-teal">Verse</span> {/* Highlight uses Teal */}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 bg-muted p-1 rounded-xl border border-border backdrop-blur-sm"> {/* Swapped dark emerald to Muted (f4f4f5) */}
                        {navLinks.map((item) => {
                            const Icon = getIconComponent(item.icon);
                            const isActive = pathname === item.href;

                            return (
                                <div
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.isDropdown && setActiveDropdown(item.title)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                                            isActive
                                                ? "bg-primary text-primary-teal" // Active item: Black background, white text
                                                : "text-black hover:text-primary-teal hover:bg-white/50" // Inactive: Black text, hovers to Teal
                                        )}
                                    >
                                        <Icon
                                            size={14}
                                            className={cn(isActive ? "opacity-100" : "opacity-60")}
                                        />
                                        {item.title}
                                        {item.isDropdown && (
                                            <ChevronDown
                                                size={12}
                                                className={cn(
                                                    "transition-transform",
                                                    activeDropdown === item.title && "rotate-180"
                                                )}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Megamenu */}
                                    <AnimatePresence>
                                        {item.isDropdown && activeDropdown === item.title && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                                            >
                                                <div className="bg-white border border-border rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-2"> {/* White background dropdown */}
                                                    <div className="col-span-2 mb-2 border-b border-border pb-2">
                                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-teal"> {/* Header is Teal */}
                                                            Premium Photo Services
                                                        </p>
                                                    </div>
                                                    {item.subServices?.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className="text-sm py-2 text-[#999999] hover:text-primary-teal transition-colors flex items-center gap-2 group/item" // Links are gray (#999999), hover to Teal
                                                        >
                                                            <div className="w-1 h-1 rounded-xl bg-primary-teal opacity-0 group-hover/item:opacity-100 transition-all" /> {/* Dot is Teal */}
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            className="hidden md:flex rounded-xl px-6 border border-primary-teal bg-primary-foreground text-black hover:bg-primary-teal hover:text-white h-12 font-bold" // Main CTA: Black, hovers to Teal
                        >
                            <Link href="/contact">Get Started</Link>
                        </Button>

                        <button
                            className="md:hidden z-50 p-2 text-black" // Hamburger is black
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-4 overflow-y-auto" // White background overlay
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => {
                                const Icon = getIconComponent(link.icon);
                                return (
                                    <motion.div
                                        key={link.title}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-4 py-4 text-2xl font-bold text-black border-b border-border" // Text is black
                                        >
                                            <Icon className="text-primary-teal" /> {/* Icons are Teal */}
                                            {link.title}
                                        </Link>
                                        {link.isDropdown && (
                                            <div className="grid grid-cols-1 gap-2 py-4 pl-10">
                                                {link.subServices?.slice(0, 6).map((sub) => (
                                                    <Link
                                                        key={sub.title}
                                                        href={sub.href}
                                                        className="text-[#999999] py-1" // Sub-services are gray
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                                <Link
                                                    href="/services"
                                                    className="text-primary-teal text-sm font-bold mt-2" // "View all" is Teal
                                                >
                                                    View all services →
                                                </Link>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                            <Button className="mt-8 w-full h-12 rounded-xl bg-primary text-white text-lg font-bold hover:bg-primary-teal"> {/* Mobile CTA: Black, hovers to Teal */}
                                Get a Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;