"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {LayoutGroup, motion} from "framer-motion";

const links = [
    { href: "/", label: "Hem" },
    { href: "/about", label: "Om oss" },
    { href: "/projects", label: "Projekt" },
    { href: "/contact", label: "Kontakt" },
];

export const SiteHeader = ()=> {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
                scrolled
                    ? "border-ember/20 bg-graphite/94 text-ivory shadow-[0_12px_40px_-14px_rgba(0,0,0,0.5)]"
                    : "border-stone-200/80 bg-ivory/88 text-ink"
            }`}
        >
            <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 px-5 py-4 md:px-10 lg:px-14">
                <Link
                    href="/"
                    className={`font-display text-2xl tracking-[0.14em] md:text-3xl ${
                        scrolled ? "text-ivory" : "text-ink"
                    }`}
                >
                    NORD
                    <span className={scrolled ? "text-ember-bright" : "text-ember"}>FORM</span>
                </Link>
                <div className="hidden items-center gap-10 md:flex">
                    <LayoutGroup>
                        <nav
                            className={`flex items-center gap-9 text-[11px] font-bold uppercase tracking-[0.28em] ${
                                scrolled ? "text-ivory/75" : "text-ink/70"
                            }`}
                        >
                            {links.map(({ href, label }) => {
                                const active = pathname === href;
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`relative py-1 transition-colors hover:text-ember ${
                                            active ? (scrolled ? "text-ivory" : "text-ink") : ""
                                        }`}
                                    >
                                        {label}
                                        {active ? (
                                            <motion.span
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 left-0 right-0 h-px bg-ember"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        ) : null}
                                    </Link>
                                );
                            })}
                        </nav>
                    </LayoutGroup>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="/contact"
                            className={`inline-flex items-center border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.32em] transition ${
                                scrolled
                                    ? "border-ember/55 text-ivory hover:border-ember hover:bg-ember/10"
                                    : "border-graphite/20 text-ink hover:border-ember hover:bg-ember-soft"
                            }`}
                        >
                            Boka möte
                        </Link>
                    </motion.div>
                </div>
                <MobileNav pathname={pathname} scrolled={scrolled} />
            </div>
        </motion.header>
    );
}

function MobileNav({
                       pathname,
                       scrolled,
                   }: {
    pathname: string;
    scrolled: boolean;
}) {
    return (
        <nav
            className={`flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider md:hidden ${
                scrolled ? "text-ivory/80" : "text-ink/75"
            }`}
        >
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={pathname === href ? (scrolled ? "text-gold-bright" : "text-gold") : ""}
                >
                    {label}
                </Link>
            ))}
            <Link
                href="/contact"
                className={
                    scrolled
                        ? "rounded-full border border-gold/40 px-3 py-1 text-gold-bright"
                        : "rounded-full border border-ink/15 px-3 py-1 text-ink"
                }
            >
                Möte
            </Link>
        </nav>
    );
}
