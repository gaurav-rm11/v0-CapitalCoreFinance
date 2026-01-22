import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-[#B8BCC4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a1a2e]">What Our Clients Say</h2>
          <p className="text-lg text-[#2a2a3e] font-medium max-w-2xl mx-auto">
            Real feedback from our satisfied business clients.
          </p>
        </div>
      </div>

      <div className="w-full">
        <StaggerTestimonials />
      </div>
    </section>
  )
}
