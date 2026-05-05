"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {ScrollLinesReveal} from "@/components/motion/scroll-lines-reveal";
import {ScrollBlurParagraph} from "@/components/motion/scroll-blur-paragraph";

export const HomeManifesto = ()=> {
    return (
        <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
            <div className="pointer-events-none absolute right-0 top-1/4 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 rounded-full bg-gold/8 blur-3xl" />
            <div className="relative mx-auto grid max-w-[1800px] gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-14">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Manifest
                    </p>
                    <ScrollLinesReveal
                        lines={["INGEN DETALJ", "ÄR FÖR LITEN"]}
                        className="mt-6 font-display text-6xl leading-[0.92] tracking-[0.04em] text-ink md:text-7xl lg:text-8xl"
                        scrub
                    />
                    <div className="mt-10 max-w-xl border-l border-gold/50 pl-8">
                        <ScrollBlurParagraph
                            text="Vi arbetar som om varje projekt skulle bära ert varumärke i generationer — för att byggda miljöer inte bara ska fungera, utan också kännas genomtänkta, lugna och exakta."
                            className="font-serif text-xl leading-relaxed text-stone-warm md:text-2xl"
                            scrub={1.05}
                        />
                    </div>
                    <dl className="mt-14 grid gap-8 border-t border-stone-200/90 pt-12 sm:grid-cols-2">
                        {[
                            ["Leveranssäkerhet", "Fasta milstolpar och beslutsspår som minskar överraskningar i produktion."],
                            ["Finish & ljus", "Toleranser för ytskikt och ljusplanering som följer arkitektens intent."],
                        ].map(([t, b]) => (
                            <div key={t as string}>
                                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                                    {t}
                                </dt>
                                <dd className="mt-3 text-sm leading-relaxed text-stone-warm">{b}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="img-premium relative aspect-[4/5] w-full overflow-hidden border border-stone-200 shadow-[0_40px_100px_-50px_rgba(14,14,12,0.55)]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1541976590-713941681d42?q=80&w=1600&auto=format&fit=crop"
                            alt="Arkitektoniskt ljus i trappa"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="img-premium relative -mt-16 ml-auto w-[72%] overflow-hidden border border-gold/25 shadow-2xl md:-mt-24 lg:w-[58%]"
                    >
                        <div className="relative aspect-[5/4] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
                                alt="Materialdetalj och betongyta"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 72vw, 28vw"
                            />
                        </div>
                    </motion.div>
                    <p className="mt-8 max-w-xs text-[10px] font-bold uppercase leading-relaxed tracking-[0.32em] text-stone-muted">
                        Arkitektur i samproduktion · dokumenterad kvalitet · nordisk materialitet
                    </p>
                </div>
            </div>
        </section>
    );
}
