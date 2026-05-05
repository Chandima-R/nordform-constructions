import Link from "next/link";

const explore = [
    { href: "/", label: "Hem" },
    { href: "/about", label: "Om oss" },
    { href: "/projects", label: "Projekt" },
    { href: "/contact", label: "Kontakt" },
];

const expertise = [
    { href: "/projects", label: "Totalentreprenad" },
    { href: "/projects", label: "Partnering" },
    { href: "/about", label: "Hållbarhet & kvalitet" },
    { href: "/contact", label: "Investerarrelationer" },
];

export const SiteFooter = () =>{
    return (
        <footer className="border-t border-gold/25 bg-ink text-ivory">
            <div className="mx-auto max-w-[1800px] px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
                    <div>
                        <p className="font-display text-5xl tracking-[0.1em] md:text-6xl lg:text-7xl">
                            NORDFORM
                        </p>
                        <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-ivory/70">
                            Nordisk byggkoncern med helhetsåtaganden inom stomme, infrastruktur
                            och kommersiella miljöer — med arkitektonisk respekt och operativ
                            precision.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-3">
              <span className="border border-gold/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold/90">
                ISO 45001
              </span>
                            <span className="border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-ivory/55">
                ID06 · Byggmax
              </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
                            Utforska
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-ivory/65">
                            {explore.map((item) => (
                                <li key={item.href + item.label}>
                                    <Link
                                        href={item.href}
                                        className="transition hover:text-gold-bright hover:underline hover:decoration-gold/50 hover:underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
                            Expertis
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-ivory/65">
                            {expertise.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="transition hover:text-gold-bright hover:underline hover:decoration-gold/50 hover:underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
                            Stockholm
                        </p>
                        <p className="mt-6 font-serif text-base italic leading-relaxed text-ivory/80">
                            Birger Jarlsgatan 22
                            <br />
                            114 34 Stockholm
                        </p>
                        <p className="mt-4 text-sm text-ivory/55">
                            info@nordform.se
                            <br />
                            +46 8 000 00 00
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-bright transition hover:text-ivory"
                        >
                            <span className="h-px w-10 bg-gold" />
                            Boka rådgivning
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-4 px-5 py-6 text-[10px] uppercase tracking-[0.22em] text-ivory/35 md:flex-row md:px-10 lg:px-14">
                    <p>© {new Date().getFullYear()} Nordform AB · Alla rättigheter förbehållna</p>
                    <p className="text-ivory/25">Levererad upplevelse · Konfidentiellt innehåll</p>
                </div>
            </div>
        </footer>
    );
}
