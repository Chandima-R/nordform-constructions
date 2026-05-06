"use client";

import Image from "next/image";
import {motion} from "framer-motion";

export const ContactHero = () =>{
    return (
        <section className="relative min-h-[62vh] w-full overflow-hidden bg-ink md:min-h-[68vh]">
            <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="100vw"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/88 to-ink/45" />
            <div className="relative mx-auto flex min-h-[62vh] max-w-[1800px] flex-col justify-end px-5 pb-14 pt-32 md:min-h-[68vh] md:px-10 md:pb-20 md:pt-40 lg:px-14">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold"
                >
                    Kontakt
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 max-w-4xl font-display text-6xl leading-[0.92] tracking-[0.04em] text-ivory md:text-8xl lg:text-9xl"
                >
                    ER NÄSTA
                    <br />
                    <span className="text-gold-bright">MILSTOLPE</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 }}
                    className="mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ivory/75 md:text-xl"
                >
                    Berätta om er tidplan, budgetram och beslutsforum — vi återkommer med
                    en tydlig väg in i nästa steg, oavsett om det handlar om partnering,
                    rådgivning eller produktion.
                </motion.p>
            </div>
        </section>
    );
}
