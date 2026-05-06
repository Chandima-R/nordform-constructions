"use client";

import {motion} from "framer-motion";

const steps = [
    {
        title: "Inledande samtal",
        body: "Vi kartlägger mål, risk och beslutsforum — ofta inom 48 timmar från första kontakt.",
    },
    {
        title: "Programförslag",
        body: "Konkret vägval: partnering, totalentreprenad eller rådgivande roll — med ekonomisk ram.",
    },
    {
        title: "Djupdykning",
        body: "Tekniska workshops, platsbesök och underlag för styrelse eller investerarkommitté.",
    },
];

export const ContactWorkflow = () => {
    return (
        <section className="bg-gradient-to-b from-cream-dark/40 to-ivory py-20 md:py-28">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Innan vi bygger
                        </p>
                        <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-ink md:text-5xl">
                            SAMTALETS
                            <br />
                            TRE FASER
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-warm md:text-base md:text-right">
                        Oavsett om ni är i tidig idéfas eller redo för produktion — vi möter
                        er med samma struktur: tydlighet, dokumentation och respekt för er
                        beslutskedja.
                    </p>
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="border border-stone-200 bg-ivory p-8 shadow-[0_20px_55px_-38px_rgba(14,14,12,0.25)]"
                        >
              <span className="font-display text-4xl text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
                            <h3 className="mt-4 font-display text-2xl tracking-[0.12em] text-ink">{s.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-stone-warm">{s.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
