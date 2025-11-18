"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { vehicles } from "@/components/inventory"

export default function VehicleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const vehicleId = Number(params.id)

  const vehicle = vehicles.find((v) => v.id === vehicleId)

  const [selectedImage, setSelectedImage] = useState(0)

  if (!vehicle) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Vehículo no encontrado</h1>
            <Button onClick={() => router.push("/#inventario")}>Volver al inventario</Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const displayImages = vehicle.images.slice(0, 10)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % displayImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }

  const getImageAlt = (index: number) => {
    const views = [
      "vista frontal",
      "vista interior",
      "vista del motor",
      "vista lateral",
      "vista trasera",
      "detalle del volante",
      "sistema de entretenimiento",
      "asientos",
      "maletero",
      "detalle de rines",
    ]
    return `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${views[index] || `imagen ${index + 1}`} - ${vehicle.color}`
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-24">
        <Button variant="ghost" onClick={() => router.push("/#inventario")} className="mb-8 hover:bg-secondary">
          <ArrowLeft className="mr-2" size={20} />
          Volver al inventario
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group">
              <img
                src={displayImages[selectedImage] || "/placeholder.svg"}
                alt={getImageAlt(selectedImage)}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {displayImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedImage === index ? "bg-primary w-6" : "bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${vehicle.brand} ${vehicle.model} miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{vehicle.brand}</p>
              <h1 className="font-serif text-5xl font-bold mb-4">{vehicle.model}</h1>
              <div className="text-4xl font-bold text-primary mb-6">{formatPrice(vehicle.price)}</div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-4">Especificaciones</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Año</p>
                    <p className="font-semibold">{vehicle.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Kilometraje</p>
                    <p className="font-semibold">{vehicle.mileage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Marca</p>
                    <p className="font-semibold">{vehicle.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Modelo</p>
                    <p className="font-semibold">{vehicle.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold">{vehicle.color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transmisión</p>
                    <p className="font-semibold">{vehicle.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Motor</p>
                    <p className="font-semibold">{vehicle.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Combustible</p>
                    <p className="font-semibold">{vehicle.fuelType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-4">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button asChild className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href={`https://wa.me/573001234567?text=Hola, estoy interesado en el ${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full h-12 bg-transparent">
                <a href="tel:+573001234567">
                  <Phone className="mr-2" size={20} />
                  Llamar ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
