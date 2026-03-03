"use client";

import { useState, useEffect } from "react";
import { useScroll } from "motion/react";

const NAV_LINKS = [
    { label: "01. Work", href: "#work" },
    { label: "02. Tech", href: "#services" },
    { label: "03. Profile", href: "#about" },
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
                    ? "border-b border-[var(--color-border)] bg-[var(--color-base)]/95 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="container flex h-[80px] items-center justify-between">
                    <span className="font-sans text-[24px] font-black uppercase tracking-widest text-[var(--color-text)]">
                        plinth
                        <span className="text-[var(--color-accent)]">_</span>
                    </span>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-10 md:flex">
                        <div className="flex gap-10">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-mono text-[13px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="group tech-border bg-[var(--color-accent)] px-6 py-2.5 font-mono text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                        >
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-white rounded-full animate-pulse"></span>
                                Init Build
                            </span>
                        </a>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <button
                        className="flex h-10 w-10 items-center justify-center tech-border bg-[var(--color-surface)] text-[var(--color-text)] md:hidden transition-colors hover:bg-[var(--color-surface-hover)]"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-base)] px-8 pt-6 md:hidden">
                    <div className="flex justify-end">
                        <button
                            className="flex h-12 w-12 items-center justify-center tech-border bg-[var(--color-surface)] text-[var(--color-text)] text-[18px] transition-colors hover:bg-[var(--color-surface-hover)]"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-12">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-sans text-4xl font-black uppercase text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="tech-border bg-[var(--color-accent)] px-10 py-5 font-mono text-[18px] font-black uppercase tracking-widest text-white mt-8"
                        >
                            Initialize Build
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
