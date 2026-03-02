import { footerData } from "../../lib/data";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Accent bar */}
            <div className="h-16 w-full bg-teal border-b-4 border-black"></div>

            <div className="container py-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-white/20 pb-16">
                    <div>
                        <h3 className="mb-4 font-sans text-[48px] font-black leading-none tracking-tighter">
                            {footerData.left}
                        </h3>
                        <p className="font-sans text-[20px] text-white/70 max-w-sm">
                            We build scalable software and platforms you can depend on.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="mailto:hello@plinth.agency" className="text-[24px] font-bold hover:text-pink transition-colors">hello@plinth.agency</a>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-8 font-sans text-[14px] text-white/50">
                    <span>{footerData.right}</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
