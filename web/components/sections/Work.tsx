"use client";

import { motion } from "motion/react";
import { caseStudies } from "../../lib/data";

export default function Work() {
    return (
        <section id="work" className="border-t border-[var(--color-border)] bg-[var(--color-base)] py-32 md:py-48 px-6 md:px-12">
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 lg:mb-32 gap-8 border-b-2 border-[var(--color-accent)] pb-8">
                    <h2 className="font-sans text-[var(--text-display)] font-black tracking-tighter text-[var(--color-text)] uppercase leading-[0.85]">
                        Proof of<br />Work.
                    </h2>
                    <p className="font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] max-w-md">
                        Complex systems delivered on an accelerated timeline. We don't build toys.
                    </p>
                </div>

                <div className="flex flex-col gap-32 lg:gap-48">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group"
                        >
                            {/* Giant Index Number */}
                            <span className="absolute -left-12 -top-24 font-sans text-[12rem] font-black leading-none text-[var(--color-surface-hover)] select-none -z-10 hidden lg:block transition-colors group-hover:text-[var(--color-accent)] group-hover:opacity-10">
                                0{index + 1}
                            </span>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                                {/* Left: Meta & Identity */}
                                <div className="lg:col-span-5 flex flex-col justify-between">
                                    <div>
                                        <div className="tech-border inline-block bg-[var(--color-surface)] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
                                            {study.label}
                                        </div>
                                        <h3 className="font-sans text-5xl md:text-6xl font-black leading-none text-[var(--color-text)] uppercase mb-6">
                                            {study.project}
                                        </h3>
                                        <p className="font-mono text-lg text-[var(--color-accent)] leading-relaxed font-bold mb-12">
                                            {study.description}
                                        </p>
                                    </div>

                                    {/* Action Terminals */}
                                    <div className="flex flex-col sm:flex-row gap-4 border-t border-[var(--color-border)] pt-8">
                                        {study.links.live && (
                                            <a
                                                href={study.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn tech-border relative overflow-hidden bg-[var(--color-text)] text-[var(--color-base)] px-6 py-4 font-mono text-[14px] font-bold uppercase tracking-wider transition-colors hover:bg-[var(--color-accent)] hover:text-white flex-1 text-center"
                                            >
                                                <span className="relative z-10">Deploy →</span>
                                            </a>
                                        )}
                                        {study.links.demo && (
                                            <a
                                                href={study.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn tech-border bg-[var(--color-surface)] text-[var(--color-text)] px-6 py-4 font-mono text-[14px] font-bold uppercase tracking-wider transition-colors hover:bg-[var(--color-border-light)] flex-1 text-center"
                                            >
                                                <span className="relative z-10">▶ Access Demo</span>
                                            </a>
                                        )}
                                        {!study.links.live && !study.links.demo && (
                                            <div className="tech-border bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] px-6 py-4 font-mono text-[14px] font-bold uppercase tracking-wider flex-1 text-center opacity-50">
                                                <span>Awaiting Clearance</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Deep Dive Prose */}
                                <div className="lg:col-span-7 lg:border-l lg:border-[var(--color-border)] lg:pl-16 flex flex-col justify-center">
                                    <div className="space-y-8">
                                        {study.prose.map((paragraph, i) => (
                                            <p
                                                key={i}
                                                className={`font-mono text-lg leading-[1.8] ${i === 0 ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'} `}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
