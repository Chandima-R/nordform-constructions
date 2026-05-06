"use client";

import {motion} from "framer-motion";

export const ContactForm = () =>{
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden border border-stone-200 bg-ivory/90 p-8 shadow-[0_36px_90px_-48px_rgba(14,14,12,0.35)] backdrop-blur-md md:p-12"
        >
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Direkt till teamet
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.1em] text-ink md:text-4xl">
                    SKRIV TILL OSS
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-warm">
                    Vi återkommer inom två arbetsdagar. Vid brådskande ärenden på befintlig
                    arbetsplats — ange projektnummer i ämnesraden.
                </p>
                <form
                    className="mt-10 flex flex-col gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                            Namn
                            <input
                                type="text"
                                name="name"
                                className="border border-stone-300 bg-cream px-4 py-3.5 text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                                placeholder="För- och efternamn"
                            />
                        </label>
                        <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                            E-post
                            <input
                                type="email"
                                name="email"
                                className="border border-stone-300 bg-cream px-4 py-3.5 text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                                placeholder="du@foretag.se"
                            />
                        </label>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                            Organisation
                            <input
                                type="text"
                                name="company"
                                className="border border-stone-300 bg-cream px-4 py-3.5 text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                                placeholder="Bolag / förvaltning"
                            />
                        </label>
                        <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                            Typ av förfrågan
                            <select
                                name="type"
                                className="border border-stone-300 bg-cream px-4 py-3.5 text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Välj alternativ
                                </option>
                                <option>Totalentreprenad</option>
                                <option>Partnering</option>
                                <option>Rådgivning / förstudie</option>
                                <option>Press / övrigt</option>
                            </select>
                        </label>
                    </div>
                    <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                        Meddelande
                        <textarea
                            name="message"
                            rows={6}
                            className="resize-y border border-stone-300 bg-cream px-4 py-3.5 text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                            placeholder="Beskriv projektet, ungefärlig tidsplan, plats och beslutsforum."
                        />
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-stone-warm">
                        <input type="checkbox" name="nda" className="mt-1 h-4 w-4 border-stone-300 text-gold focus:ring-gold" />
                        <span>
              Vi önskar sekretessavtal innan känsliga bilagor delas (vänligen
              markera här så bokar vi juridiskt spår).
            </span>
                    </label>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-2 inline-flex w-fit items-center bg-ink px-12 py-4 text-[10px] font-bold uppercase tracking-[0.32em] text-ivory ring-1 ring-gold/30 transition hover:bg-gold hover:text-ink"
                    >
                        Skicka förfrågan
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}
