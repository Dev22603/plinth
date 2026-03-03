"use client";

import { useRef, useEffect, useState } from "react";

interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role: string;
    initials: string;
}

interface TestimonialsProps {
    items: Testimonial[];
}

// Avatar background colors — cycle through these
const AVATAR_COLORS = ["#FF90E8", "#F6D800", "#23A094", "#7BA4DB"];

// Slight vertical offsets for an organic, non-uniform grid feel
const CARD_OFFSETS = ["0px", "32px", "16px"];

export default function Testimonials({ items }: TestimonialsProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    if (!items || items.length === 0) return null;

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            style={{
                background: "#fff",
                borderTop: "4px solid #000",
                padding: "clamp(64px, 10vw, 120px) 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle background decoration */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "-80px",
                    right: "-80px",
                    width: "320px",
                    height: "320px",
                    borderRadius: "9999px",
                    background: "#FF90E8",
                    opacity: 0.06,
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: "-60px",
                    left: "-60px",
                    width: "220px",
                    height: "220px",
                    borderRadius: "9999px",
                    background: "#F6D800",
                    opacity: 0.1,
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                        marginBottom: "clamp(48px, 6vw, 72px)",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                    }}
                >
                    <div>
                        <p style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#FF90E8",
                            marginBottom: "16px",
                        }}>
                            What clients say
                        </p>
                        <h2 style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-display)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.95,
                            color: "#000",
                        }}>
                            Don&apos;t take<br />
                            <span style={{ color: "#FF90E8" }}>our word for it.</span>
                        </h2>
                    </div>

                    {/* Decorative floating coin */}
                    <div
                        className="animate-float hidden md:flex"
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "9999px",
                            border: "4px solid #000",
                            background: "#FF90E8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "32px",
                            fontWeight: 900,
                            fontFamily: "var(--font-display)",
                            "--r": "-8deg",
                        } as React.CSSProperties}
                        aria-hidden="true"
                    >
                        ★
                    </div>
                </div>

                {/* Testimonial cards — offset masonry grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                        alignItems: "start",
                    }}
                >
                    {items.map((t, i) => (
                        <div
                            key={t.id}
                            style={{
                                background: "#fff",
                                borderRadius: "24px",
                                border: "2px solid #E5E5E5",
                                padding: "clamp(24px, 3.5vw, 40px)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                marginTop: CARD_OFFSETS[i % CARD_OFFSETS.length],
                                position: "relative",

                                /* scroll-reveal */
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(48px)",
                                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, box-shadow 250ms ease, translate 250ms ease`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
                                e.currentTarget.style.borderColor = "#FF90E8";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = visible ? `translateY(0)` : "translateY(48px)";
                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                                e.currentTarget.style.borderColor = "#E5E5E5";
                            }}
                        >
                            {/* Big pink opening quote */}
                            <div
                                aria-hidden="true"
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "80px",
                                    lineHeight: 0.8,
                                    color: "#FF90E8",
                                    marginBottom: "8px",
                                    userSelect: "none",
                                }}
                            >
                                &ldquo;
                            </div>

                            {/* Quote text */}
                            <p style={{
                                fontSize: "clamp(15px, 1.5vw, 17px)",
                                lineHeight: 1.75,
                                color: "#000",
                                fontWeight: 400,
                                marginBottom: "32px",
                            }}>
                                {t.quote}
                            </p>

                            {/* Divider */}
                            <div style={{
                                height: "1px",
                                background: "#E5E5E5",
                                marginBottom: "20px",
                            }} />

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                {/* Avatar with initials */}
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "9999px",
                                    background: AVATAR_COLORS[i % AVATAR_COLORS.length],
                                    border: "2px solid #000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "var(--font-display)",
                                    fontSize: "16px",
                                    fontWeight: 800,
                                    color: i === 1 ? "#000" : "#fff",
                                    flexShrink: 0,
                                }}>
                                    {t.initials}
                                </div>

                                <div>
                                    <p style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "15px",
                                        fontWeight: 700,
                                        color: "#000",
                                        letterSpacing: "-0.01em",
                                    }}>
                                        {t.name}
                                    </p>
                                    <p style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                        fontWeight: 400,
                                        marginTop: "2px",
                                    }}>
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note — placeholder context */}
                <p
                    style={{
                        marginTop: "48px",
                        textAlign: "center",
                        fontSize: "13px",
                        color: "#8E8E8E",
                        fontWeight: 400,
                        opacity: visible ? 1 : 0,
                        transition: "opacity 0.6s ease 0.5s",
                    }}
                >
                    Working with clients across Canada and beyond.
                </p>
            </div>
        </section>
    );
}
