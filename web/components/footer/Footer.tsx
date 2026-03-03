import { footerData, socialLinks } from "../../lib/data";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-base)] text-[var(--color-text)] border-t border-[var(--color-border)]">

            {/* Tech Accent bar */}
            <div className="flex h-4 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                <div className="w-1/3 bg-[var(--color-accent)] animate-pulse opacity-50"></div>
                <div className="w-px bg-[var(--color-border-light)] mx-8"></div>
                <div className="w-16 bg-[var(--color-text-muted)] opacity-20"></div>
            </div>

            <div className="container py-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--color-border-light)] pb-16">
                    <div>
                        <h3 className="mb-4 font-sans text-5xl md:text-6xl font-black leading-none tracking-tighter uppercase text-[var(--color-text)]">
                            {footerData.logo}
                            <span className="text-[var(--color-accent)]">.</span>
                        </h3>
                        <p className="font-mono text-[16px] text-[var(--color-text-muted)] max-w-sm border-l-2 border-[var(--color-border-light)] pl-4">
                            {footerData.tagline}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="tech-border inline-block bg-[var(--color-surface)] px-2 py-1 mb-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                                Comms Channel
                            </span>
                        </div>
                        <a
                            href={`mailto:${footerData.email}`}
                            className="font-mono text-xl md:text-2xl font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors underline decoration-[var(--color-border-light)] underline-offset-4"
                        >
                            {footerData.email}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-6 font-mono text-[12px] text-[var(--color-text-muted)] uppercase tracking-widest">
                    <span>{footerData.copyright}</span>
                    <div className="flex items-center gap-6">
                        {socialLinks.map((s) => (
                            <a
                                key={s.platform}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[var(--color-text)] transition-colors flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-[var(--color-border-light)]"></span>
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
