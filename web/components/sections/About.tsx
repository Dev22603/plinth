"use client";

import { motion } from "motion/react";
import { team, serviceAreas } from "../../lib/data";

export default function About() {
    return (
        <section
            id="about"
            className="border-t-4 border-black bg-teal py-24 md:py-36"
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    className="grid grid-cols-1 rounded-[2rem] border-4 border-black bg-yellow shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] lg:grid-cols-12 overflow-hidden"
                >
                    {/* Main Text */}
                    <div className="p-8 lg:col-span-8 lg:p-16 border-b-4 border-black lg:border-b-0 lg:border-r-4">
                        <div className="mb-10 inline-block rotate-2 transform rounded-full border-2 border-black bg-white px-4 py-1 font-sans text-[14px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            About Plinth
                        </div>
                        <h2 className="mb-10 font-sans text-(--text-display) font-black leading-[0.9] tracking-tighter text-black">
                            We build it right.
                        </h2>
                        <p className="mb-8 font-sans text-[24px] font-medium leading-[1.6] text-black">
                            We are an engineering team focused on building production-ready software. We&apos;ve built e-commerce platforms, complex data ingestion pipelines, and cross-platform mobile apps.
                        </p>
                        <p className="mb-8 font-sans text-[24px] font-medium leading-[1.6] text-black">
                            We care deeply about architecture. We focus on API design, data modeling, and security because those are the foundations that are hardest to fix later.
                        </p>

                        {/* Team — only renders when team array has entries */}
                        {team.length > 0 && (
                            <div className="mt-12">
                                <h3 className="mb-6 font-sans text-[20px] font-black text-black">The team</h3>
                                <div className="flex flex-wrap gap-4">
                                    {team.map((member: { name: string; role: string; avatar?: string }) => (
                                        <div key={member.name} className="flex items-center gap-3 rounded-xl border-2 border-black bg-white px-4 py-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {member.avatar && (
                                                <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full border-2 border-black object-cover" />
                                            )}
                                            <div>
                                                <p className="font-sans text-[16px] font-black text-black">{member.name}</p>
                                                <p className="font-sans text-[13px] font-medium text-black/60">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Aside Block */}
                    <div className="bg-white p-8 lg:col-span-4 lg:p-12 flex flex-col gap-10">
                        {/* Availability */}
                        <div>
                            <h4 className="mb-3 font-sans text-[18px] font-black text-black">Availability</h4>
                            <div className="inline-block rounded border-2 border-black bg-pink px-4 py-2 font-sans text-[16px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                Taking new projects
                            </div>
                        </div>

                        {/* What we build */}
                        <div>
                            <h4 className="mb-3 font-sans text-[18px] font-black text-black">What we build</h4>
                            <p className="font-sans text-[15px] font-medium leading-relaxed text-black/80">
                                We can build anything — mobile apps, web platforms, backend systems, data pipelines. We are not limited by stack.
                            </p>
                        </div>

                        {/* Serving — driven by config */}
                        {serviceAreas.length > 0 && (
                            <div>
                                <h4 className="mb-3 font-sans text-[18px] font-black text-black">Serving</h4>
                                <div className="flex flex-col gap-2">
                                    {serviceAreas.map((area) => (
                                        <div key={area.city} className="flex items-center gap-2 font-sans text-[15px] font-bold text-black">
                                            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-black" />
                                            {area.city}, {area.country}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
