"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    background: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
                    backdropFilter: isScrolled ? "blur(12px)" : "none",
                    borderBottom: isScrolled ? "1px solid #E5E5E5" : "none",
                    transition: "background 300ms ease, border 300ms ease, backdrop-filter 300ms ease",
                }}
            >
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <a
                        href="#home"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "24px",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        plinth
                    </a>

                    {/* Desktop links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden md:flex">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "#000",
                                    textDecoration: "none",
                                    fontFamily: "var(--font-display)",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            style={{ fontSize: "14px", padding: "10px 24px" }}
                        >
                            Start a project
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden"
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "9999px",
                            border: "2px solid #000",
                            background: "#FF90E8",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            cursor: "pointer",
                        }}
                    >
                        <span style={{ display: "block", width: "18px", height: "2px", background: "#000", borderRadius: "2px" }} />
                        <span style={{ display: "block", width: "14px", height: "2px", background: "#000", borderRadius: "2px", alignSelf: "flex-start", marginLeft: "3px" }} />
                        <span style={{ display: "block", width: "18px", height: "2px", background: "#000", borderRadius: "2px" }} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 60,
                            background: "#000",
                            display: "flex",
                            flexDirection: "column",
                            padding: "24px",
                        }}
                    >
                        {/* Close */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
                            <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff" }}>
                                plinth
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "9999px",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    background: "transparent",
                                    color: "#fff",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Links */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, x: -32 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(40px, 12vw, 72px)",
                                        fontWeight: 900,
                                        letterSpacing: "-0.04em",
                                        color: "#fff",
                                        textDecoration: "none",
                                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                                        paddingBottom: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    {link.label}
                                    <span style={{ color: "#FF90E8", fontSize: "0.5em" }}>→</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="btn btn-yellow"
                            style={{ fontSize: "18px", padding: "18px 32px", textDecoration: "none", textAlign: "center" }}
                        >
                            Start a project →
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
