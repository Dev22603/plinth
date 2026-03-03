"use client";

import { motion } from "motion/react";
import { team, serviceAreas } from "../../lib/data";

export default function About() {
    return (
        <section
            id="about"
            className="border-t border-[var(--color-border)] bg-[var(--color-base)] py-32 md:py-48 px-6 md:px-12"
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Main Thesis Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 flex flex-col justify-center"
                    >
                        <div className="mb-12 inline-flex items-center gap-3 bg-[var(--color-surface)] px-4 py-2 tech-border">
                            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-text)]">
                                Studio Profile
                            </span>
                        </div>

                        <h2 className="mb-12 font-sans text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-[var(--color-text)] uppercase">
                            Engineers first.<br />
                            <span className="text-[var(--color-accent)]">Hyperscalers second.</span>
                        </h2>

                        <div className="space-y-8 border-l border-[var(--color-border)] pl-8">
                            <p className="font-mono text-xl md:text-2xl font-bold leading-relaxed text-[var(--color-text)]">
                                We are an elite engineering unit focused on building production-ready architectures that don't collapse under scale.
                            </p>
                            <p className="font-mono text-lg leading-relaxed text-[var(--color-text-muted)]">
                                While other agencies sell you junior developers clicking around in low-code builders, we architect actual systems. We've built highly available e-commerce backends, complex streaming data ingestion pipelines, and multi-platform mobile applications.
                            </p>
                            <p className="font-mono text-lg leading-relaxed text-[var(--color-text-muted)]">
                                We accelerate our output using AI, but we rely entirely on our deep experience in system design to ensure what we build is secure, performant, and maintainable. We are not limited by tech stacks because we understand underlying computer science fundamentals.
                            </p>
                        </div>

                        {/* Team (if populated) */}
                        {team.length > 0 && (
                            <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
                                <h3 className="mb-10 font-mono text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                                    // Primary Engineers
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {team.map((member: { name: string; role: string; avatar?: string }) => (
                                        <div key={member.name} className="tech-border flex items-center gap-6 bg-[var(--color-surface)] p-6 transition-colors hover:bg-[var(--color-surface-hover)]">
                                            {member.avatar ? (
                                                <img src={member.avatar} alt={member.name} className="h-16 w-16 grayscale opacity-80" />
                                            ) : (
                                                <div className="h-16 w-16 bg-[var(--color-border)] flex items-center justify-center font-sans text-xl font-black text-[var(--color-text-muted)]">
                                                    {member.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-sans text-xl font-black uppercase text-[var(--color-text)] mb-1">{member.name}</p>
                                                <p className="font-mono text-[13px] font-bold text-[var(--color-accent)]">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Technical Telemetry Aside */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 self-start"
                    >
                        <div className="tech-border bg-[var(--color-surface)] p-8 md:p-12 flex flex-col gap-12">

                            <div className="border-b border-[var(--color-border-light)] pb-4 mb-4">
                                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                                    System Status
                                </h4>
                            </div>

                            {/* Status */}
                            <div>
                                <h5 className="mb-3 font-mono text-sm text-[var(--color-text-muted)]">Current Bandwidth</h5>
                                <div className="inline-flex items-center gap-3 bg-[var(--color-base)] px-4 py-3 tech-border">
                                    <span className="h-2 w-2 bg-[var(--color-accent)] animate-pulse shadow-[var(--shadow-glow)]" />
                                    <span className="font-sans text-[15px] font-black uppercase text-[var(--color-text)]">
                                        Accepting Contracts
                                    </span>
                                </div>
                            </div>

                            {/* Philosophy */}
                            <div>
                                <h5 className="mb-4 font-mono text-sm text-[var(--color-text-muted)]">Engineering Thesis</h5>
                                <p className="font-mono text-[15px] leading-relaxed text-[var(--color-text)] border-l-2 border-[var(--color-accent)] pl-4">
                                    Velocity is a byproduct of sound architecture. A system designed correctly from day one allows for massive acceleration later.
                                </p>
                            </div>

                            {/* Service Regions */}
                            {serviceAreas.length > 0 && (
                                <div>
                                    <h5 className="mb-4 font-mono text-sm text-[var(--color-text-muted)]">Servicing Regions</h5>
                                    <div className="flex flex-col gap-3">
                                        {serviceAreas.map((area) => (
                                            <div key={area.city} className="flex justify-between items-end border-b border-[var(--color-border-light)] pb-2 group">
                                                <span className="font-sans text-[16px] font-black text-[var(--color-text)] uppercase">{area.city}</span>
                                                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{area.country}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
