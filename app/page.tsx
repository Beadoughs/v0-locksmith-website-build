import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
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
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <HowItWorksSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
      <MobileCTA />
    </main>
  )
}
