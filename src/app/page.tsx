import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import StatsSection from "@/components/stats"
import Testimonials from "@/components/testimonials"
import FAQs from "@/components/faqs"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <FAQs />
      <CallToAction />
    </>
  )
}
