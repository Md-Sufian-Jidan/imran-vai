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
    /** Initial split position as a percentage (0–100). Default: 45 */
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

    // Mouse
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

    // Touch
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
            className={`relative w-full h-full select-none overflow-hidden rounded-3xl ${className}`}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
            {/* ── AFTER image (full, beneath) ── */}
            <div className="absolute inset-0">
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" priority />
                {/* "After" label */}
                <div className="absolute bottom-4 right-4 z-10">
                    <span className="
            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
            bg-emerald-500/20 text-emerald-400 border border-emerald-500/30
            backdrop-blur-sm
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
                    className="object-cover"
                    style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
                    priority
                />
                {/* "Before" label */}
                <div className="absolute bottom-4 left-4 z-10">
                    <span className="
            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
            bg-black/40 text-white/70 border border-white/15
            backdrop-blur-sm
          ">
                        Before
                    </span>
                </div>
            </div>

            {/* ── Divider line ── */}
            <div
                className="absolute inset-y-0 z-20 w-px bg-white/60"
                style={{ left: `${position}%` }}
            />

            {/* ── Drag handle ── */}
            <motion.div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                animate={{ scale: isDragging ? 1.15 : isHovered ? 1.06 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="
          absolute top-1/2 z-30
          -translate-x-1/2 -translate-y-1/2
          w-12 h-12 rounded-full
          bg-white shadow-2xl shadow-black/40
          flex items-center justify-center
          border-2 border-white/80
        "
                style={{ left: `${position}%` }}
            >
                <MoveHorizontal size={18} className="text-gray-700" strokeWidth={2.5} />
            </motion.div>

            {/* ── Drag hint (fades out after interaction) ── */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isDragging || position !== initialPosition ? 0 : 0.9 }}
                transition={{ duration: 0.4 }}
                className="
          absolute inset-0 z-10 flex items-center justify-center
          pointer-events-none
        "
            >
                <div className="
          px-4 py-2 rounded-full
          bg-black/50 backdrop-blur-sm
          text-white text-xs font-semibold tracking-wide
          border border-white/15
        ">
                    Drag to compare
                </div>
            </motion.div>
        </div>
    );
};