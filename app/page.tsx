import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Gallery from "@/components/Gallery"
import VideoSection from "@/components/VideoSection"
import Testimonials from "@/components/Testimonials"
import Services from "@/components/Services"
import InsuranceClaims from "@/components/InsuranceClaims"
import Warranty from "@/components/Warranty"
import Comparison from "@/components/Comparison"
import BigCTA from "@/components/BigCTA"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <Services />
      <InsuranceClaims />
      <Warranty />
      <Comparison />
      <BigCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
