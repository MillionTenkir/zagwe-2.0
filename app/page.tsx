import { Header } from "@/components/header"
import { PromoSection } from "@/components/promo-section"
import { HamperSection } from "@/components/hamper-section"
import { DishesSection } from "@/components/dishes-section"
import { BestsellersSection } from "@/components/bestsellers-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <PromoSection />
      <HamperSection />
      <DishesSection />
      <BestsellersSection />
      <Footer />
    </main>
  )
}
