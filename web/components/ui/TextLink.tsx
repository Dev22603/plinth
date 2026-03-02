import Link from "next/link";

interface TextLinkProps {
    href: string;
    label: string;
    arrow?: "\u2192" | "\u2193";
    external?: boolean;
}

export default function TextLink({ href, label, arrow, external }: TextLinkProps) {
    const content = (
        <>
            {label} {arrow && <span>{arrow}</span>}
        </>
    );

    const className =
        "font-sans text-[16px] font-bold text-black underline decoration-2 underline-offset-[4px] decoration-[var(--color-pink)] transition-colors duration-200 hover:text-[var(--color-teal)] hover:decoration-black";

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
}
