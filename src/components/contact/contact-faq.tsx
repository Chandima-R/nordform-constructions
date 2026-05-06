"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const faqs = [
    {
        q: "Hur snabbt kan ni starta i produktion?",
        a: "Beroende på program och tillståndsstatus — ofta inom 8–12 veckor efter signerat avtal, medan rådgivande uppdrag kan påbörjas omedelbart.",
    },
    {
        q: "Arbetar ni endast i Sverige?",
        a: "Vår kärnverksamhet är den svenska marknaden. Vid nordiska samarbeten sker produktion via utvalda partners med vår tekniska ledning.",
    },
    {
        q: "Vilken information behöver ni för första mötet?",
        a: "Programskiss, tidiga investeringsramar, beslutsforum samt eventuella risker ni redan identifierat — resten tar vi fram tillsammans.",
    },
    {
        q: "Kan ni teckna sekretessavtal innan dialog?",
        a: "Ja, vi använder standardiserade NDA-mallar anpassade för bygg- och fastighetssektorn.",
    },
];

export const  ContactFaq = ()=> {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="border-t border-stone-200 bg-ivory py-20 md:py-28">
            <div className="mx-auto max-w-[900px] px-5 md:px-10">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Vanliga frågor
                </p>
                <h2 className="mt-4 text-center font-display text-4xl tracking-[0.08em] text-ink md:text-5xl">
                    KLARHET INNAN START
                </h2>
                <div className="mt-12 space-y-3">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={item.q} className="border border-stone-200 bg-cream-dark/20">
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                                >
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink md:text-base">
                    {item.q}
                  </span>
                                    <span className="shrink-0 font-display text-2xl text-gold">{isOpen ? "−" : "+"}</span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen ? (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden border-t border-stone-200/80"
                                        >
                                            <p className="px-5 py-5 text-sm leading-relaxed text-stone-warm md:px-6 md:text-base">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
