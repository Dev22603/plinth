"use client";

import { motion } from "motion/react";
import { caseStudies } from "../../lib/data";

export default function Work() {
    return (
        <section id="work" className="border-t-4 border-black bg-white py-24 md:py-36">
            <div className="container">
                <h2 className="mb-20 font-sans text-(--text-display) font-black tracking-tighter text-black md:text-center">
                    Projects we've built.
                </h2>

                <div className="mx-auto max-w-5xl space-y-16">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                            className="group overflow-hidden rounded-[2rem] border-4 border-black bg-off-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                {/* Meta Block */}
                                <div className="border-b-4 border-black bg-yellow p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4">
                                    <div className="mb-6 inline-block -rotate-2 transform rounded-full border-2 border-black bg-white px-4 py-1 font-sans text-[14px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {study.label}
                                    </div>

                                    <a
                                        href={study.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block hover:opacity-80 transition-opacity"
                                    >
                                        <h3 className="mb-4 font-sans text-[36px] font-black leading-none text-black">
                                            {study.project}
                                        </h3>
                                    </a>

                                    <p className="mb-10 font-sans text-[18px] font-bold text-black/80">
                                        {study.descriptor}
                                    </p>

                                    <div className="flex flex-col gap-4">
                                        {study.metrics.map((metric, i) => (
                                            <div key={i} className="flex items-center gap-4 rounded-xl border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                                <div className="flex bg-pink px-3 py-1 font-sans text-[24px] font-black text-black border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3">
                                                    {metric.value}
                                                </div>
                                                <span className="font-sans text-[15px] font-bold text-black leading-tight">
                                                    {metric.description}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="p-8 lg:col-span-7 lg:p-12 bg-white">
                                    {study.prose.map((paragraph, i) => (
                                        <p
                                            key={i}
                                            className="mb-6 font-sans text-[18px] font-medium leading-[1.7] text-black"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                    <div className="mt-12 flex justify-end">
                                        <a
                                            href={study.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border-4 border-black bg-teal px-8 py-4 font-sans text-[16px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
                                        >
                                            View GitHub Repository
                                        </a>
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
