import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-sports-car-in-dark-showroom.jpg"
          alt="Vehículo deportivo de lujo en showroom exclusivo - Exclusur Autos Colombia"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          Confianza, elegancia y respaldo en cada vehículo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Descubre la excelencia en compraventa de vehículos de lujo en Colombia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#inventario">Ver Inventario</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contacto">Contactar</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  )
}
