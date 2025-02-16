import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import TeaPhilosophy from '@/components/TeaPhilosophy'
import { TeaConsultation } from '@/components/TeaConsultation'
import { TeaShop } from '@/components/TeaShop'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <TeaPhilosophy />
      <TeaConsultation />
      <TeaShop />
      <Footer />
    </main>
  )
}
