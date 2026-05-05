"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {ScrollBlurParagraph} from "@/components/motion/scroll-blur-paragraph";

export const AboutNarrative = () => {
    return (
        <section className="mx-auto max-w-[1800px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
                <div className="grid gap-6">
                    <div className="img-premium relative aspect-[16/11] overflow-hidden border border-stone-200 shadow-[0_30px_80px_-45px_rgba(14,14,12,0.35)]">
                        <Image
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
                            alt="Team på byggarbetsplats"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6 }}
                        className="img-premium relative ml-auto w-[88%] overflow-hidden border border-gold/25 md:w-[70%]"
                    >
                        <div className="relative aspect-[5/3] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e66837?q=80&w=1600&auto=format&fit=crop"
                                alt="Produktion och kvalitetskontroll"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 88vw, 35vw"
                            />
                        </div>
                    </motion.div>
                </div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Berättelsen
                    </p>
                    <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-[0.06em] text-ink md:text-6xl lg:text-7xl">
                        NÄRVARO I
                        <br />
                        VARJE FAS
                    </h2>
                    <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-warm md:text-lg">
                        <ScrollBlurParagraph
                            text="Vi är ett familjeägt företag med kontor i Stockholm och projekt i hela landet. Våra platschefer och ingenjörer arbetar nära beställare, arkitekter och underentreprenörer — så att varje skede, från mark till inflyttning, håller tidplan och kvalitet."
                            className="font-serif italic text-stone-warm"
                            scrub={1.1}
                        />
                        <p>
                            Nordform växte ur en enkel idé: att byggprocessen ska vara lika
                            genomtänkt som resultatet. Idag driver vi komplexa program med
                            flera intressenter, men vår arbetskultur är fortsatt personlig —
                            med korta beslutsvägar och hög synlighet i produktion.
                        </p>
                        <p>
                            Hållbarhet handlar för oss om lång livslängd, smart energianvändning
                            och sunda arbetsmiljöer. Vi väljer material som tål nordiskt klimat
                            och dokumenterar varje leverans enligt branschstandard — redo för
                            revision när ni behöver den.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
