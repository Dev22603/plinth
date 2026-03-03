"use client";

import { motion } from "motion/react";
import { contactData } from "../../lib/data";

export default function Contact() {
    return (
        <section id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-32 md:py-48 px-6 md:px-12 overflow-hidden relative">

            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none opacity-[0.03] z-0 select-none">
                <h2 className="font-sans text-[20vw] font-black uppercase text-[var(--color-text)] whitespace-nowrap leading-none tracking-tighter">
                    Init_Sys.
                </h2>
            </div>

            <div className="mx-auto max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="mb-8 inline-flex items-center gap-3 bg-[var(--color-base)] px-4 py-2 tech-border">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[var(--shadow-glow)]" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                            Ready to accelerate
                        </span>
                    </div>

                    <h2 className="mb-12 font-sans text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-[var(--color-text)] uppercase text-center mx-auto">
                        Command our <br /><span className="text-[var(--color-text-muted)]">Engineers.</span>
                    </h2>

                    <p className="mx-auto mb-16 max-w-2xl font-mono text-xl leading-relaxed text-[var(--color-text-muted)]">
                        Stop waiting on traditional agencies. Fill out the form below to receive an architectural review and quote in record time.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-12">
                        <a
                            href={contactData.formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group tech-border relative overflow-hidden bg-[var(--color-accent)] px-12 py-6 font-mono text-[18px] sm:text-[22px] font-black uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-text)] hover:text-[var(--color-base)] w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Initialize Build
                                <span className="transform transition-transform group-hover:translate-x-2">→</span>
                            </span>
                        </a>
                    </div>

                    <p className="font-mono text-sm text-[var(--color-border-light)] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-[var(--color-border-light)] block" />
                        {contactData.note}
                        <span className="w-8 h-px bg-[var(--color-border-light)] block" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
