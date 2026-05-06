export type ProjectCategory =
    | "Bostäder"
    | "Kommersiellt"
    | "Infrastruktur"
    | "Kultur";

export type GridSize = "hero" | "wide" | "tall" | "std";

export type ProjectFAQ = { q: string; a: string };

export type ProjectGalleryItem = {
    src: string;
    alt: string;
    caption?: string;
};

export interface ProjectDetail {
    slug: string;
    title: string;
    city: string;
    year: string;
    category: ProjectCategory;
    excerpt: string;
    coverImage: string;
    size: GridSize;
    headline: string;
    subhead: string;
    intros: string[];
    architect: string;
    client: string;
    services: string[];
    metrics: { label: string; value: string }[];
    gallery: ProjectGalleryItem[];
    challengeTitle: string;
    challengeBody: string;
    solutionTitle: string;
    solutionBody: string;
    timeline: { phase: string; detail: string }[];
    faqs: ProjectFAQ[];
    relatedSlugs: string[];
}

export const PROJECTS: ProjectDetail[] = [
    {
        slug: "sjolyckan",
        title: "Sjölyckan",
        city: "Malmö",
        year: "2024",
        category: "Bostäder",
        excerpt: "Sjönära kvarter med hybrid stomme och passivhusklassning.",
        coverImage:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ef?q=80&w=2000&auto=format&fit=crop",
        size: "hero",
        headline: "LJUST KVAR MED MARIN KARAKTÄR",
        subhead: "Hybrider mellan KL-trä och stål gjorde stommen tyst och snabb att resa nära stadskärnan.",
        intros: [
            "Sjölyckan blev ett pilotprojekt för vår produktionsfilosofi »tydlig struktur — mjuk arkitektur« där prefabricerade västpaneler möttes med platsbyggda betonglägen.",
            "Kvarteret rymmer servicebottenplan, vindskydd och cykelinfra som aktivt kopplas till befintliga stråk vid kanalen — utan att tumma på passivhusgränsvärden.",
        ],
        architect: "Nordväst Arkitekter AB",
        client: "Sjöstad Utveckling AB",
        services: [
            "Partneringprojekt med tidig involvering",
            "Totalansvar för stomme och stomkomplettering",
            "Leverans och logistik för tung trafik nära marin miljö",
        ],
        metrics: [
            { label: "BTA totalt", value: "94 800 m²" },
            { label: "Lägenheter", value: "712" },
            { label: "Energiklass", value: "Nära nolla" },
            { label: "Byggtid", value: "36 mån" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
                alt: "Fasad i solnedgång",
                caption: "Fasadskift i naturmaterial — tegel möter ljusfibercementpanel.",
            },
            {
                src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
                alt: "Innergårdsliv",
            },
            {
                src: "https://images.unsplash.com/photo-1600566753376-12c425ab9740?q=80&w=1600&auto=format&fit=crop",
                alt: "Detaljskärning ljus och betong",
                caption: "Bottenplans affärsläge med flexibilitet för framtidens servicekoncept.",
            },
        ],
        challengeTitle: "Marin mikroklimat & logistik i tät stad",
        challengeBody:
            "Leveranser via smala stråk, salt i luften och höga säkerhetskrav på samtidiga entreprenader krävde en tätt orchestrerad byggbod och ett gemensamt trafikeditionsprogram.",
        solutionTitle: "Kvartsvisa logistikluckor och klimatkontrollerad park",
        solutionBody:
            "Moduluppställningszoner kopplades till BIM-leveranser; varje kritisk lyft passerade säkerhetsbunker för att säkra passerande flöden vid kanalen.",
        timeline: [
            { phase: "Program", detail: "Parallella workshoppar mellan arkitekt, installation och struktur." },
            { phase: "Stomprojektering", detail: "Kollisionsrensning mellan KL-trästomme och hissgränssnitt." },
            { phase: "Komplettering", detail: "Fasadlinjer provmonterades i fyra pilotschakt." },
            { phase: "Inflytt", detail: "Fasindelad överlämning med dokumenterade servicepunkter." },
        ],
        faqs: [
            {
                q: "Varför hybrid stommaterial?",
                a: "Trä för klimatskäl och ljuddämpande våningsplan kombinerades med en stålcell i hisskärnan för högre styvhet nära höga vindlaster vid vattnet.",
            },
            {
                q: "Hur säkrades säkerhetsarbetet?",
                a: "ISO 45001-uppföljning veckovis och gemensamt inträdeskortsystem mot tre parallella entreprenörer vid kajen.",
            },
        ],
        relatedSlugs: ["langbro-park", "brohusen"],
    },
    {
        slug: "logistikhub-norr",
        title: "Logistikhub Norr",
        city: "Uppsala",
        year: "2023",
        category: "Kommersiellt",
        excerpt: "Höglagring med tempererade zoner och automatiserad lastmiljö.",
        coverImage:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
        size: "tall",
        headline: "TEMPO I KALLA & VARMA ZONER",
        subhead: "En logistikhub där kylfiléer, cross-dock och robotlyft delar samma planlogik.",
        intros: [
            "Fastigheten krävde en stomme med spännvidder som klarar tunga truckflöden samtidigt som tempererade skikt skulle isoleras utan köldbryggor mot lagerdelen.",
            "Nordform ledde projektering av installationsschakt parallellt med geoteknisk riskreducering i moränområde.",
        ],
        architect: "Studio Logistik & Form",
        client: "Nordic Distribution Group",
        services: [
            "Totalentreprenad",
            "Temporela produktionsbyggnader",
            "Specialanpassning mot automation",
        ],
        metrics: [
            { label: "Lageryta", value: "68 000 m²" },
            { label: "Mål-LEED", value: "Silver" },
            { label: "Köldzoner", value: "9" },
            { label: "Lastportar", value: "112" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1581092160562-40aa08e66837?q=80&w=1600&auto=format&fit=crop",
                alt: "Produktion inomhus",
            },
            {
                src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
                alt: "Stominstallation",
            },
        ],
        challengeTitle: "Samtidigt kyla, brand och höga puntlast",
        challengeBody:
            "Klassade kylväggar, brandsektionering och höga jämnlastpunkter måste dokumenteras för både försäkringsrisk och framtidigt ombyggnadsscenario.",
        solutionTitle: "Samordnad modellanalys per zon",
        solutionBody:
            "Vi kopplade kyltekniska ytor direkt till en master-BIM för att verifiera kombinationerna brandcell / U-värden per väggliv.",
        timeline: [
            { phase: "Mark", detail: "Pålningsgrundläggning med vibrationssäkrad logistikmotorväg." },
            { phase: "Stålstomme", detail: "Förmonterade bindningar för truckgaller." },
            { phase: "Inredning zon", detail: "Kylisolering först innan hissinstallation." },
        ],
        faqs: [
            { q: "Kan ombyggnad ske under drift?", a: "Ja — planen möjliggör partiella driftstopp i skiften utan samtidig nedstängning av kylfiler." },
        ],
        relatedSlugs: ["vastra-sjukhuset-tillbyggnad", "campusbron"],
    },
    {
        slug: "campusbron",
        title: "Campusbron",
        city: "Linköping",
        year: "2025",
        category: "Kommersiellt",
        excerpt: "Kontorslandskap med flexibla plan och central ljusgård.",
        coverImage:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        size: "std",
        headline: "KONTOR MED LJUSRÖR",
        subhead: "Heltäckande glimmerbjälkar i massiv limträ bildar den centrala ljusgården över aktivitetsytor.",
        intros: [
            "Campusbron skulle brygga två universitetsceller med flexibla ytor för forskningsnära företag — utan att stänga ljuset från sydväst.",
            "Projektet blev ram för vår arbetsmodell för parallella installationsspår kopplade till platsbunden kvalitetsinventering.",
        ],
        architect: "White Arkitekter (koncept)",
        client: "Campus Syd Utveckling",
        services: ["Partnering", "Stomkomplettering", "Ytskikt i publika stråk"],
        metrics: [
            { label: "Kontorsyta", value: "18 900 m²" },
            { label: "Ljusplan", value: "4 zonlager" },
            { label: "Flexmodul", value: "1,35 grid" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
                alt: "Ljus entréhall",
            },
        ],
        challengeTitle: "Flexibilitet för framtida hyresorganisation",
        challengeBody:
            "Hybridarbetsplaner och snabba förändringar i hyreskontrakt ställde krav på större toleranser i förankring av innerväggar.",
        solutionTitle: "Modulstyrd infrastruktsmatris",
        solutionBody:
            "Vi dokumenterade en matris för kabelvägar och ventilationsförgrening som kunde flytta utan perforering av stomkomponenter.",
        timeline: [
            { phase: "Workshopserie", detail: "6 parallella intressenthållplatser för installation." },
            { phase: "Stomme KL", detail: "Tredjedels förfinering av limträtak före klimatskal." },
        ],
        faqs: [
            { q: "Är ljusplanen dokumenterad för drift?", a: "Ja, med ljusdiagram per tid på dygnet och utbytesplan för fixturet under garantiperiod." },
        ],
        relatedSlugs: ["konserthus-renovering", "logistikhub-norr"],
    },
    {
        slug: "langbro-park",
        title: "Långbro park",
        city: "Stockholm",
        year: "2022",
        category: "Bostäder",
        excerpt: "Villor och radhus i massivträ med gemensamma naturrum.",
        coverImage:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
        size: "std",
        headline: "MASSIVT TRÄ MOT GRÖNSKA",
        subhead: "Radhuskedjor med naturrum kopplade till elljus och regnbädd.",
        intros: [
            "Långbro park blev prototyp för vår naturstrategi »regnbädde gränsytor« där samtliga husgrupper delar infiltrationszoner dokumenterade mot dagvattenrevision.",
            "Massiv trävägg mot råspont i sovloft gav dokumenterad lättnad i värmeflödesberäkning.",
        ],
        architect: "Lundén Architecture",
        client: "Folksam Fastigheter",
        services: ["Totalentreprenad småhus", "Landskapssamordning"],
        metrics: [
            { label: "Boarea", value: "11 600 m²" },
            { label: "Husmoduler", value: "38" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
                alt: "Radhus vid skogsbryn",
            },
        ],
        challengeTitle: "Många små beställargränssnitt",
        challengeBody:
            "Friget samråd med boenderåd och kommunens naturvårdskonsult parallellt med bygglovsgräns mot elljusspår.",
        solutionTitle: "Veckovisa dialogforum",
        solutionBody:
            "Samordnade möten där tekniska frågor visualiserades i VR för att minska oklarheter kring grannpåverkan.",
        timeline: [
            { phase: "Grund", detail: "Isolerad platta mot kapillärbrytande lager." },
            { phase: "Stomme", detail: "Massiva väggblock med robotstyrd precision." },
        ],
        faqs: [
            { q: "Hur hanterades buller mot elljusspår?", a: "Kombination av bullervall, skogskant och fasadabsorbent i sovloft." },
        ],
        relatedSlugs: ["sjolyckan", "brohusen"],
    },
    {
        slug: "centraltunneln-etapp-b",
        title: "Centraltunneln etapp B",
        city: "Göteborg",
        year: "2021",
        category: "Infrastruktur",
        excerpt: "Störning minimalt mot cityhandel — nattproducerade etapper.",
        coverImage:
            "https://images.unsplash.com/photo-1590644367637-bb6b919503e8?q=80&w=2000&auto=format&fit=crop",
        size: "wide",
        headline: "NATTETAKT I CITYKÄRNAN",
        subhead: "Tunnelsträcka under handelsstråk med styrd vibrationsövervakning mot känsliga fastigheter.",
        intros: [
            "I etapp B ingick sprängsäkrade infarter, temporära stålöverbyggnader och samverkan med spårvägsdrift som aldrig fick stoppas mer än minuter.",
            "Nordform fungerade som produktionsintegratör mot flera underentreprenörer i skiften om 12 timmar.",
        ],
        architect: "Trafikverket / intern projektering",
        client: "Göteborgs Stad",
        services: ["Produktionsledning", "Säkerhetssamordning", "Nattlogistik"],
        metrics: [
            { label: "Tunnel längd", value: "640 m" },
            { label: "Nattpass", value: "612" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
                alt: "Schakt med belysning",
            },
        ],
        challengeTitle: "Minimal störning för handeln ovan schakt",
        challengeBody:
            "Leveranser måste hämtas mellan busstrafikfenster och säkerhet mot vibrationss sprängning skulle verifieras kontinuerligt.",
        solutionTitle: "Realtidsvibrationskluster",
        solutionBody:
            "Sensorpaket kopplades till dashboards som stängde kritiska moment automatiskt om trösklar överskrids.",
        timeline: [
            { phase: "Förberedande", detail: "Stålprofiler för täckning över befintliga källarvalv." },
            { phase: "Spräng och uttag", detail: "Digital avstämning mellan bergborr och räddningstjänst." },
        ],
        faqs: [
            { q: "Kan liknande modell för Uppsala city?", a: "Ja — metodiken är skalbar och redan paketerad i vår infra-playbook." },
        ],
        relatedSlugs: ["logistikhub-norr", "vastra-sjukhuset-tillbyggnad"],
    },
    {
        slug: "konserthus-renovering",
        title: "Konserthus renovering",
        city: "Umeå",
        year: "2024",
        category: "Kultur",
        excerpt: "Akustik och historiska ytor i fint samspel med ny teknik.",
        coverImage:
            "https://images.unsplash.com/photo-1518005020951-ecc495e515d5?q=80&w=2000&auto=format&fit=crop",
        size: "std",
        headline: "AKUSTIK MED RESPEKT FÖR PATINA",
        subhead: "Historiska stuckaturer kapslades mikroskofigt innan teknikvägg för modern scenljusinstallerades.",
        intros: [
            "Renoveringen var obligatorisk enligt Kulturmiljölagen och krävde reversibla montage för nya ljusbryggor.",
            "Vårt team säkerställde att vibrationsgränser höll även vid tunga hisslyft för orgelensemble.",
        ],
        architect: "Arkitekterna Krook & Tjäder",
        client: "Umeå Kulturarena AB",
        services: ["Stödjande struktur", "Tillfälligt tak under renovering", "Installationsskydd"],
        metrics: [
            { label: "Publikplatser", value: "1 260" },
            { label: "Renoverade ytor", value: "8 200 m²" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
                alt: "Ställning på scen",
            },
        ],
        challengeTitle: "Minimal påverkan på akustiska volymer",
        challengeBody:
            "Även små strukturförändringar kunde rubba akustiska reflexer — varje stag dokumenterades mot originalritningarna från 1980.",
        solutionTitle: "Laserstöd för provmontering",
        solutionBody:
            "Tekniska lösningar provades i partiell prototypscen innan huvudingrepp gjordes i salens kupol.",
        timeline: [
            { phase: "Kartläggning", detail: "3D-scan av stuck och ornament." },
            { phase: "Mikroring", detail: "Temporär stöttning av kritiska valvsegment." },
        ],
        faqs: [
            { q: "Hur hanteras brandskydd för trädekoration?", a: "Med reversibla intumescentbehandlingar dokumenterade i skyddsddslogg." },
        ],
        relatedSlugs: ["campusbron", "sjolyckan"],
    },
    {
        slug: "vastra-sjukhuset-tillbyggnad",
        title: "Västra sjukhuset tillbyggnad",
        city: "Västerås",
        year: "2026",
        category: "Kommersiellt",
        excerpt: "Modulära enheter kopplade till befintlig drift utan stopp.",
        coverImage:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
        size: "tall",
        headline: "DRIFT I FOKUS — ALLTID PÅSLAGET SJUKHUS",
        subhead: "Modulpodder kopplades med broar till aktiv operationsfunktion dygnet runt.",
        intros: [
            "Projektets risk låg i att avancerad medicinteknisk elkraft måste säkerställas medan befintliga operationslinjer inte fick nedstängas.",
            "Nordforms kontrollhubb koordinerade installation i 90-minuters fönster nattetid.",
        ],
        architect: "White Arkitekter",
        client: "Region Västmanland",
        services: ["Modulmontage", "Elkraftsintegrering", "Byggstädklass H"],
        metrics: [
            { label: "Moduler", value: "84" },
            { label: "Operationsspår löpande", value: "3" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
                alt: "Korridor sjukhus",
            },
        ],
        challengeTitle: "El och medicinska gastoler i samma shaft",
        challengeBody:
            "Installationsschakt måste säkerställa klasstillhörigheter enligt SIS utan krysskoppling mellan kritiska läkemedelslager och allmän drift.",
        solutionTitle: "Digital twin för driftsschema",
        solutionBody:
            "Driftsschema kopplades mot modulerna i realtid för att flagga för fönster för ingrepp.",
        timeline: [
            { phase: "Förstudie drift", detail: "Sjuksköterskedialog + logistikkartor." },
            { phase: "Modulserie 1–3", detail: "Nattmontage kopplade mot brotunnel." },
        ],
        faqs: [
            { q: "Hur påverkas patientsäkerhet?", a: "Alla ingrepp följer medicinska SOP — byte av skylt och brandcell loggas i HMS." },
        ],
        relatedSlugs: ["centraltunneln-etapp-b", "campusbron"],
    },
    {
        slug: "brohusen",
        title: "Brohusen",
        city: "Helsingborg",
        year: "2023",
        category: "Bostäder",
        excerpt: "Balkonglandskap och skyddad cykelinfrastruktur i bottenplan.",
        coverImage:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        size: "std",
        headline: "BALKONGLANDSKAP MOT ÖRESUND",
        subhead: "Varje höghusläkt fick egen vindabsorberande balkongprofiler som kopplades till stommens linjetoleranser.",
        intros: [
            "Brohusen visar på hur höga höghus kombineras med säker cykelinfrastruktur klassad enligt Trafikverkets stadsguide.",
            "Projektets signum är förmonterade balkonger som hissades på plats för att minska höjdarbetet vid fasadlinjen.",
        ],
        architect: "Kjellgren Kaminsky Architecture",
        client: "Helsingborgs Stadshus AB",
        services: ["Höghus stomme i betong", "Balkongindustriellt montageprogram"],
        metrics: [
            { label: "Våningsplan", value: "24" },
            { label: "Balkonger", value: "312" },
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
                alt: "Höga hus vid vattnet",
            },
        ],
        challengeTitle: "Limning av balkonger i vindklass",
        challengeBody:
            "Högst upp passerade vindgräns 28 m/s vilket krävde specialtest av infästningslösning för betongkulvert.",
        solutionTitle: "Provlyft på testställning vid hamn",
        solutionBody:
            "Fullskaleprov genomfördes kopplat till FEM-analys för att dokumentera säkerhetsmarginal för myndighet.",
        timeline: [
            { phase: "Kulvert", detail: "Kontrollerade injekteringar mot infiltrationsrisk." },
            { phase: "Volym höjd", detail: "Balkongserie A–D monterades i slinga." },
        ],
        faqs: [
            { q: "Hur servas fasader högt?", a: "RDA-system med säkra linor integrerades i arkitektur utan visuellt brus." },
        ],
        relatedSlugs: ["sjolyckan", "langbro-park"],
    },
];

export function getProjectSlugs(): string[] {
    return PROJECTS.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
    return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(slugs: string[]): ProjectDetail[] {
    return slugs
        .map((s) => getProjectBySlug(s))
        .filter((p): p is ProjectDetail => Boolean(p));
}
