"use client";

import { useRef, useEffect, useState } from "react";
import { caseStudies } from "../../lib/data";

export default function Work() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="work"
            ref={sectionRef}
            style={{
                background: "var(--off-white)",
                padding: "clamp(64px, 10vw, 120px) 0",
                borderTop: "4px solid #000",
            }}
        >
            <div className="container">
                {/* Header */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        marginBottom: "clamp(48px, 6vw, 80px)",
                    }}
                >
                    <p style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--teal)",
                        marginBottom: "16px",
                    }}>
                        Selected projects
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-display)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 0.95,
                        color: "#000",
                    }}>
                        Things we&apos;ve<br />
                        <span style={{ color: "var(--teal)" }}>actually built.</span>
                    </h2>
                </div>

                {/* Project cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            style={{
                                background: "#fff",
                                borderRadius: "24px",
                                border: "3px solid #000",
                                overflow: "hidden",
                                boxShadow: "8px 8px 0px #000",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(56px)",
                                transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s`,
                            }}
                        >
                            {/* Header bar */}
                            <div style={{
                                background: index % 2 === 0 ? "#F6D800" : "#FF90E8",
                                borderBottom: "3px solid #000",
                                padding: "clamp(20px, 3vw, 32px) clamp(24px, 4vw, 48px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "16px",
                            }}>
                                <div>
                                    <span style={{
                                        display: "inline-block",
                                        borderRadius: "9999px",
                                        border: "2px solid #000",
                                        background: "#fff",
                                        padding: "4px 14px",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                        color: "#000",
                                        marginBottom: "12px",
                                        transform: "rotate(-1deg)",
                                    }}>
                                        {study.label}
                                    </span>
                                    <h3 style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(22px, 3vw, 32px)",
                                        fontWeight: 900,
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1.1,
                                        color: "#000",
                                    }}>
                                        {study.project}
                                    </h3>
                                </div>

                                {/* Index number */}
                                <span style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "64px",
                                    fontWeight: 900,
                                    letterSpacing: "-0.06em",
                                    color: "rgba(0,0,0,0.15)",
                                    lineHeight: 1,
                                }}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Body */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
                            }}
                                className="work-body"
                            >
                                {/* Left — description + links */}
                                <div style={{
                                    padding: "clamp(24px, 4vw, 48px)",
                                    borderRight: "3px solid #E5E5E5",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    gap: "32px",
                                }}>
                                    <p style={{
                                        fontSize: "clamp(15px, 1.5vw, 18px)",
                                        lineHeight: 1.7,
                                        color: "#000",
                                        fontWeight: 400,
                                    }}>
                                        {study.description}
                                    </p>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        {study.links.live && (
                                            <a
                                                href={study.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-teal"
                                                style={{ textDecoration: "none", fontSize: "14px" }}
                                            >
                                                View live product →
                                            </a>
                                        )}
                                        {study.links.demo && (
                                            <a
                                                href={study.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn"
                                                style={{
                                                    background: "#FF90E8",
                                                    color: "#000",
                                                    borderColor: "#000",
                                                    textDecoration: "none",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                ▶ Watch demo
                                            </a>
                                        )}
                                        {!study.links.live && !study.links.demo && (
                                            <span style={{
                                                display: "inline-block",
                                                borderRadius: "9999px",
                                                border: "2px dashed #E5E5E5",
                                                padding: "12px 24px",
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                color: "#8E8E8E",
                                                textAlign: "center",
                                            }}>
                                                Demo coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Right — prose */}
                                <div style={{
                                    padding: "clamp(24px, 4vw, 48px)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                }}>
                                    {study.prose.map((para: string, i: number) => (
                                        <p
                                            key={i}
                                            style={{
                                                fontSize: "clamp(15px, 1.5vw, 17px)",
                                                lineHeight: 1.75,
                                                color: i === 0 ? "#000" : "#555",
                                                fontWeight: i === 0 ? 500 : 400,
                                            }}
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .work-body {
                        grid-template-columns: 1fr !important;
                    }
                    .work-body > div:first-child {
                        border-right: none !important;
                        border-bottom: 3px solid #E5E5E5;
                    }
                }
            `}</style>
        </section>
    );
}
