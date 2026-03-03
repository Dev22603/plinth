"use client";

import { useRef, useEffect, useState } from "react";
import { team, serviceAreas } from "../../lib/data";

export default function About() {
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

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                background: "#F6D800",
                borderTop: "4px solid #000",
                padding: "clamp(64px, 10vw, 120px) 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative spinning ring */}
            <div
                aria-hidden="true"
                className="animate-spin-slow hidden lg:block"
                style={{
                    position: "absolute",
                    bottom: "-120px",
                    right: "-120px",
                    width: "360px",
                    height: "360px",
                    borderRadius: "9999px",
                    border: "3px dashed rgba(0,0,0,0.15)",
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                className="hidden lg:block"
                style={{
                    position: "absolute",
                    top: "-60px",
                    left: "-60px",
                    width: "240px",
                    height: "240px",
                    borderRadius: "9999px",
                    border: "3px dashed rgba(0,0,0,0.1)",
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Label */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        marginBottom: "clamp(40px, 5vw, 64px)",
                    }}
                >
                    <span style={{
                        display: "inline-block",
                        borderRadius: "9999px",
                        border: "2px solid #000",
                        background: "#000",
                        color: "#F6D800",
                        padding: "8px 20px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-display)",
                        transform: "rotate(-1deg)",
                    }}>
                        ✦ About Plinth
                    </span>
                </div>

                {/* Main grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "32px",
                        alignItems: "start",
                    }}
                >
                    {/* Left: headline + body */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(40px)",
                            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
                            gridColumn: "span 2",
                        }}
                        className="about-main"
                    >
                        <h2 style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-display)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.95,
                            color: "#000",
                            marginBottom: "40px",
                        }}>
                            We build it<br />right.
                        </h2>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "clamp(24px, 4vw, 48px)",
                        }}>
                            <p style={{
                                fontSize: "clamp(17px, 1.8vw, 20px)",
                                lineHeight: 1.7,
                                color: "#000",
                                fontWeight: 400,
                            }}>
                                We&apos;re an engineering team focused on building production-ready software. We&apos;ve built e-commerce platforms, complex data ingestion pipelines, and cross-platform mobile apps.
                            </p>
                            <p style={{
                                fontSize: "clamp(17px, 1.8vw, 20px)",
                                lineHeight: 1.7,
                                color: "rgba(0,0,0,0.7)",
                                fontWeight: 400,
                            }}>
                                We care deeply about architecture — API design, data modeling, and security — because those are the foundations that are hardest to fix later.
                            </p>
                        </div>
                    </div>

                    {/* Stat cards row */}
                    {[
                        { value: "2+", label: "Years building", accent: "#000" },
                        { value: "100%", label: "Remote team", accent: "#23A094" },
                        { value: "∞", label: "No stack limits", accent: "#FF90E8" },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            style={{
                                background: stat.accent,
                                borderRadius: "20px",
                                border: "3px solid #000",
                                padding: "clamp(24px, 3vw, 36px)",
                                boxShadow: "4px 4px 0px #000",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(48px)",
                                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s`,
                            }}
                        >
                            <div style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(40px, 5vw, 60px)",
                                fontWeight: 900,
                                letterSpacing: "-0.04em",
                                lineHeight: 1,
                                color: stat.accent === "#000" ? "#F6D800" : "#fff",
                                marginBottom: "8px",
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: stat.accent === "#000" ? "rgba(246,216,0,0.7)" : "rgba(255,255,255,0.7)",
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}

                    {/* Availability + service areas card */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "20px",
                            border: "3px solid #000",
                            padding: "clamp(24px, 3vw, 36px)",
                            boxShadow: "4px 4px 0px #000",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(48px)",
                            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s",
                        }}
                    >
                        <div style={{ marginBottom: "24px" }}>
                            <p style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "#8E8E8E",
                                marginBottom: "12px",
                            }}>Availability</p>
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                borderRadius: "9999px",
                                background: "#FF90E8",
                                border: "2px solid #000",
                                padding: "8px 18px",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#000",
                            }}>
                                <span style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "9999px",
                                    background: "#23A094",
                                    boxShadow: "0 0 8px #23A094",
                                    animation: "pulse-glow 2s ease-in-out infinite",
                                }} />
                                Taking new projects
                            </div>
                        </div>

                        {serviceAreas.length > 0 && (
                            <div>
                                <p style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#8E8E8E",
                                    marginBottom: "12px",
                                }}>Serving</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {serviceAreas.map((area: { city: string; country: string }) => (
                                        <div
                                            key={area.city}
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                color: "#000",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <span style={{
                                                width: "6px",
                                                height: "6px",
                                                borderRadius: "9999px",
                                                background: "#23A094",
                                                flexShrink: 0,
                                            }} />
                                            {area.city}, {area.country}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Team — conditional */}
                    {team.length > 0 && (
                        <div style={{
                            gridColumn: "1 / -1",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(32px)",
                            transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
                        }}>
                            <h3 style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "20px",
                                fontWeight: 800,
                                color: "#000",
                                marginBottom: "24px",
                                letterSpacing: "-0.02em",
                            }}>The team</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                                {team.map((m: { name: string; role: string; avatar?: string }) => (
                                    <div
                                        key={m.name}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "16px",
                                            border: "2px solid #000",
                                            padding: "12px 20px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            boxShadow: "2px 2px 0px #000",
                                        }}
                                    >
                                        {m.avatar ? (
                                            <img src={m.avatar} alt={m.name} style={{ width: "40px", height: "40px", borderRadius: "9999px", border: "2px solid #000", objectFit: "cover" }} />
                                        ) : (
                                            <div style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "9999px",
                                                background: "#FF90E8",
                                                border: "2px solid #000",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontFamily: "var(--font-display)",
                                                fontSize: "18px",
                                                fontWeight: 900,
                                                color: "#000",
                                            }}>
                                                {m.name[0]}
                                            </div>
                                        )}
                                        <div>
                                            <p style={{ fontSize: "15px", fontWeight: 700, color: "#000" }}>{m.name}</p>
                                            <p style={{ fontSize: "13px", color: "#8E8E8E" }}>{m.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .about-main {
                        grid-column: span 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}
