"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const TICKER_ITEMS = [
    "Full-Stack Engineering",
    "Flutter Mobile Apps",
    "Data Pipelines",
    "API Architecture",
    "PostgreSQL Design",
    "Automation Systems",
    "Next.js Platforms",
    "LLM Integration",
    "E-Commerce Builds",
    "RBAC & Security",
];

// Floating P coin decorations
const COINS = [
    { size: 120, top: "14%", left: "5%", delay: 0, duration: 3.2, rotation: -12, char: "P" },
    { size: 88, top: "22%", right: "8%", delay: 0.3, duration: 3.8, rotation: 8, char: "L" },
    { size: 72, bottom: "28%", left: "9%", delay: 0.6, duration: 3.5, rotation: -6, char: "↑" },
    { size: 96, bottom: "22%", right: "6%", delay: 0.2, duration: 4, rotation: 14, char: "✦" },
    { size: 60, top: "48%", right: "20%", delay: 0.9, duration: 3.3, rotation: -20, char: "∞" },
];

export default function Hero() {
    const tickerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100svh",
                background: "var(--off-white)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                paddingTop: "80px",
            }}
        >
            {/* Floating Coins — ambient tier 3 animation */}
            <div
                className="hidden md:block"
                style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
                aria-hidden="true"
            >
                {COINS.map((coin, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "absolute",
                            top: coin.top,
                            left: (coin as any).left,
                            right: (coin as any).right,
                            bottom: (coin as any).bottom,
                            width: coin.size,
                            height: coin.size,
                            borderRadius: "9999px",
                            border: "4px solid #000",
                            background: i % 2 === 0 ? "#FF90E8" : i % 3 === 0 ? "#F6D800" : "#FF90E8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: coin.size * 0.38,
                            fontWeight: 900,
                            fontFamily: "var(--font-display)",
                            color: "#000",
                            "--r": `${coin.rotation}deg`,
                            animationDelay: `${coin.delay}s`,
                            animationDuration: `${coin.duration}s`,
                        } as React.CSSProperties}
                        className="animate-float"
                    >
                        {coin.char}
                    </motion.div>
                ))}
            </div>

            {/* Main content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "900px",
                    width: "100%",
                    textAlign: "center",
                    padding: "0 clamp(20px, 5vw, 40px)",
                }}
            >
                {/* Pill badge */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "9999px",
                        border: "2px solid #000",
                        background: "#000",
                        padding: "8px 20px",
                        marginBottom: "40px",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#FF90E8",
                        fontFamily: "var(--font-display)",
                    }}
                >
                    <span
                        style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "9999px",
                            background: "#23A094",
                            display: "inline-block",
                            animation: "pulse-glow 2s ease-in-out infinite",
                            boxShadow: "0 0 8px #23A094",
                        }}
                    />
                    Available for new projects
                </motion.div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-hero)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 0.92,
                        color: "#000",
                        marginBottom: "32px",
                    }}
                >
                    {["Software", "built to", "scale."].map((line, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 48 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2 + i * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{
                                display: "block",
                                ...(i === 1 ? {
                                    WebkitTextStroke: "3px #000",
                                    color: "transparent",
                                } : {}),
                            }}
                        >
                            {line}
                        </motion.span>
                    ))}
                </h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: "clamp(17px, 2.5vw, 21px)",
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "#000",
                        maxWidth: "600px",
                        margin: "0 auto 48px",
                        opacity: 0.75,
                    }}
                >
                    Full-stack systems, automated pipelines, and apps engineered
                    by a team that cares deeply about structure.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <a
                        href="#work"
                        className="btn btn-yellow"
                        style={{ fontSize: "16px", padding: "16px 36px", textDecoration: "none" }}
                    >
                        See our work →
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-outline"
                        style={{ fontSize: "16px", padding: "16px 36px", textDecoration: "none" }}
                    >
                        Start a project
                    </a>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    style={{
                        marginTop: "64px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        color: "#8E8E8E",
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                    }}
                >
                    <div
                        style={{
                            width: "1px",
                            height: "40px",
                            background: "linear-gradient(to bottom, transparent, #000)",
                            animation: "float 2s ease-in-out infinite",
                        }}
                    />
                    Scroll
                </motion.div>
            </div>

            {/* Marquee ticker strip — anchored to bottom of hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "#000",
                    borderTop: "3px solid #000",
                    height: "52px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                }}
                aria-hidden="true"
            >
                <div
                    ref={tickerRef}
                    className="animate-marquee"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0",
                        whiteSpace: "nowrap",
                        willChange: "transform",
                    }}
                >
                    {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "24px",
                                padding: "0 24px",
                                fontFamily: "var(--font-display)",
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: i % 5 === 0 ? "#FF90E8" : i % 3 === 0 ? "#F6D800" : "#fff",
                            }}
                        >
                            {item}
                            <span style={{ color: "#FF90E8", opacity: 0.5 }}>✦</span>
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
