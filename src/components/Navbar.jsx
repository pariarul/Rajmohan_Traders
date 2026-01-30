"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex flex-col">
                        <span className={cn(
                            "text-xl font-display font-bold tracking-wider leading-none",
                            scrolled || pathname !== "/" ? "text-brand-blue" : "text-white"
                        )}>
                            RAJMOHAN
                        </span>
                        <span className={cn(
                            "text-xs font-medium tracking-[0.2em] leading-tight",
                            scrolled || pathname !== "/" ? "text-brand-gold" : "text-brand-gold-light"
                        )}>
                            TRADERS
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-gold",
                                pathname === link.href
                                    ? "text-brand-gold"
                                    : scrolled || pathname !== "/"
                                        ? "text-slate-700"
                                        : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:+919894715530"
                        className="flex items-center space-x-2 bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue-dark transition-all transform hover:scale-105"
                    >
                        <Phone size={16} />
                        <span>Call Now</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={scrolled || pathname !== "/" || isOpen ? "text-brand-blue" : "text-white"} />
                    ) : (
                        <Menu className={scrolled || pathname !== "/" ? "text-brand-blue" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-[60px] bg-white shadow-xl z-40 md:hidden border-t"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-slate-100",
                                        pathname === link.href ? "text-brand-blue" : "text-slate-600"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3">
                                <a
                                    href="tel:+919894715530"
                                    className="flex items-center justify-center space-x-2 bg-brand-blue text-white py-4 rounded-xl font-bold"
                                >
                                    <Phone size={18} />
                                    <span>Call: 98947 15530</span>
                                </a>
                                <div className="text-center text-xs text-slate-400">
                                    Erode, Tamil Nadu, India
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
