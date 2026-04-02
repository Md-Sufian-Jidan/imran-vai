export default function SectionHeading({ label, title, description, align = "center" }: { label?: string, title?: string, description?: string, align?: "center" | "left" }) {
    return (
        <div className={`md:mb-14 mb-8 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {label && <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">{label}</span>}
            <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
            {description && <p className="text-muted-foreground mt-4 text-base md:text-xl">{description}</p>}
        </div>
    );
}