import { ClosingCta } from "@/components/sections/ClosingCta";
import { Costs } from "@/components/sections/Costs";
import { DecisionAid } from "@/components/sections/DecisionAid";
import { Faq } from "@/components/sections/Faq";
import { Handles } from "@/components/sections/Handles";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Timeline } from "@/components/sections/Timeline";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

export default function Home() {
  return (
    <>
      <a
        className="skip-link rounded-pill bg-forest px-4 py-2 text-sm font-semibold text-surface"
        href="#main"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Costs />
        <DecisionAid />
        <Timeline />
        <Handles />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
