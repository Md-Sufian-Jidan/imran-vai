"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/commonLinks";

const AUTOPLAY_DELAY = 5000;
const DRAG_THRESHOLD = 50;

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dragStartX = useRef<number>(0);
    const total = testimonials.length;

    const go = useCallback(
        (next: number, dir: 1 | -1) => {
            setDirection(dir);
            setCurrent((next + total) % total);
        },
        [total]
    );

    const prev = useCallback(() => go(current - 1, -1), [current, go]);
    const next = useCallback(() => go(current + 1, 1), [current, go]);

    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setTimeout(() => go(current + 1, 1), AUTOPLAY_DELAY);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [current, isPaused, go]);

    const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        dragStartX.current =
            "touches" in e ? e.touches[0].clientX : e.clientX;
    };
    const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        const endX =
            "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
        const delta = dragStartX.current - endX;
        if (Math.abs(delta) > DRAG_THRESHOLD) {
            delta > 0 ? next() : prev();
        }
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);

    const t = testimonials[current];

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 60 : -60,
            opacity: 0,
            scale: 0.97,
        }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir: number) => ({
            x: dir > 0 ? -60 : 60,
            opacity: 0,
            scale: 0.97,
        }),
    };

    return (
        <SectionWrapper className="bg-white" containerClassName="px-6">
            <SectionHeading
                label="Testimonials"
                title="What our clients say"
                description="Don't just take our word for it — hear from the brands we've helped transform."
            />

            <div
                className="relative max-w-3xl mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onMouseDown={onDragStart}
                onMouseUp={onDragEnd}
                onTouchStart={onDragStart}
                onTouchEnd={onDragEnd}
                role="region"
                aria-label="Testimonials slider"
                aria-live="polite"
            >
                {/* Card */}
                <div className="overflow-hidden rounded-2xl select-none">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
                            className="bg-white border border-border rounded-2xl p-8 md:p-12 relative shadow-sm"
                        >
                            {/* Decorative Quote - Primary Teal */}
                            <Quote
                                size={64}
                                className="absolute top-6 right-8 text-primary-teal/5 rotate-180 pointer-events-none"
                                aria-hidden="true"
                            />

                            {/* Stars - Primary Teal */}
                            <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <Star
                                        key={j}
                                        size={16}
                                        className={cn(
                                            "transition-colors",
                                            j < t.rating
                                                ? "text-primary-teal fill-primary-teal"
                                                : "text-muted-foreground/30 fill-muted-foreground/10"
                                        )}
                                    />
                                ))}
                            </div>

                            {/* Quote text - Black */}
                            <blockquote className="text-black text-lg md:text-xl leading-relaxed mb-8 font-body font-medium italic">
                                &ldquo;{t.text}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                {/* Avatar - Primary Teal Theme */}
                                <div
                                    className="w-11 h-11 rounded-full bg-primary-teal/10 border border-primary-teal/20 flex items-center justify-center shrink-0"
                                    aria-hidden="true"
                                >
                                    <span className="font-heading font-semibold text-primary-teal text-sm">
                                        {getInitials(t.name)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-black leading-tight">
                                        {t.name}
                                    </p>
                                    <p className="text-[#999999] text-sm mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls row */}
                <div className="flex items-center justify-between mt-8">
                    {/* Dot indicators - Primary Teal */}
                    <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={i === current}
                                aria-label={`Go to testimonial ${i + 1}`}
                                onClick={() => go(i, i > current ? 1 : -1)}
                                className={cn(
                                    "rounded-full transition-all duration-300",
                                    i === current
                                        ? "w-6 h-2 bg-primary-teal"
                                        : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary-teal/40"
                                )}
                            />
                        ))}
                    </div>

                    {/* Arrow buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className={cn(
                                "w-10 h-10 rounded-full border border-border flex items-center justify-center",
                                "text-[#999999] hover:text-black hover:border-primary-teal/50",
                                "transition-all duration-200"
                            )}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="relative w-10 h-10">
                            {/* SVG autoplay progress ring - Primary Teal */}
                            {!isPaused && (
                                <svg
                                    className="absolute inset-0 -rotate-90"
                                    viewBox="0 0 40 40"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="20" cy="20" r="18"
                                        fill="none"
                                        stroke="var(--primary-teal)"
                                        className="stroke-primary-teal"
                                        strokeWidth="2"
                                        strokeDasharray={`${2 * Math.PI * 18}`}
                                        strokeDashoffset="0"
                                        strokeLinecap="round"
                                        style={{
                                            animation: `progress-drain ${AUTOPLAY_DELAY}ms linear`,
                                            animationPlayState: isPaused ? "paused" : "running",
                                        }}
                                        key={`ring-${current}`}
                                    />
                                </svg>
                            )}
                            <button
                                onClick={next}
                                aria-label="Next testimonial"
                                className={cn(
                                    "absolute inset-0 rounded-full border border-border flex items-center justify-center",
                                    "text-[#999999] hover:text-black hover:border-primary-teal/50 hover:bg-primary-teal/5",
                                    "transition-all duration-200"
                                )}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes progress-drain {
                  from { stroke-dashoffset: 0; }
                  to   { stroke-dashoffset: ${2 * Math.PI * 18}; }
                }
            `}</style>
        </SectionWrapper>
    );
}