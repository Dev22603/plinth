"use client";

import { motion } from "motion/react";
import { services } from "../../lib/data";

export default function Services() {
    return (
        <section id="services" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-32 md:py-48 px-6 md:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 lg:mb-32 gap-8 border-b-2 border-[var(--color-accent)] pb-8">
                    <h2 className="font-sans text-[var(--text-display)] font-black tracking-tighter text-[var(--color-text)] uppercase leading-[0.85]">
                        Technical<br />Capabilities.
                    </h2>
                    <p className="font-mono text-[var(--text-lg)] text-[var(--color-text-muted)] max-w-md">
                        What we engineer. Driven by AI acceleration, architected by experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="tech-border bg-[var(--color-base)] p-8 md:p-12 flex flex-col justify-between group transition-colors hover:bg-[var(--color-surface-hover)]"
                        >
                            <div>
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="inline-block bg-[var(--color-text)] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-base)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                                        {service.label}
                                    </div>
                                    <span className="font-mono text-sm text-[var(--color-border-light)] font-bold">// 0{index + 1}</span>
                                </div>

                                <h3 className="mb-6 font-sans text-3xl font-black leading-tight text-[var(--color-text)] uppercase">
                                    {service.heading}
                                </h3>

                                <p className="mb-12 font-mono text-[var(--text-body)] leading-relaxed text-[var(--color-text-muted)]">
                                    {service.body}
                                </p>
                            </div>

                            <div className="border-t border-[var(--color-border-light)] pt-6 mt-auto">
                                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold group-hover:pl-2 transition-all">
                                    Explore Capability →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
