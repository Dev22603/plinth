"use client";

import { motion } from "motion/react";
import { contactData } from "../../lib/data";

export default function Contact() {
    return (
        <section id="contact" className="overflow-hidden border-t-4 border-black bg-pink py-24 md:py-36">
            <div className="mx-auto max-w-4xl px-[clamp(24px,5vw,80px)] text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 32 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                    className="rounded-4xl border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-24 md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-center"
                >
                    <div className="mb-8 inline-block -rotate-3 transform rounded-full border-2 border-black bg-yellow px-6 py-2 font-sans text-[16px] font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {contactData.label}
                    </div>

                    <h2 className="mb-8 font-sans text-(--text-display) font-black tracking-tighter text-black leading-none">
                        {contactData.heading}
                    </h2>

                    <p className="mx-auto mb-16 max-w-2xl font-sans text-[24px] font-medium leading-[1.6] text-black">
                        {contactData.body}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row mb-16">
                        {contactData.links.map((link, index) => {
                            const external = link.href.startsWith("http");
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    className="w-full md:w-auto rounded-full border-4 border-black bg-teal px-6 py-4 font-sans text-[16px] sm:text-[20px] md:text-[24px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-2 hover:translate-x-2 hover:shadow-none truncate"
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    <p className="font-sans text-[16px] font-bold text-black/60">
                        {contactData.note}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
