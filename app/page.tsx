import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScanlineOverlay } from "@/components/scanline-overlay"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src="/cyberpunk-city-wide-bg.jpg"
          alt="Cyberpunk City Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10">
        <ScanlineOverlay />
        <Navbar />
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
          <FeaturesSection />
        </div>
        <StatsSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-magenta/5 to-transparent" />
          <ServicesSection />
        </div>
        <ProjectsSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
          <TeamSection />
        </div>
        <GallerySection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-magenta/5 to-transparent" />
          <TimelineSection />
        </div>
        <TestimonialsSection />
        <FAQSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
          <ContactSection />
        </div>
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
