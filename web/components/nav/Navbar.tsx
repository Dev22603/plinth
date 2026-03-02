"use client";

import { useState, useEffect } from "react";
import { useScroll } from "motion/react";

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 10);
        });
    }, [scrollY]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "border-b-[2px] border-solid border-black bg-white"
                        : "bg-transparent"
                    }`}
            >
                <div className="container flex h-[80px] items-center justify-between px-8">
                    <span className="font-sans text-[24px] font-black lowercase tracking-tighter text-black">
                        plinth
                    </span>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-sans text-[16px] font-medium text-black transition-opacity hover:opacity-60"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="rounded-full border-2 border-black bg-white px-6 py-2.5 font-sans text-[16px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[var(--color-yellow)] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-pink)] px-8 pt-6 md:hidden">
                    <div className="flex justify-end">
                        <button
                            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[24px] font-black"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            \u2715
                        </button>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-12">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-sans text-[48px] font-black text-black"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="rounded-full border-4 border-black bg-white px-10 py-5 font-sans text-[24px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
