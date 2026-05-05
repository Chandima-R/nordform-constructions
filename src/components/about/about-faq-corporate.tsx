"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const items = [
    {
        theme: "Styrning",
        q: "Hur ser er styrmodell ut i partnering?",
        a: "Partneringen leds av ett gemensamt styrforum med beslutsprotokoll, riskregister och månadsvisa ekonomiska avstämningar signeras av alla parter innan nästa driftfas startar.",
    },
    {
        theme: "Juridik",
        q: "Vilka avtal använder ni typiskt?",
        a: "ABT 06 för totalentreprenad, för partnering anpassade ramverk kopplade till partneringavtal enligt praxis från Byggbranschen, med tydliga optionsstrukturer.",
    },
    {
        theme: "Kvalitet",
        q: "Hur verifierar ni toleranser mot arkitekt?",
        a: "Kritiska mått fångas i fältappen Nordform Inspect — avvikelser visas i BIM inom 12 timmar från upptäckt.",
    },
    {
        theme: "Hållbarhet",
        q: "Hur säkerställer ni lägre klimatavtryck?",
        a: "Vi prioriterar material med EPD och logistiska scheman som minimerar tomkörning. Klimatkalkyl dokumenteras löpande i varje månadsportal.",
    },
    {
        theme: "Finans",
        q: "Kan ni kopplas mot era interna ekonomisystem?",
        a: "Ja — månadsunderlag exporteras strukturerade mot era ERP-koder eller som Excel enligt fast mall.",
    },
];

export const AboutFaqCorporate = () => {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="border-y border-stone-200 bg-ivory py-24 md:py-32">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-ember">
                            Q&A — Företagsnivå
                        </p>
                        <h2 className="mt-4 max-w-xl font-display text-5xl tracking-[0.08em] md:text-6xl">
                            SVAR för
                            <br />
                            STYRELSE & CFO
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-warm md:text-base lg:text-right">
                        Frågor som återkommer i upphandlingar, säkerställdhetsdialoger eller
                        rådslag inför nästa ramavtal — strukturerade så att juridiska,
                        tekniska och finansiella roller ser sina respektive gränssnitt.
                    </p>
                </div>

                <div className="mt-14 divide-y divide-stone-200 border border-stone-200 bg-cream-dark/25">
                    {items.map((item, i) => (
                        <div key={item.q}>
                            <button
                                type="button"
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full flex-col gap-4 px-5 py-6 text-left transition hover:bg-ivory md:flex-row md:items-center md:gap-10 md:px-8 md:py-8"
                                data-cursor-hover
                            >
                <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-gold md:w-[120px]">
                  {item.theme}
                </span>
                                <span className="flex-1 font-display text-xl tracking-[0.12em] text-ink md:text-2xl">
                  {item.q}
                </span>
                                <span className="font-display text-2xl text-ember">{open === i ? "−" : "+"}</span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i ? (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden border-t border-stone-200/80 bg-ivory"
                                    >
                                        <p className="px-5 pb-6 pt-2 text-sm leading-relaxed text-stone-warm md:px-[7.75rem] md:pb-8 md:text-base">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <p className="mt-10 max-w-2xl text-xs leading-relaxed text-stone-muted">
                    OBS: Vid internationella eller offentliga upphandlingar hänvisas till separat databas med uppdaterade avtalsbilagor. Kontakta vår CFO för verifiering av formulering innan signerad avsiktsförklaring.
                </p>
            </div>
        </section>
    );
}
