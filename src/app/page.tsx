import {HeroSection} from "@/components/home/hero-section";
import {HeroMarquee} from "@/components/home/hero-marquee";
import {LuxuryEditorial} from "@/components/home/luxury-editorial";
import {StatsReveal} from "@/components/home/stats-reveal";
import {HomeManifesto} from "@/components/home/home-manifesto";
import {HomeProcess} from "@/components/home/home-process";
import {ServicesLuxury} from "@/components/home/services-luxury";
import {HomeGalleryMosaic} from "@/components/home/home-gallery-mosaic";
import {PortfolioHorizontal} from "@/components/home/portfolio-horizontal";
import {FeaturedStrip} from "@/components/home/featured-strip";
import {HomeCertifications} from "@/components/home/home-certifications";
import {TestimonialsSlider} from "@/components/home/testimonials-slider";
import {TrustRibbon} from "@/components/home/trust-ribbon";
import {HomeInsightStrip} from "@/components/home/home-insights-strip";
import {HomeFaqPremium} from "@/components/home/home-faq-premium";
import {GrandCTA} from "@/components/home/grand-cta";

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
