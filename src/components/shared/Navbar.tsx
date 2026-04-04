"use client";

import { useState, useEffect } from "react";
import { Menu, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/navLinks";
import { getIconComponent } from "@/lib/iconMapper";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#021a14]/80 backdrop-blur-xl border-b border-emerald-500/10 py-3 shadow-2xl shadow-emerald-950/20"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-5 max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                        <Zap size={20} className="text-[#021a14] fill-current" />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight text-emerald-50">
                        ThePixel<span className="text-emerald-500">Verse</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1 bg-emerald-950/20 p-1 rounded-full border border-emerald-500/10 backdrop-blur-sm">
                            {navLinks.map((item) => {
                                const Icon = getIconComponent(item.icon);
                                const isActive = pathname === item.href;

                                if (item.isDropdown) {
                                    return (
                                        <NavigationMenuItem key={item.title}>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    "h-10 px-4 rounded-full bg-transparent hover:bg-emerald-500/10 text-emerald-50/70 hover:text-emerald-400 data-[state=open]:bg-emerald-500/10",
                                                    isActive && "text-emerald-400"
                                                )}
                                            >
                                                <Icon size={14} className="mr-2 opacity-60" />
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[700px] gap-2 p-6 md:grid-cols-2 lg:grid-cols-3 bg-[#021a14] border border-emerald-500/10 backdrop-blur-md">
                                                    <li className="col-span-full mb-2 border-b border-emerald-500/10 pb-2">
                                                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-500/60">Expert Photo Editing</p>
                                                    </li>
                                                    {item.subServices?.map((sub) => (
                                                        <li key={sub.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={sub.href}
                                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-500/5 group"
                                                                >
                                                                    <div className="text-sm font-semibold leading-none text-emerald-50 group-hover:text-emerald-400 transition-colors">{sub.title}</div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                }

                                return (
                                    <NavigationMenuItem key={item.href}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-emerald-500/10 hover:text-emerald-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive ? "bg-emerald-500/10 text-emerald-400 shadow-sm" : "text-emerald-50/60"
                                                )}
                                            >
                                                <Icon size={14} className={cn("mr-2", isActive ? "opacity-100" : "opacity-60")} />
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    <Button asChild variant="default" size="sm" className="hidden md:flex rounded-full px-6 font-bold h-10 bg-emerald-500 text-[#021a14] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-transform active:scale-95 border-none">
                        <Link href="/contact">Get Started</Link>
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20">
                                <Menu size={30} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto pt-12 bg-[#021a14] border-emerald-500/10">
                            <SheetTitle className="text-left mb-4 px-2 text-2xl font-heading font-bold mx-3 text-emerald-50">Menu</SheetTitle>
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const Icon = getIconComponent(link.icon);
                                    const isActive = pathname === link.href;

                                    return (
                                        <div key={link.title}>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all mx-3",
                                                    isActive ? "bg-emerald-500/10 text-emerald-400" : "text-emerald-50/70 hover:bg-emerald-500/5 hover:text-emerald-400"
                                                )}
                                            >
                                                <Icon size={20} />
                                                {link.title}
                                            </Link>
                                            {link.isDropdown && (
                                                <div className="ml-10 mt-2 grid gap-1 border-l-2 border-emerald-500/20 pl-4">
                                                    {link.subServices?.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className="py-2 text-sm text-emerald-50/50 hover:text-emerald-400 transition-colors"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;