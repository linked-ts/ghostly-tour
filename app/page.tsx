import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tours from '@/components/Tours'

import Testimonials from '@/components/Testomonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <Header />
      <Hero />
      <About />
      <Tours />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}