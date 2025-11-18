"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const vehicles = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "AMG GT",
    year: 2023,
    price: 450000000,
    image: "/mercedes-amg-gt-black.jpg",
    mileage: "5,000 km",
    color: "Negro",
    transmission: "Automática",
    engine: "4.0L V8 Biturbo",
    fuelType: "Gasolina",
    description:
      "El Mercedes-AMG GT es un deportivo de alto rendimiento con motor V8 biturbo. Combina lujo alemán con potencia excepcional.",
    images: ["/mercedes-amg-gt-black.jpg", "/mercedes-amg-gt-interior.jpg", "/mercedes-amg-gt-engine.jpg"],
  },
  {
    id: 2,
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 380000000,
    image: "/bmw-m4-competition-silver.jpg",
    mileage: "2,000 km",
    color: "Plateado",
    transmission: "Automática",
    engine: "3.0L I6 Turbo",
    fuelType: "Gasolina",
    description:
      "El BMW M4 Competition ofrece 510 HP de pura adrenalina con su motor de 6 cilindros en línea. Diseño deportivo y tecnología de punta.",
    images: ["/bmw-m4-competition-silver.jpg", "/bmw-m4-interior.png", "/bmw-m4-rear-view.jpg"],
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2023,
    price: 520000000,
    image: "/porsche-911-turbo-s-white.jpg",
    mileage: "8,000 km",
    color: "Blanco",
    transmission: "Automática",
    engine: "3.8L Boxer 6 Turbo",
    fuelType: "Gasolina",
    description:
      "El icónico Porsche 911 Turbo S con motor boxer de 640 HP. Un clásico atemporal con tecnología moderna y desempeño excepcional.",
    images: ["/porsche-911-turbo-s-white.jpg", "/porsche-911-interior.png", "/porsche-911-side.png"],
  },
  {
    id: 4,
    brand: "Audi",
    model: "RS6 Avant",
    year: 2024,
    price: 420000000,
    image: "/audi-rs6-avant-gray.jpg",
    mileage: "3,500 km",
    color: "Gris",
    transmission: "Automática",
    engine: "4.0L V8 Biturbo",
    fuelType: "Gasolina",
    description:
      "El Audi RS6 Avant combina la practicidad de una station wagon con el desempeño de un superdeportivo. Motor V8 biturbo de 600 HP.",
    images: ["/audi-rs6-avant-gray.jpg", "/audi-rs6-interior.jpg", "/audi-rs6-cargo-space.jpg"],
  },
  {
    id: 5,
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    price: 680000000,
    image: "/lamborghini-huracan-evo-orange.jpg",
    mileage: "4,200 km",
    color: "Naranja",
    transmission: "Automática",
    engine: "5.2L V10",
    fuelType: "Gasolina",
    description:
      "El Lamborghini Huracán EVO con motor V10 de 640 HP. Diseño agresivo italiano y desempeño que quita el aliento.",
    images: [
      "/lamborghini-huracan-evo-orange.jpg",
      "/lamborghini-huracan-interior.jpg",
      "/lamborghini-huracan-engine-bay.jpg",
    ],
  },
  {
    id: 6,
    brand: "Ferrari",
    model: "F8 Tributo",
    year: 2023,
    price: 750000000,
    image: "/ferrari-f8-tributo-red.jpg",
    mileage: "6,000 km",
    color: "Rojo",
    transmission: "Automática",
    engine: "3.9L V8 Turbo",
    fuelType: "Gasolina",
    description:
      "El Ferrari F8 Tributo es un homenaje al motor V8 más potente de Ferrari. 720 HP de pura emoción italiana.",
    images: ["/ferrari-f8-tributo-red.jpg", "/ferrari-f8-interior.jpg", "/ferrari-f8-rear-view.jpg"],
  },
]

export { vehicles }

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [brandFilter, setBrandFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = brandFilter === "all" || vehicle.brand === brandFilter
    const matchesYear = yearFilter === "all" || vehicle.year.toString() === yearFilter
    return matchesSearch && matchesBrand && matchesYear
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="inventario" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nuestro Inventario</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vehículos exclusivos seleccionados con los más altos estándares de calidad
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <Input
            placeholder="Buscar marca o modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
            aria-label="Buscar vehículos por marca o modelo"
          />
          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger className="w-full md:w-48" aria-label="Filtrar por marca">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las marcas</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Porsche">Porsche</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="Lamborghini">Lamborghini</SelectItem>
              <SelectItem value="Ferrari">Ferrari</SelectItem>
            </SelectContent>
          </Select>
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-full md:w-48" aria-label="Filtrar por año">
              <SelectValue placeholder="Año" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los años</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden group hover:border-primary transition-colors">
              <Link href={`/vehiculo/${vehicle.id}`}>
                <div className="relative h-64 overflow-hidden cursor-pointer">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.color} - ${vehicle.mileage} - Vehículo de lujo usado en venta`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{vehicle.brand}</div>
                <Link href={`/vehiculo/${vehicle.id}`}>
                  <h3 className="font-serif text-2xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                    {vehicle.model}
                  </h3>
                </Link>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{vehicle.year}</span>
                  <span>{vehicle.mileage}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Color: {vehicle.color}</div>
                <div className="text-sm text-muted-foreground mb-2">Transmisión: {vehicle.transmission}</div>
                <div className="text-sm text-muted-foreground mb-2">Motor: {vehicle.engine}</div>
                <div className="text-sm text-muted-foreground mb-2">Tipo de Combustible: {vehicle.fuelType}</div>
                <div className="text-2xl font-bold text-primary">{formatPrice(vehicle.price)}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a
                    href={`https://wa.me/573001234567?text=Hola, estoy interesado en el ${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar por WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
