import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogosMarquee } from "@/components/logos-marquee"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ReviewsSection } from "@/components/reviews-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="h-[3px] bg-primary" />
      <LogosMarquee />
      <div className="h-[2px] bg-accent" />
      <ServicesSection />
      <div className="h-[3px] bg-primary" />
      <WhyUsSection />
      <div className="h-[2px] bg-accent" />
      <ReviewsSection />
      <div className="h-[3px] bg-primary" />
      <HowItWorksSection />
      <div className="h-[2px] bg-accent" />
      <ServiceAreasSection />
      <div className="h-[3px] bg-primary" />
      <CTASection />
      <div className="h-[2px] bg-accent" />
      <Footer />
      <MobileCTA />
    </main>
  )
}
