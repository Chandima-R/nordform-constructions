"use client";

import {motion} from "framer-motion";

const items = [
    { k: "ISO 45001", v: "Arbetsmiljöledning" },
    { k: "ISO 9001", v: "Kvalitetsledning" },
    { k: "ID06", v: "Etiska krav i leverantörskedjan" },
    { k: "CE-märkning", v: "Produktionskontroll stommar" },
];

export const HomeCertifications = ()=> {
    return (
        <section className="border-y border-stone-200 bg-ivory py-20 md:py-28">
            <div className="mx-auto flex max-w-[1800px] flex-col gap-12 px-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                <div className="max-w-lg">
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Styrd kvalitet
                    </p>
                    <h2 className="mt-4 font-display text-4xl tracking-[0.08em] text-ink md:text-5xl">
                        CERTIFIERINGAR
                        <br />& REGLERVERK
                    </h2>
                    <p className="mt-6 text-sm leading-relaxed text-stone-warm md:text-base">
                        Revisionsbara processer, spårbara leveranser och tredjepartsgranskade
                        system — grunden för partnerskap med institutionella beställare.
                    </p>
                </div>
                <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:max-w-2xl">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.k}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="border border-stone-200 bg-cream-dark/30 px-6 py-6 transition hover:border-gold/40 hover:shadow-[0_20px_50px_-30px_rgba(14,14,12,0.25)]"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                                {item.k}
                            </p>
                            <p className="mt-3 text-sm text-stone-warm">{item.v}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
