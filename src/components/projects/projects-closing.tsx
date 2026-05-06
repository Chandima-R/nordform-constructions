"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export const ProjectsClosing = () => {
    return (
        <section className="bg-ink py-24 text-ivory md:py-32">
            <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Nästa referens
                    </p>
                    <h2 className="mt-4 max-w-xl font-serif text-3xl italic leading-snug md:text-4xl">
                        Vill ni se hur vi organiserar produktion, ekonomi och kvalitet i ert
                        specifika program?
                    </h2>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center border border-gold/50 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-bright transition hover:bg-gold hover:text-ink"
                    >
                        Boka genomgång
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
