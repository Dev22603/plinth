"use client";

import { motion } from "motion/react";
import { services } from "../../lib/data";

const bgColors = ["bg-[var(--color-pink)]", "bg-[var(--color-yellow)]", "bg-[var(--color-teal)]"];

export default function Services() {
    return (
        <section id="services" className="border-t-4 border-black bg-[var(--color-off-white)] py-24 md:py-36">
            <div className="container">
                <div className="mb-20 text-center">
                    <h2 className="font-sans text-[var(--text-display)] font-black tracking-tighter text-black">
                        What we do.
                    </h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 32 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.4 },
                                },
                            }}
                            className={`flex flex-col justify-between rounded-3xl border-4 border-black ${bgColors[index % bgColors.length]} p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
                        >
                            <div>
                                <div className="mb-6 inline-block rounded-full border-2 border-black bg-white px-4 py-1 font-sans text-[14px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    {service.label}
                                </div>
                                <h3 className="mb-4 font-sans text-[32px] font-black leading-tight text-black">
                                    {service.heading}
                                </h3>
                                <p className="mb-10 font-sans text-[18px] font-medium leading-relaxed text-black/90">
                                    {service.body}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="inline-block rounded-full border-2 border-black bg-white px-3 py-1 font-sans text-[12px] font-bold text-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
