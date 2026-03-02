"use client";

import { motion } from "motion/react";
import { aboutData } from "../../lib/data";

export default function About() {
    return (
        <section
            id="about"
            className="border-t-4 border-black bg-[var(--color-teal)] py-24 md:py-36"
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    className="grid grid-cols-1 rounded-[2rem] border-4 border-black bg-[var(--color-yellow)] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] lg:grid-cols-12 overflow-hidden"
                >
                    {/* Main Text */}
                    <div className="p-8 lg:col-span-8 lg:p-16 border-b-4 border-black lg:border-b-0 lg:border-r-4">
                        <div className="mb-10 inline-block rotate-2 transform rounded-full border-2 border-black bg-white px-4 py-1 font-sans text-[14px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {aboutData.label}
                        </div>
                        <h2 className="mb-10 font-sans text-[var(--text-display)] font-black leading-[0.9] tracking-tighter text-black">
                            {aboutData.heading}
                        </h2>
                        {aboutData.paragraphs.map((para, i) => (
                            <p
                                key={i}
                                className="mb-8 font-sans text-[24px] font-medium leading-[1.6] text-black"
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Aside Block */}
                    <div className="bg-white p-8 lg:col-span-4 lg:p-12">
                        {/* Availability */}
                        <div className="mb-10">
                            <h4 className="mb-3 font-sans text-[18px] font-black text-black">
                                Availability
                            </h4>
                            <div className="inline-block rounded border-2 border-black bg-[var(--color-pink)] px-4 py-2 font-sans text-[16px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                {aboutData.aside.availability}
                            </div>
                        </div>

                        {/* Stack */}
                        <div className="mb-10">
                            <h4 className="mb-3 font-sans text-[18px] font-black text-black">
                                Stack
                            </h4>
                            <div className="flex flex-col gap-3 font-sans text-[16px] font-bold text-black">
                                {aboutData.aside.stack.map((line, i) => (
                                    <div key={i} className="rounded border-2 border-black bg-[var(--color-off-white)] p-3 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{line}</div>
                                ))}
                            </div>
                        </div>

                        {/* Based In */}
                        <div>
                            <h4 className="mb-3 font-sans text-[18px] font-black text-black">
                                Base
                            </h4>
                            <p className="font-sans text-[16px] font-bold text-black">
                                {aboutData.aside.basedIn}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
