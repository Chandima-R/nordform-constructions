import {InfiniteMarquee} from "@/components/motion/infinite-marquee";


const items = [
    "TOTALENTREPRENAD",
    "ARKITEKTUR",
    "PARTNERING",
    "ISO 45001",
    "STOCKHOLM",
    "GÖTEBORG",
    "HÅLLBAR STOMME",
];

export const HeroMarquee = ()=> {
    return <InfiniteMarquee items={items} />;
}
