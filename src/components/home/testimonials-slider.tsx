
"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

const testimonials = [
    {
        quote:
            "Nordform levererade inte bara i tid — de höll oss delaktiga i varje beslut. Känslan av kontroll och precision är sällsynt i vår bransch.",
        name: "Elin Forsberg",
        role: "VD, Sjöstad Utveckling AB",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
        quote:
            "Från partneringavtal till inflyttning: ett team som förstår både arkitektens vision och driftorganisationens vardag.",
        name: "Marcus Lind",
        role: "Fastighetschef, Campus Syd",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
        quote:
            "Säkerhetsmötena var exemplariska och dokumentationen höll hela vägen till slutbesiktning utan anmärkning.",
        name: "Anna-Karin Holm",
        role: "Projektägare, Göteborgs Hamn",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
];

const AUTO_MS = 7200;

export const TestimonialsSlider = ()=> {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((i) => (i + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const id = window.setInterval(next, AUTO_MS);
        return () => window.clearInterval(id);
    }, [next]);

    const t = testimonials[index];

    return (
        <section className="relative overflow-hidden bg-cream py-24 md:py-32">
            <div className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-rust/5 blur-3xl" />

            <div className="relative mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
                    <div className="lg:w-[38%] lg:shrink-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Röster från samarbeten
                        </p>
                        <h2 className="mt-4 font-display text-5xl leading-none tracking-[0.06em] text-ink md:text-6xl lg:text-7xl">
                            FÖRTROENDE
                        </h2>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-warm">
                            Byggda relationer är lika viktiga som byggda ytor. Ett urval av
                            omdömen från beställare vi arbetat nära över flera år.
                        </p>
                        <div className="mt-10 flex gap-3">
                            <button
                                type="button"
                                onClick={prev}
                                className="flex h-12 w-12 items-center justify-center border border-stone-300 text-xs font-bold uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold"
                                aria-label="Föregående omdöme"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                className="flex h-12 w-12 items-center justify-center border border-stone-300 text-xs font-bold uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold"
                                aria-label="Nästa omdöme"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div className="relative flex-1 lg:pt-4">
                        <div className="absolute -left-4 top-0 hidden font-serif text-8xl leading-none text-gold/25 lg:block">
                            “
                        </div>
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18}
                            onDragEnd={(_, info) => {
                                const offset = info.offset.x;
                                const velocity = info.velocity.x;
                                if (offset < -48 || velocity < -380) next();
                                if (offset > 48 || velocity > 380) prev();
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.figure
                                    key={t.name}
                                    initial={{ opacity: 0, filter: "blur(10px)", y: 28 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative border border-stone-200/90 bg-ivory/90 p-8 shadow-[0_30px_80px_-40px_rgba(14,14,12,0.35)] backdrop-blur-sm md:p-12"
                                >
                                    <blockquote className="font-serif text-2xl leading-snug text-ink md:text-3xl md:leading-snug">
                                        {t.quote}
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-4 border-t border-gold/25 pt-8">
                                        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/40">
                                            <Image
                                                src={t.image}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                sizes="56px"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                                                {t.name}
                                            </p>
                                            <p className="mt-1 text-xs text-stone-muted">{t.role}</p>
                                        </div>
                                    </figcaption>
                                </motion.figure>
                            </AnimatePresence>
                        </motion.div>

                        <div className="mt-8 flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    aria-label={`Gå till omdöme ${i + 1}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-1.5 flex-1 max-w-[72px] transition ${
                                        i === index ? "bg-gold" : "bg-stone-300 hover:bg-gold/40"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
