"use client";

import { motion } from "motion/react";
import { heroData } from "../../lib/data";

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-off-white)] pt-20 px-8">
            {/* Decorative Neo-brutalist Shapes */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {/* Top Left Circle */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="absolute left-[5%] top-[15%] flex h-32 w-32 items-center justify-center rounded-full border-4 border-black bg-[var(--color-pink)] hidden md:flex"
                >
                    <span className="font-sans text-[48px] font-black text-black">P</span>
                </motion.div>

                {/* Top Right Square */}
                <motion.div
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 12 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="absolute right-[10%] top-[20%] flex h-24 w-24 items-center justify-center border-4 border-black bg-[var(--color-teal)] hidden md:flex"
                >
                    <span className="font-sans text-[40px] font-black text-black">L</span>
                </motion.div>

                {/* Bottom Left Triangle */}
                <motion.div
                    initial={{ scale: 0, y: 100 }}
                    animate={{ scale: 1, y: 0, rotate: -6 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                    className="absolute bottom-[20%] left-[10%] h-32 w-32 border-4 border-black bg-[var(--color-yellow)] hidden lg:block"
                ></motion.div>

                {/* Bottom Right Circle */}
                <motion.div
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: -24 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="absolute bottom-[25%] right-[10%] flex h-28 w-28 items-center justify-center rounded-full border-4 border-black bg-[var(--color-blue)] hidden md:flex"
                >
                    <span className="font-sans text-[48px] font-black text-black">H</span>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-block rounded-full border-2 border-black bg-white px-6 py-2 font-sans text-[14px] font-bold tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                    {heroData.label}
                </motion.div>

                <h1 className="mb-8 font-sans text-[var(--text-hero)] font-black leading-[0.9] tracking-tighter text-black">
                    {heroData.headline.map((line, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + i * 0.1,
                                ease: "easeOut",
                            }}
                            className="block"
                        >
                            {line}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mx-auto mb-12 max-w-2xl font-sans text-[var(--text-xl)] font-medium leading-relaxed text-black"
                >
                    {heroData.subhead}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <a
                        href={heroData.links[0].href}
                        className="w-full sm:w-auto rounded-full border-4 border-black bg-[var(--color-yellow)] px-10 py-5 font-sans text-[20px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {heroData.links[0].label}
                    </a>
                    <a
                        href={heroData.links[1].href}
                        className="w-full sm:w-auto rounded-full border-4 border-black bg-white px-10 py-5 font-sans text-[20px] font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {heroData.links[1].label}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
