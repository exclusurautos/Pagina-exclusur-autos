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
    brand: "Renault",
    model: "Logan Familier",
    year: 2013,
    price: 27900000,
    image: "/renault-logan-2013-portada.jpg",
    mileage: "129,000 km",
    color: "Rojo fuego",
    transmission: "Mecanica",
    engine: "1.4L",
    fuelType: "Gasolina",
    description:
      "El Renault Logan es un sedán familiar amplio y confiable. Combina economía, comodidad y gran espacio interior, ideal para quienes buscan rendimiento diario sin sacrificar confort.",
    images: ["/renault-logan-2013-portada.jpg", "/renault-logan-2013-frente.jpg", "/rlogan-2013-frente-derecha.jpg", "/renault-logan-2013-cojineria.jpg", "/rlogan2013-interior.jpg", "/rlogan-2013-llanta.jpg", "/renaultlogan2013-atras-derecha.jpg", "/rlogan2013-atras-izq.jpg", "/renault-logan-2013-trasera.jpg"],
  },
  {
    id: 2,
    brand: "Mazda",
    model: "CX-30 Touring",
    year: 2022,
    price: 96900000,
    image: "/cx30-portada.jpeg",
    mileage: "28,000 km",
    color: "Machine Gray",
    transmission: "Automática",
    engine: "2.0L ",
    fuelType: "Gasolina",
    description:
      "La Mazda CX-30 Touring es una SUV moderna que combina diseño sofisticado con tecnología avanzada. Ofrece confort, seguridad y una conducción dinámica para quienes buscan estilo y rendimiento en cada trayecto.",
    images: ["/cx30-portada.jpeg", "/cx30-frente.jpeg", "/cx30-izq.jpeg", "/cx30-interior.jpeg", "/cx30-manubrio.jpeg", "/cx30-llanta.jpeg", "/cx30-atras-der.jpeg", "/cx30-atras-izq.jpeg", "/cx30-palanca.jpeg"],
  },
  {
    id: 3,
    brand: "Mazda",
    model: "Mazda 2 Grad Touring LX",
    year: 2023,
    price: 80900000,
    image: "/mazda2.jpeg",
    mileage: "36,000 km",
    color: "Cuarzo platino",
    transmission: "Automática",
    engine: "1.5L Skyactiv",
    fuelType: "Gasolina",
    description:
      "El Mazda 2 Grand Touring LX integra conectividad, seguridad y acabados de alta calidad en un formato compacto. Equilibrio perfecto entre rendimiento, eficiencia y experiencia de manejo..",
    images: ["/mazda2.jpeg", "/porsche-911-interior.png", "/porsche-911-side.png"],
  },
  {
    id: 4,
    brand: "Mazda",
    model: "CX-30 Grand Touring",
    year: 2022,
    price: 99900000,
    image: "/rcx30-portada.jpg",
    mileage: "56,500 km",
    color: "Rojo Diamante",
    transmission: "Automática",
    engine: "2.0L",
    fuelType: "Gasolina",
    description:
      "La Mazda CX-30 Grand Touring destaca por su elegancia, equipamiento completo y desempeño dinámico. Una camioneta creada para quienes buscan exclusividad, confort y presencia en cada trayecto.",
    images: ["/rcx30-portada.jpg", "/rcx30-1.jpg", "/rcx30-2.jpg", "/rcx30-3.jpg", "/rcx30-4.jpg", "/rcx30-55.jpg", "/rcx30-5.jpg", "/rcx30-6.jpg", "/rcx30-7.jpg"],
  },
  {
    id: 5,
    brand: "Renault",
    model: "Duster Iconic",
    year: 2023,
    price: 79900000,
    image: "/bduster-portada.jpg",
    mileage: "50,000 km",
    color: "Blanco",
    transmission: "Mecánica",
    engine: "1.3L Turbo",
    fuelType: "Gasolina",
    description:
      "La Renault Duster Iconic es una SUV robusta que combina diseño moderno con gran capacidad y rendimiento. Espacio, altura y potencia se unen para ofrecer seguridad y versatilidad en cualquier terreno.",
    images: [
      "/bduster-portada.jpg",
      "/bduster-1.jpg",
      "/bduster-2.jpg",
      "/bduster-3.jpg",
      "/bduster-4.jpg",
      "/bduster-05.jpg",
      "/bduster-5.jpg",
      "/bduster-6.jpg",
      "/bduster-7.jpg",
    ],
  },
  {
    id: 6,
    brand: "Chevrolet",
    model: "NHR",
    year: 2023,
    price: 120900000,
    image: "/nhr-portada.jpg",
    mileage: "38,000 km",
    color: "Blanco",
    transmission: "Mecánica",
    engine: "2.0L",
    fuelType: "Diesel",
    description:
      "El Ferrari F8 Tributo es un homenaje al motor V8 más potente de Ferrari. 720 HP de pura emoción italiana.",
    images: ["/nhr-portada.jpg", "/nhr-2.jpg", "/nhr-3.jpg"],
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
              <SelectItem value="Renault-Logan">Renault Logan</SelectItem>
              <SelectItem value="Mazda">Mazda</SelectItem>
              <SelectItem value="Mazda">Mazda</SelectItem>
              <SelectItem value="Renault">Renault</SelectItem>
              <SelectItem value="Chevrolet">Chevrolet</SelectItem>
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
