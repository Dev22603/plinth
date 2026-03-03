"use client";

import { useRef, useEffect, useState } from "react";
import { services } from "../../lib/data";

const ACCENT_COLORS = ["#FF90E8", "#F6D800", "#23A094"];
const ACCENT_NAMES = ["pink", "yellow", "teal"];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            style={{
                background: "#000",
                borderTop: "4px solid #000",
                padding: "clamp(64px, 10vw, 120px) 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background text watermark */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "clamp(120px, 20vw, 240px)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    letterSpacing: "-0.06em",
                    color: "rgba(255,255,255,0.03)",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                SERVICES
            </div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        marginBottom: "clamp(48px, 6vw, 80px)",
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
                            What we do
                        </p>
                        <h2 style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-display)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.95,
                            color: "#fff",
                        }}>
                            Built for<br />
                            <span style={{ color: "#FF90E8" }}>every layer.</span>
                        </h2>
                    </div>
                    <p style={{
                        maxWidth: "360px",
                        fontSize: "16px",
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 400,
                    }}>
                        We work end-to-end across the full stack — from polished user-facing products to the systems that power them behind the scenes.
                    </p>
                </div>

                {/* Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            style={{
                                background: ACCENT_COLORS[index % ACCENT_COLORS.length],
                                borderRadius: "24px",
                                border: "3px solid #000",
                                padding: "clamp(24px, 4vw, 40px)",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "default",

                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(48px)",
                                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.12}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.12}s, box-shadow 250ms ease, translate 250ms ease`,

                                boxShadow: "8px 8px 0px #000",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "12px 16px 0px #000";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(48px)";
                                e.currentTarget.style.boxShadow = "8px 8px 0px #000";
                            }}
                        >
                            {/* Large number */}
                            <div style={{
                                position: "absolute",
                                top: "-8px",
                                right: "24px",
                                fontFamily: "var(--font-display)",
                                fontSize: "120px",
                                fontWeight: 900,
                                letterSpacing: "-0.06em",
                                color: "rgba(0,0,0,0.08)",
                                lineHeight: 1,
                                userSelect: "none",
                            }}>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <span style={{
                                    display: "inline-block",
                                    borderRadius: "9999px",
                                    border: "2px solid rgba(0,0,0,0.3)",
                                    padding: "6px 16px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: "#000",
                                    marginBottom: "24px",
                                    background: "rgba(255,255,255,0.4)",
                                }}>
                                    {service.label}
                                </span>

                                <h3 style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(26px, 3vw, 34px)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.1,
                                    color: "#000",
                                    marginBottom: "20px",
                                }}>
                                    {service.heading}
                                </h3>

                                <p style={{
                                    fontSize: "16px",
                                    lineHeight: 1.7,
                                    color: "rgba(0,0,0,0.75)",
                                    fontWeight: 400,
                                }}>
                                    {service.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
