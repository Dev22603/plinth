interface MetricCalloutProps {
    value: string;
    description: string;
}

export default function MetricCallout({ value, description }: MetricCalloutProps) {
    return (
        <div className="flex items-start gap-4 rounded-xl border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="inline-block -rotate-3 transform rounded bg-pink px-3 py-1 font-sans text-[clamp(24px,3vw,36px)] font-bold leading-none text-black border-2 border-black">
                {value}
            </div>
            <div className="mt-1 font-sans text-[15px] font-medium text-black">
                {description}
            </div>
        </div>
    );
}
