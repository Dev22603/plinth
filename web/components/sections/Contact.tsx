"use client";

import { useRef, useEffect, useState } from "react";
import { contactData } from "../../lib/data";

export default function Contact() {
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
            id="contact"
            ref={sectionRef}
            style={{
                background: "#23A094",
                borderTop: "4px solid #000",
                padding: "clamp(64px, 10vw, 120px) 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* background decoration */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "clamp(100px, 18vw, 220px)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    letterSpacing: "-0.06em",
                    color: "rgba(255,255,255,0.05)",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                HELLO
            </div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "clamp(40px, 6vw, 80px)",
                    alignItems: "center",
                }}>
                    {/* Left text */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(-40px)",
                            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    >
                        <span style={{
                            display: "inline-block",
                            borderRadius: "9999px",
                            border: "2px solid rgba(255,255,255,0.3)",
                            padding: "6px 18px",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#fff",
                            marginBottom: "32px",
                            fontFamily: "var(--font-display)",
                        }}>
                            Let&apos;s talk
                        </span>

                        <h2 style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-display)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.95,
                            color: "#fff",
                            marginBottom: "32px",
                        }}>
                            Let&apos;s work<br />
                            <span style={{ color: "#F6D800" }}>together.</span>
                        </h2>

                        <p style={{
                            fontSize: "clamp(16px, 1.8vw, 20px)",
                            lineHeight: 1.65,
                            color: "rgba(255,255,255,0.8)",
                            fontWeight: 400,
                            maxWidth: "440px",
                        }}>
                            For project inquiries, collaborations, or just a conversation about your platform architecture.
                        </p>
                    </div>

                    {/* Right CTA card */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(40px)",
                            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
                        }}
                    >
                        <div style={{
                            background: "#fff",
                            borderRadius: "24px",
                            border: "3px solid #000",
                            padding: "clamp(32px, 5vw, 56px)",
                            boxShadow: "8px 8px 0px #000",
                        }}>
                            <div style={{ marginBottom: "32px" }}>
                                {/* Floating coin decoration */}
                                <div
                                    className="animate-float"
                                    style={{
                                        width: "72px",
                                        height: "72px",
                                        borderRadius: "9999px",
                                        background: "#F6D800",
                                        border: "3px solid #000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "32px",
                                        fontWeight: 900,
                                        fontFamily: "var(--font-display)",
                                        marginBottom: "24px",
                                        "--r": "-8deg",
                                    } as React.CSSProperties}
                                >
                                    ✉
                                </div>

                                <h3 style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "26px",
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    color: "#000",
                                    marginBottom: "12px",
                                }}>
                                    Start a conversation
                                </h3>
                                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#8E8E8E" }}>
                                    Fill out our brief form and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            <a
                                href={contactData.formUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-yellow"
                                style={{
                                    width: "100%",
                                    fontSize: "17px",
                                    padding: "18px 32px",
                                    marginBottom: "16px",
                                    textDecoration: "none",
                                    justifyContent: "center",
                                }}
                            >
                                Fill out our contact form →
                            </a>

                            <p style={{
                                textAlign: "center",
                                fontSize: "13px",
                                color: "#8E8E8E",
                                fontWeight: 500,
                            }}>
                                {contactData.note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
