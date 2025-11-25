import HeroSection from "@/components/home/hero-section"
import EMICalculator from "@/components/home/emi-calculator"
import ServiceCards from "@/components/home/service-cards"
import WhyChooseUs from "@/components/home/why-choose-us"
import HowItWorks from "@/components/home/how-it-works"
import Testimonials from "@/components/home/testimonials"
import CTAForm from "@/components/home/cta-form"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EMICalculator />
      <ServiceCards />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTAForm />
    </main>
  )
}
