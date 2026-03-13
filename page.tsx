import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { StatsDashboard } from "@/components/stats-dashboard"
import { ChartSection } from "@/components/chart-section"
import { Roadmap } from "@/components/roadmap"
import { WalletConnect } from "@/components/wallet-connect"
import { SocialCounters } from "@/components/social-counters"
import { Community } from "@/components/community"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <Features />
      <StatsDashboard />
      <ChartSection />
      <Roadmap />
      <WalletConnect />
      <SocialCounters />
      <Community />
      <Newsletter />
      <Footer />
    </main>
  )
}
