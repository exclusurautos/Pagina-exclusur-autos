"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { vehicles } from "@/lib/vehicles"

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
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.color} - ${vehicle.mileage} - Carro usado en venta en Medellín`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {vehicle.sold && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white font-bold text-xl px-6 py-2 rotate-[-15deg] tracking-widest shadow-lg">
                        VENDIDO
                      </span>
                    </div>
                  )}
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
                    href={`https://wa.me/573105059178?text=Hola, estoy interesado en el ${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
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
