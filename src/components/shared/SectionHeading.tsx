export default function SectionHeading(
    { label, title, description, align = "center" }:
        { label?: string, title?: string, description?: string, align?: "center" | "left" }
) {
    return (
        <div className={`md:mb-14 mb-8 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
            {/* Label - Hardcoded Emerald #10b981 */}
            {label && (
                <span className="text-[#10b981] text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4 block animate-fade-in">
                    {label}
                </span>
            )}

            {/* Title - Hardcoded Emerald White #ecfdf5 with a subtle gradient */}
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight text-[#ecfdf5] bg-clip-text">
                {title}
            </h2>

            {/* Description - Hardcoded Emerald Tinted Grey #ecfdf5/60 */}
            {description && (
                <p className="mt-5 text-base md:text-lg leading-relaxed text-[#ecfdf5]/60 font-body">
                    {description}
                </p>
            )}

            {/* Optional: Subtle Underline Accent for Left Aligned Headings */}
            {align === "left" && (
                <div className="h-1 w-20 bg-[#10b981] mt-6 rounded-full opacity-80" />
            )}
        </div>
    );
}