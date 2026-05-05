"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    { value: "38+", label: "År i branschen" },
    { value: "210", label: "Genomförda projekt" },
    { value: "4.2M", label: "m² byggd yta" },
];

export const StatsReveal = ()=> {
    const section = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 78%",
                    toggleActions: "play none none reverse",
                },
                y: 56,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1,
                stagger: 0.16,
                ease: "power3.out",
            });
        },
        { scope: section },
    );

    return (
        <section
            ref={section}
            className="border-y border-gold/20 bg-gradient-to-b from-cream via-ivory to-cream-dark/40 px-5 py-24 md:px-10 md:py-28 lg:px-14"
        >
            <div className="mx-auto grid max-w-[1800px] gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold/25">
                {stats.map((s) => (
                    <div key={s.label} className="stat-item px-2 md:px-10 lg:px-14">
                        <p className="font-display text-6xl text-ink md:text-7xl lg:text-8xl">
                            <span className="text-gold">/</span>
                            {s.value}
                        </p>
                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.32em] text-stone-muted">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
