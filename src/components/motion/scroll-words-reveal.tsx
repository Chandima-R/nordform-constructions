"use client";

import {useMemo, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
    text: string;
    className?: string;
    wordWrapperClassName?: string;
};

export function ScrollWordReveal({
                                     text,
                                     className = "",
                                     wordWrapperClassName = "",
                                 }: Props) {
    const root = useRef<HTMLParagraphElement>(null);
    const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

    useGSAP(
        () => {
            const targets = root.current?.querySelectorAll(".word-inner");
            if (!targets?.length) return;
            gsap.from(targets, {
                y: "120%",
                rotate: 2,
                opacity: 0,
                duration: 0.85,
                stagger: 0.04,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: root, dependencies: [text] },
    );

    return (
        <p ref={root} className={className}>
            {words.map((w, i) => (
                <span
                    key={`${w}-${i}`}
                    className={`mr-[0.3em] inline-block overflow-hidden align-baseline last:mr-0 ${wordWrapperClassName}`}
                >
          <span className="word-inner inline-block will-change-transform">{w}</span>
        </span>
            ))}
        </p>
    );
}
