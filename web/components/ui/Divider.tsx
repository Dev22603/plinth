interface DividerProps {
    strong?: boolean;
}

export default function Divider({ strong = false }: DividerProps) {
    return (
        <hr
            className={`m-0 border-0 border-t border-solid border-black ${strong ? "border-t-[4px]" : "border-t-[2px]"
                }`}
        />
    );
}
