"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeSrc: string | StaticImageData;
    afterSrc: string | StaticImageData;
    beforeAlt?: string;
    afterAlt?: string;
    initialPosition?: number;
    className?: string;
}

export const BeforeAfterSlider = ({
    beforeSrc,
    afterSrc,
    beforeAlt = "Before editing",
    afterAlt = "After editing",
    initialPosition = 45,
    className = "",
}: BeforeAfterSliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const getPositionFromEvent = useCallback(
        (clientX: number) => {
            const el = containerRef.current;
            if (!el) return;
            const { left, width } = el.getBoundingClientRect();
            const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
            setPosition(pct);
        },
        []
    );

    // Mouse events
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        getPositionFromEvent(e.clientX);
    };
    const onMouseMove = useCallback(
        (e: MouseEvent) => { if (isDragging) getPositionFromEvent(e.clientX); },
        [isDragging, getPositionFromEvent]
    );
    const onMouseUp = useCallback(() => setIsDragging(false), []);

    // Touch events
    const onTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        getPositionFromEvent(e.touches[0].clientX);
    };
    const onTouchMove = useCallback(
        (e: TouchEvent) => { if (isDragging) getPositionFromEvent(e.touches[0].clientX); },
        [isDragging, getPositionFromEvent]
    );
    const onTouchEnd = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onTouchEnd);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-full h-full select-none overflow-hidden rounded-xl border border-border bg-white shadow-sm ${className}`}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
            {/* ── AFTER image (full, beneath) ── */}
            <div className="absolute inset-0">
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" priority />
                {/* "After" label - Minimalist Black/White */}
                <div className="absolute bottom-4 right-4 z-10">
                    <span className="
                        px-3 py-1 rounded-xl text-xs font-black uppercase tracking-[0.2em]
                        bg-primary-teal text-white border border-black/10
                        backdrop-blur-md shadow-sm
                    ">
                        After
                    </span>
                </div>
            </div>

            {/* ── BEFORE image (clipped to left side) ── */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
            >
                <Image
                    src={beforeSrc}
                    alt={beforeAlt}
                    className="object-cover h-full"
                    style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
                    priority
                />
                {/* "Before" label - Subdued Gray #999999 */}
                <div className="absolute bottom-4 left-4 z-10">
                    <span className="
                        px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-[0.2em]
                        bg-white text-black border border-white/10
                        backdrop-blur-md
                    ">
                        Before
                    </span>
                </div>
            </div>

            {/* ── Divider line - Primary Teal ── */}
            <div
                className="absolute inset-y-0 z-20 w-px bg-primary-teal"
                style={{ left: `${position}%` }}
            />

            {/* ── Drag handle - Primary Teal ── */}
            <motion.div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                animate={{ scale: isDragging ? 1.1 : isHovered ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="
                    absolute top-1/2 z-30
                    -translate-x-1/2 -translate-y-1/2
                    w-10 h-10 rounded-xl
                    bg-primary-teal shadow-xl shadow-black/20
                    flex items-center justify-center
                    border-2 border-white
                "
                style={{ left: `${position}%` }}
            >
                <MoveHorizontal size={16} className="text-white" strokeWidth={3} />
            </motion.div>

            {/* ── Drag hint ── */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isDragging || position !== initialPosition ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="
                    absolute inset-0 z-10 flex items-center justify-center
                    pointer-events-none
                "
            >
                <div className="
                    px-5 py-2 rounded-xl
                    bg-white/90 backdrop-blur-md
                    text-black text-[11px] font-bold uppercase tracking-wider
                    border border-black/5 shadow-sm
                ">
                    Slide to Compare
                </div>
            </motion.div>
        </div>
    );
};