import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import TeaPhilosophy from '@/components/TeaPhilosophy'
import { TeaShop } from '@/components/TeaShop'
import { TeaConsultation } from '@/components/TeaConsultation'
import CreativeTimeline from '@/components/CreativeTimeline'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Portfolio />
      <CreativeTimeline />
      <TeaPhilosophy />
      <TeaShop />
      <TeaConsultation />
      <Footer />
    </main>
  )
}
