interface MonoTagProps {
    label: string;
}

export default function MonoTag({ label }: MonoTagProps) {
    return (
        <span className="inline-block rounded border border-solid border-black bg-yellow-bright px-[8px] py-[4px] font-sans text-[12px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {label}
        </span>
    );
}
