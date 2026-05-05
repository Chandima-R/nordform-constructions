"use client";

type Props = {
    items: string[];
    className?: string;
    /** Text size / tracking utility classes for the row */
    textClassName?: string;
    /** Inner track animation class (tailwind @keyframes marquee) */
    trackClassName?: string;
};

export const InfiniteMarquee = ({
                                    items,
                                    className = "",
                                    textClassName = "",
                                    trackClassName = "animate-marquee",
                                }: Props)=> {
    const doubled = [...items, ...items];

    return (
        <div
            className={`relative flex overflow-hidden border-y border-gold-dim/80 bg-ink text-ivory ${className}`}
        >
            <div
                className={`flex shrink-0 items-center gap-10 whitespace-nowrap py-4 md:gap-16 md:py-5 ${trackClassName}`}
                style={{ width: "max-content" }}
            >
                {doubled.map((item, i) => (
                    <span
                        key={`${item}-${i}`}
                        className={`flex items-center gap-10 font-display text-3xl tracking-[0.2em] md:gap-16 md:text-4xl lg:text-5xl ${textClassName || "text-gold/90"}`}
                    >
            <span>{item}</span>
            <span className="text-gold-dim" aria-hidden>
              ◆
            </span>
          </span>
                ))}
            </div>
        </div>
    );
}
