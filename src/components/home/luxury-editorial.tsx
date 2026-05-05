"use client";


import {ScrollLinesReveal} from "@/components/motion/scroll-lines-reveal";
import {ScrollBlurParagraph} from "@/components/motion/scroll-blur-paragraph";

export const LuxuryEditorial = () => {
    return (
        <section className="relative bg-ink text-ivory">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(184,160,110,0.12),transparent_55%)]" />
            <div className="relative mx-auto max-w-[1800px] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Estetik möter ingenjörskonst
                </p>
                <ScrollLinesReveal
                    lines={["VI FORMAR", "RUM SOM"]}
                    className="mt-10 font-display text-6xl leading-[0.92] tracking-[0.04em] text-ivory md:text-8xl lg:text-9xl"
                    scrub
                />
                <ScrollLinesReveal
                    lines={["HÅLLER I", "GENERATIONER"]}
                    className="mt-2 font-display text-6xl leading-[0.92] tracking-[0.04em] text-gold-bright md:text-8xl lg:text-9xl"
                    scrub
                />
                <div className="mx-auto mt-16 max-w-3xl border-t border-gold/25 pt-12 md:mt-20 md:pt-16">
                    <ScrollBlurParagraph
                        text="Varje projekt behandlas som ett långsiktigt åtagande: materialval, ljusflöden och konstruktionsdetaljer som tål att granskas på nära håll — idag och om tjugo år."
                        className="font-serif text-xl leading-relaxed text-ivory/75 md:text-2xl md:leading-relaxed"
                    />
                </div>
            </div>
        </section>
    );
}
