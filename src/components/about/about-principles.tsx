"use client";

import {motion} from "framer-motion";

const values = [
    {
        title: "Säkerhet först",
        body: "Systematiska riskbedömningar, skyddsronder och tydliga eskalationsvägar — varje arbetsplats leds av certifierade platschefer.",
    },
    {
        title: "Tydlig dialog",
        body: "Veckovisa lägesbilder, visualiserade milstolpar och en namngiven kontaktperson som äger helheten gentemot er organisation.",
    },
    {
        title: "Hantverk som håller",
        body: "Vi samarbetar med certifierade underleverantörer, följer upp toleranser mot ritning och dokumenterar varje kritisk kontrollpunkt.",
    },
    {
        title: "Långsiktig finish",
        body: "Materialval och detaljer som tål nordiskt klimat — med underhållsplaner och garantiuppföljning som fortsätter efter nycklar.",
    },
];

export const AboutPrinciples = () =>  {
    return (
        <section className="border-y border-stone-200 bg-cream-dark/35 px-5 py-20 md:px-10 md:py-28 lg:px-14">
            <div className="mx-auto max-w-[1800px]">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Principer
                        </p>
                        <h2 className="mt-3 font-display text-5xl tracking-[0.08em] text-ink md:text-6xl lg:text-7xl">
                            VÅR KODEX
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-stone-warm md:text-base lg:text-right">
                        Dessa fyra pelare genomsyrar varje avtal, varje möte och varje
                        leverans — oavsett om vi bygger bostäder, infrastruktur eller
                        samhällsfastigheter.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
                    {values.map((v, i) => (
                        <motion.article
                            key={v.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden border border-stone-200 bg-ivory p-8 shadow-[0_24px_70px_-40px_rgba(14,14,12,0.22)] transition hover:border-gold/35 md:p-10"
                        >
              <span className="font-display text-5xl text-gold/25 transition group-hover:text-gold/45 md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
                            <h3 className="mt-4 font-display text-3xl tracking-[0.12em] text-ink md:text-4xl">
                                {v.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-stone-warm md:text-lg">
                                {v.body}
                            </p>
                            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
