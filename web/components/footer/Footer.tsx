"use client";

import { footerData, socialLinks } from "../../lib/data";

export default function Footer() {
    return (
        <footer style={{
            background: "#000",
            borderTop: "4px solid #FF90E8",
            color: "#fff",
        }}>
            <div className="container" style={{ padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 80px)" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "48px",
                }}>
                    {/* Top row */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "40px",
                        paddingBottom: "48px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}>
                        {/* Brand */}
                        <div>
                            <div style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(40px, 5vw, 64px)",
                                fontWeight: 900,
                                letterSpacing: "-0.05em",
                                lineHeight: 1,
                                color: "#fff",
                                marginBottom: "16px",
                            }}>
                                {footerData.logo.toLowerCase()}
                            </div>
                            <p style={{
                                fontSize: "16px",
                                lineHeight: 1.65,
                                color: "rgba(255,255,255,0.5)",
                                maxWidth: "320px",
                            }}>
                                {footerData.tagline}
                            </p>
                        </div>

                        {/* Contact + links */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-end" }}>
                            <a
                                href={`mailto:${footerData.email}`}
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(18px, 2.5vw, 26px)",
                                    fontWeight: 700,
                                    color: "#FF90E8",
                                    textDecoration: "none",
                                    transition: "color 150ms ease",
                                    letterSpacing: "-0.02em",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFB3ED")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#FF90E8")}
                            >
                                {footerData.email}
                            </a>

                            <div style={{ display: "flex", gap: "24px" }}>
                                {socialLinks.map((s: { platform: string; href: string; label: string }) => (
                                    <a
                                        key={s.platform}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "10px 20px",
                                            borderRadius: "9999px",
                                            border: "2px solid rgba(255,255,255,0.2)",
                                            color: "#fff",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            transition: "border-color 150ms ease, background 150ms ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#FF90E8";
                                            e.currentTarget.style.color = "#FF90E8";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                            e.currentTarget.style.color = "#fff";
                                        }}
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.35)",
                    }}>
                        <span>{footerData.copyright}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "9999px",
                                background: "#23A094",
                                display: "inline-block",
                                boxShadow: "0 0 6px #23A094",
                            }} />
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
