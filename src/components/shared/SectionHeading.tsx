export default function SectionHeading(
    { label, title, description, align = "center" }:
        { label?: string, title?: string, description?: string, align?: "center" | "left" }
) {
    return (
        <div className={`md:mb-14 mb-8 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>

            {/* Label - Primary Teal Accent */}
            {label && (
                <span className="text-primary-teal text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4 block animate-fade-in">
                    {label}
                </span>
            )}

            {/* Title - Clean Black Typography */}
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight text-black">
                {title}
            </h2>

            {/* Description - Muted Gray #999999 */}
            {description && (
                <p className="mt-5 text-base md:text-lg leading-relaxed text-[#999999] font-body">
                    {description}
                </p>
            )}

            {/* Subtle Underline Accent - Primary Teal */}
            {align === "left" && (
                <div className="h-1 w-20 bg-primary-teal mt-6 rounded-full opacity-80" />
            )}

            {/* Optional: Subtle centered accent line if you want to mirror the original style */}
            {align === "center" && (
                <div className="h-[2px] w-12 bg-primary-teal/20 mt-6 mx-auto rounded-full" />
            )}
        </div>
    );
}