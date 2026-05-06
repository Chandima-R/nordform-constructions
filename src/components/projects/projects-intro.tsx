"use client";


import {ScrollWordReveal} from "@/components/motion/scroll-words-reveal";
import {ScrollBlurParagraph} from "@/components/motion/scroll-blur-paragraph";

export const ProjectsIntro = () => {
    return (
        <section className="mx-auto max-w-[1800px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Urval
                    </p>
                    <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-[0.06em] text-ink md:text-6xl lg:text-7xl">
                        PROGRAM MED
                        <br />
                        HÖG KOMPLEXITET
                    </h2>
                </div>
                <div className="space-y-8 border-l border-gold/30 pl-8 md:pl-10">
                    <ScrollWordReveal
                        text="Vi tar oss an projekt där intressentäthet, logistik och säkerhet kräver särskild styrning — och där arkitektoniska ambitioner inte får kompromissas i produktion."
                        className="text-base leading-relaxed text-stone-warm md:text-lg"
                    />
                    <ScrollBlurParagraph
                        text="Varje referens nedan kan följas med dokumenterade milstolpar, ekonomisk uppföljning och nyckelpersoner — vi delar gärna material under NDA inför er upphandling."
                        className="font-serif text-lg italic leading-relaxed text-stone-warm md:text-xl"
                        scrub={1.2}
                    />
                </div>
            </div>
        </section>
    );
}
