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
  title: "Exclusur Autos | Carros Usados en Medellín y Envigado — Compra y Venta con Peritaje",
  description:
    "Compra y vende carros usados en Medellín y Envigado con total respaldo. Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación y permutas. Visítanos en Envigado.",
  alternates: {
    canonical: "https://www.exclusurautos.com",
  },
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
