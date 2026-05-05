"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
    lines: string[];
    className?: string;
    lineClassName?: string;
    /** If true, animation is tied to scroll position (scrub) */
    scrub?: boolean;
};

export function ScrollLinesReveal({
                                      lines,
                                      className = "",
                                      lineClassName = "",
                                      scrub = false,
                                  }: Props) {
    const root = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const targets = root.current?.querySelectorAll(".line-inner");
            if (!targets?.length) return;

            if (scrub) {
                gsap.fromTo(
                    targets,
                    { yPercent: 108, rotateX: -12, opacity: 0.05 },
                    {
                        yPercent: 0,
                        rotateX: 0,
                        opacity: 1,
                        ease: "none",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: root.current,
                            start: "top 90%",
                            end: "top 35%",
                            scrub: 1.1,
                        },
                    },
                );
            } else {
                gsap.from(targets, {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1.05,
                    stagger: 0.14,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: root.current,
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        },
        { scope: root, dependencies: [scrub, lines.join("|")] },
    );

    return (
        <div ref={root} className={className}>
            {lines.map((line, i) => (
                <div key={`${line}-${i}`} className="overflow-hidden perspective-[800px]">
                    <div
                        className={`line-inner will-change-transform ${lineClassName}`}
                        style={{ transformOrigin: "50% 100%" }}
                    >
                        {line}
                    </div>
                </div>
            ))}
        </div>
    );
}
