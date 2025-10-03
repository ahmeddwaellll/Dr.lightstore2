import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Marketplace } from '@/components/Marketplace'
import { BoostCalculator } from '@/components/BoostCalculator'
import { DeckBuilder } from '@/components/DeckBuilder'
import { CheckoutDrawer } from '@/components/CheckoutDrawer'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <Marketplace />
      <BoostCalculator />
      <DeckBuilder />
      <CheckoutDrawer />
      <Footer />
    </main>
  )
}