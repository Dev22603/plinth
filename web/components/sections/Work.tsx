"use client";

import { motion } from "motion/react";
import { caseStudies } from "../../lib/data";

export default function Work() {
    return (
        <section id="work" className="border-t-4 border-black bg-white py-24 md:py-36">
            <div className="container">
                <h2 className="mb-20 font-sans text-(--text-display) font-black tracking-tighter text-black md:text-center">
                    Projects we&apos;ve built.
                </h2>

                <div className="mx-auto max-w-5xl space-y-16">
                    {caseStudies.map((study) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                            className="group overflow-hidden rounded-4xl border-4 border-black bg-off-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
                        >
                            {/* Header bar */}
                            <div className="flex items-center justify-between border-b-4 border-black bg-yellow px-8 py-6">
                                <div>
                                    <div className="mb-2 inline-block -rotate-1 rounded-full border-2 border-black bg-white px-4 py-1 font-sans text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {study.label}
                                    </div>
                                    <h3 className="font-sans text-[28px] font-black leading-none text-black">
                                        {study.project}
                                    </h3>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                {/* Description */}
                                <div className="border-b-4 border-black bg-white p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4 lg:p-12 flex flex-col justify-between">
                                    <p className="font-sans text-[18px] font-medium leading-[1.7] text-black">
                                        {study.description}
                                    </p>

                                    {/* Demo links */}
                                    <div className="mt-8 flex flex-col gap-3">
                                        {study.links.live && (
                                            <a
                                                href={study.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border-4 border-black bg-teal px-6 py-3 font-sans text-[15px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
                                            >
                                                <span>View Live Product</span>
                                                <span aria-hidden>→</span>
                                            </a>
                                        )}
                                        {study.links.demo && (
                                            <a
                                                href={study.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border-4 border-black bg-pink px-6 py-3 font-sans text-[15px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
                                            >
                                                <span>Watch Demo</span>
                                                <span aria-hidden>▶</span>
                                            </a>
                                        )}
                                        {!study.links.live && !study.links.demo && (
                                            <span className="inline-block rounded-full border-2 border-black/20 px-6 py-3 font-sans text-[14px] font-bold text-black/40">
                                                Demo coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Prose */}
                                <div className="p-8 lg:col-span-7 lg:p-12">
                                    {study.prose.map((paragraph, i) => (
                                        <p
                                            key={i}
                                            className="mb-6 font-sans text-[18px] font-medium leading-[1.7] text-black last:mb-0"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
