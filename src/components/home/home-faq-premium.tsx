"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const items = [
    {
        q: "Hur säkrar ni tidplan vid komplex samverkan?",
        a: "Vi kopplar varje kritisk aktivitet till en synlig kritisk kedja i vår projektmodell. Ägare för varje aktivitet dokumenteras och följs digitalt gentemot er KPI-uppsättning.",
    },
    {
        q: "Kan Nordform kombinera rådgivning och senare totalentreprenad?",
        a: "Ja — vi kallar läget för »skalbar roll«. Tidiga förstudier kan övergå till produktion utan informationsförlust via samma dokumentationsryggrad.",
    },
    {
        q: "Vilka standarder för säkerhet gäller i produktion?",
        a: "All produktion är certifierad enligt ISO 45001. Vi arbetar med gemensamma inträdeskort, säkerhetsbunkrar och mikroprognoser för risk på veckobasis.",
    },
    {
        q: "Hur hanterar ni klimatdeklarationer och materialspår?",
        a: "Varje kritisk vägg- och tätskiktsväg dokumenteras digitalt kopplat till EPD-underlag och leveransnummer för att möta kommande deklareringskrav.",
    },
    {
        q: "Arbetar ni internationellt?",
        a: "Vi har förankring i Sverige och Norden. Vid behov täcker vi internationellt via partnerskap där Nordform bibehåller ingenjörs-, kvalitets och ekonomisk ledning.",
    },
];

export const HomeFaqPremium = ()=> {
    const [idx, setIdx] = useState(0);

    return (
        <section className="relative overflow-hidden border-y border-stone-200 bg-void py-24 text-ivory md:py-32 lg:py-40">
            <div className="pointer-events-none absolute right-[-20%] top-1/4 h-[min(80vw,720px)] w-[min(80vw,720px)] rounded-full bg-ember/10 blur-[120px]" />
            <div className="relative mx-auto grid max-w-[1800px] gap-14 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-14">
                <div className="max-w-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Frågor & svar
                    </p>
                    <h2 className="mt-6 font-display text-5xl leading-[0.94] tracking-[0.06em] md:text-7xl lg:text-8xl">
                        TRANSPARENS
                        <br />
                        <span className="text-gradient-award">som standard</span>
                    </h2>
                    <p className="mt-8 font-serif text-lg italic leading-relaxed text-ivory/72 md:text-xl">
                        En awardnivå av webbnärvaro förutsätter samma sak som i våra projekt:
                        förutsägbara svar, modellerade scenarier och tydliga gränser för ansvar.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {items.map((item, i) => (
                        <button
                            key={item.q}
                            type="button"
                            onClick={() => setIdx(i)}
                            className={`relative overflow-hidden border px-6 py-5 text-left transition md:px-8 md:py-6 ${
                                idx === i
                                    ? "border-ember/50 bg-graphite shadow-[0_24px_80px_-56px_rgba(206,79,54,0.55)]"
                                    : "border-white/10 bg-white/[0.03] hover:border-ember/30"
                            }`}
                            data-cursor-hover
                        >
              <span className="flex items-start justify-between gap-6">
                <span className="font-display text-2xl tracking-[0.1em] text-ivory md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-semibold uppercase leading-snug tracking-[0.2em] text-ivory/90 md:text-base">
                  {item.q}
                </span>
                <span className="font-display text-xl text-ember">{idx === i ? "−" : "+"}</span>
              </span>
                            <AnimatePresence initial={false}>
                                {idx === i ? (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden border-t border-white/10"
                                    >
                                        <p className="pt-5 text-sm leading-relaxed text-ivory/65 md:text-base">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
