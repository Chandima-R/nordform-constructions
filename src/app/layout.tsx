import type {Metadata} from "next";
import {Bebas_Neue, Cormorant_Garamond, Syne} from "next/font/google";
import "./globals.css";
import {CustomCursor} from "@/components/premium/custom-cursor";
import {ScrollProgress} from "@/components/utills/scroll-progress";
import {SmoothScroll} from "@/components/utills/smooth-scroll";
import {SiteHeader} from "@/components/utills/site-header";
import {SiteFooter} from "@/components/utills/site-footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nordform — Bygg & arkitektur",
    template: "%s | Nordform",
  },
  description:
      "Svenskt byggföretag med fokus på hållbara strukturer, tydlig kommunikation och arkitektonisk precision.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="sv"
          className={`${bebas.variable} ${syne.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
      >
      <body className="min-h-full bg-ivory text-ink">
      <div className="grain-overlay" aria-hidden={true} />
      <CustomCursor />
      <SmoothScroll>
        <ScrollProgress />
        <SiteHeader />
        <div className="flex min-h-full flex-col pt-[72px] md:pt-[88px]">
          {children}
          <SiteFooter />
        </div>
      </SmoothScroll>
      </body>
      </html>
  );
}
