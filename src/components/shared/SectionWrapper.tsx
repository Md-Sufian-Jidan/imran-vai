"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    containerClassName?: string; // For the inner constrained container
    variant?: "default" | "narrow" | "full";
    yOffset?: number; // Custom entry animation distance
}

export default function SectionWrapper({
    children,
    className,
    containerClassName,
    id,
    variant = "default",
    yOffset = 40,
    ...props // Allows passing any other motion props like onViewportEnter
}: SectionWrapperProps) {

    const maxWidths = {
        default: "container",
        narrow: "max-w-5xl",
        full: "max-w-full",
    };

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={cn("py-12 md:py-24 px-6", className)}
            {...props}
        >
            <div className={cn("mx-auto w-full", maxWidths[variant], containerClassName)}>
                {children}
            </div>
        </motion.section>
    );
}