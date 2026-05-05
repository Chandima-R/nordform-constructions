import {HeroSection} from "@/components/home/hero-section";
import {HeroMarquee} from "@/components/home/hero-marquee";
import {LuxuryEditorial} from "@/components/home/luxury-editorial";

export default function Home() {
  return (
      <main className="flex-1">
        <HeroSection />
        <HeroMarquee />
        <LuxuryEditorial />
        <StatsReveal />
        <HomeManifesto />
        <HomeProcess />
        <ServicesLuxury />
        <HomeGalleryMosaic />
        <PortfolioHorizontal />
        <FeaturedStrip />
        <HomeCertifications />
        <TestimonialsSlider />
        <TrustRibbon />
        <HomeInsightStrip />
        <HomeFaqPremium />
        <GrandCTA />
      </main>
  );
}
