"use client";

import { caseStudies } from "../../lib/data";
import { motion } from "motion/react";
import React from 'react';

export default function Manifesto() {
    return (
        <section className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)] py-32 md:py-48 px-6 md:px-12 overflow-hidden">

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: The Claim */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="font-sans text-[var(--text-display)] font-black leading-[0.9] tracking-tighter text-[var(--color-text)] uppercase mb-8"
                        >
                            The Advantage.
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="h-1 w-24 bg-[var(--color-accent)] mb-8"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            <p className="font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] mb-4">
                                Most agencies bill you for hundreds of hours of boilerplate coding. They do things the slow way because it justifies their retainers.
                            </p>
                            <p className="font-mono text-[var(--text-lg)] text-[var(--color-accent)] font-bold">
                                We refuse to do that.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: The Proof (Editorial Layout) */}
                    <div className="lg:col-span-7 flex flex-col gap-16 md:gap-32 md:pt-24 lg:border-l lg:border-[var(--color-border)] lg:pl-16">

                        {/* Point 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <span className="absolute -top-12 -left-4 font-sans text-8xl font-black text-[var(--color-base)] opacity-50 z-0 select-none">01</span>
                            <div className="relative z-10">
                                <h3 className="font-sans text-[var(--text-heading)] font-black uppercase text-[var(--color-text)] mb-6 leading-tight">
                                    AI-Engineered Velocity
                                </h3>
                                <p className="font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed">
                                    We integrate heavily with Cursor, Claude, and Gemini across our entire workflow. We generate models, controllers, and components at speeds human typing cannot match. Our delivery velocity is an unfair advantage we pass directly to your timeline.
                                </p>
                            </div>
                        </motion.div>

                        {/* Point 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <span className="absolute -top-12 -left-4 font-sans text-8xl font-black text-[var(--color-base)] opacity-50 z-0 select-none">02</span>
                            <div className="relative z-10">
                                <h3 className="font-sans text-[var(--text-heading)] font-black uppercase text-[var(--color-text)] mb-6 leading-tight">
                                    Fundamentally Sound Architecture
                                </h3>
                                <p className="font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed">
                                    Code generation is useless if the system architecture is broken. LLMs can write a function, but they cannot design a highly available, multi-tenant database schema. We are senior system designers first. We use AI for speed, but we rely on deep engineering experience for stability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Point 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <span className="absolute -top-12 -left-4 font-sans text-8xl font-black text-[var(--color-base)] opacity-50 z-0 select-none">03</span>
                            <div className="relative z-10">
                                <div className="tech-border bg-[var(--color-base)] p-8">
                                    <h3 className="font-mono text-xl font-bold text-[var(--color-accent)] mb-4 uppercase">The Result</h3>
                                    <p className="font-sans text-3xl font-black text-[var(--color-text)] leading-tight uppercase">
                                        Production software built in exactly half the time you were quoted elsewhere.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
