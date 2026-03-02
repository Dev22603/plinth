interface SectionLabelProps {
    number?: string;
    label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
    return (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-solid border-black bg-white px-4 py-1 font-sans text-[14px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {label}
        </div>
    );
}
