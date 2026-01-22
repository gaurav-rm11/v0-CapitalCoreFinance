import HeroSection from "@/components/home/hero-section"
import WorkedWith from "@/components/home/worked-with"
import EMICalculator from "@/components/home/emi-calculator"
import ServiceCards from "@/components/home/service-cards"

import WhyChooseUs from "@/components/home/why-choose-us"
import HowItWorks from "@/components/home/how-it-works"
import Testimonials from "@/components/home/testimonials"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkedWith />
      <EMICalculator />
      <ServiceCards />

      <WhyChooseUs />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Testimonials />
    </main>
  )
}
