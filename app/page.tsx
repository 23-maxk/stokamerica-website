import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import LeadForm from "@/components/LeadForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <LeadForm />
      <Footer />
    </main>
  )
}
