"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {MagneticButton} from "@/components/premium/magnetic-button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const GrandCTA = ()=> {
    const section = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                ".cta-blur-line",
                { filter: "blur(14px)", opacity: 0.08, y: 28 },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    duration: 1.25,
                    ease: "power2.out",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: section.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
            gsap.from(".cta-sub", {
                y: 32,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 62%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: section },
    );

    return (
        <section
            ref={section}
            className="relative overflow-hidden bg-void py-28 text-ivory md:py-36"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(206,79,54,0.22),transparent_52%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(182,155,109,0.12),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto flex max-w-[1800px] flex-col items-start gap-10 px-5 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14">
                <div>
                    <p className="cta-blur-line font-display text-5xl leading-[0.95] text-ember-bright md:text-7xl lg:text-8xl">
                        LÅT OSS
                    </p>
                    <p className="cta-blur-line font-display text-5xl leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
                        SKISSA
                    </p>
                    <p className="cta-blur-line font-display text-5xl leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
                        NÄSTA STEG
                    </p>
                </div>
                <div className="max-w-md lg:text-right">
                    <p className="cta-sub text-sm leading-relaxed text-ivory/65 md:text-base">
                        Vi tar fram program, tidplan och ekonomisk ram inom tre veckor från
                        första mötet — oavsett om det gäller nyproduktion, ombyggnad eller
                        teknisk due diligence.
                    </p>
                    <MagneticButton
                        href="/contact"
                        className="cta-sub mt-8 inline-flex items-center border border-ember/65 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-ember-bright transition hover:bg-ember hover:text-ivory"
                    >
                        Boka rådgivning
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
