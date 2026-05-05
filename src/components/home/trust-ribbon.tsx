"use client";


import {ScrollWordReveal} from "@/components/motion/scroll-words-reveal";

const partners = [
    "SKANSKA",
    "PEAB",
    "WHITE ARKITEKTER",
    "TYRÉNS",
    "NCC",
    "FOLKSAM FASTIGHETER",
];

export const TrustRibbon = ()=> {
    return (
        <section className="border-y border-stone-200 bg-ivory px-5 py-16 md:px-10 md:py-20 lg:px-14">
            <div className="mx-auto max-w-[1800px]">
                <ScrollWordReveal
                    text="Strategiska partners och ramavtal som sträcker sig över hela den svenska marknaden."
                    className="max-w-4xl font-serif text-xl italic leading-relaxed text-stone-warm md:text-2xl"
                />
                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-stone-200 pt-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-12">
                    {partners.map((p) => (
                        <div
                            key={p}
                            className="flex items-center justify-center text-center font-display text-lg tracking-[0.22em] text-ink/35 transition hover:text-gold md:text-xl"
                        >
                            {p}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
