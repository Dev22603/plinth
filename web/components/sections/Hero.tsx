"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--color-base)] px-6 pt-24 md:px-12">

            {/* Background precise grid */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Glowing Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="pointer-events-none absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[var(--color-accent)] blur-[120px]"
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="flex flex-col items-start gap-8 md:w-4/5">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="tech-border flex items-center gap-3 bg-[var(--color-surface)] px-4 py-2 font-mono text-[var(--text-sm)] uppercase tracking-wider text-[var(--color-text)]"
                    >
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[var(--shadow-glow)]" />
                        Available for Engineering Contracts
                    </motion.div>

                    {/* Massive Typography */}
                    <h1 className="font-sans text-[var(--text-hero)] font-black leading-[0.85] tracking-tighter text-[var(--color-text)] uppercase">
                        {["We build", "better", "systems.", "Faster."].map((line, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1 + i * 0.1,
                                    ease: [0.16, 1, 0.3, 1], // Custom fast-out slow-in
                                }}
                                className="block"
                            >
                                {i === 3 ? (
                                    <span className="text-[var(--color-accent)] clip-diagonal bg-[var(--color-surface)] px-4 pb-2 -ml-2">{line}</span>
                                ) : (
                                    line
                                )}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Precise Subhead */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="max-w-xl font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed border-l-2 border-[var(--color-accent)] pl-6"
                    >
                        Plinth is an elite engineering agency. We leverage AI tooling (Cursor, Claude) to accelerate delivery, backed by a fundamental understanding of scalable system design. Stop waiting months for startup MVPs.
                    </motion.p>

                    {/* Hard CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <a
                            href="#contact"
                            className="group tech-border relative overflow-hidden bg-[var(--color-accent)] px-8 py-4 font-mono text-[16px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Request a Quote
                                <span className="transform transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </a>
                        <a
                            href="#work"
                            className="group tech-border bg-[var(--color-surface)] px-8 py-4 font-mono text-[16px] font-bold uppercase tracking-wider text-[var(--color-text)] transition-colors hover:bg-[var(--color-border-light)]"
                        >
                            <span className="relative z-10">Review Our Work</span>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute right-0 bottom-[-10vh] flex flex-col items-center gap-4 hidden lg:flex"
                >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] rotate-90 origin-right whitespace-nowrap">Scroll to explore</span>
                    <div className="h-24 w-px bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
