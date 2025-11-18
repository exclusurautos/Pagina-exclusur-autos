import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Inventory } from "@/components/inventory"
import { SellForm } from "@/components/sell-form"
import { BuyForm } from "@/components/buy-form"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Exclusur Autos - Inicio | Vehículos de Lujo en Colombia",
  description:
    "Descubre nuestra exclusiva colección de vehículos de lujo en Colombia. Mercedes-Benz, BMW, Porsche, Ferrari y más. Compra y venta con garantía y respaldo profesional.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Inventory />
      <SellForm />
      <BuyForm />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
