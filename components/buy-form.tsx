"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function BuyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredBrand: "",
    preferredModel: "",
    year: "",
    budget: "",
    preferences: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your backend
    console.log("Form submitted:", formData)
    alert("Gracias por tu interés. Buscaremos el vehículo perfecto para ti.")
  }

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\./g, "")
    if (value === "" || /^\d+$/.test(value)) {
      setFormData({ ...formData, budget: value })
    }
  }

  const formatBudgetDisplay = (value: string) => {
    if (!value) return ""
    return new Intl.NumberFormat("es-CO").format(Number(value))
  }

  return (
    <section id="comprar" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Encuentra tu Vehículo Ideal</h2>
            <p className="text-muted-foreground text-lg">
              Déjanos tus preferencias y te ayudaremos a encontrar el auto perfecto
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tus Preferencias</CardTitle>
              <CardDescription>
                Cuéntanos qué estás buscando y te contactaremos con las mejores opciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="buy-name">Nombre completo</Label>
                    <Input
                      id="buy-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buy-email">Correo electrónico</Label>
                    <Input
                      id="buy-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buy-phone">Teléfono</Label>
                    <Input
                      id="buy-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredBrand">Marca preferida</Label>
                    <Input
                      id="preferredBrand"
                      value={formData.preferredBrand}
                      onChange={(e) => setFormData({ ...formData, preferredBrand: e.target.value })}
                      placeholder="Ej: Mercedes-Benz, BMW, Porsche"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredModel">Modelo preferido</Label>
                    <Input
                      id="preferredModel"
                      value={formData.preferredModel}
                      onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                      placeholder="Ej: AMG GT, M4, 911"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Año</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="Escribe cualquier año"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="budget">Presupuesto (COP)</Label>
                    <Input
                      id="budget"
                      type="text"
                      value={formatBudgetDisplay(formData.budget)}
                      onChange={handleBudgetChange}
                      placeholder="Ej: 120.000.000"
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="preferences">Preferencias adicionales</Label>
                    <Textarea
                      id="preferences"
                      value={formData.preferences}
                      onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                      rows={4}
                      placeholder="Color, características especiales, uso previsto..."
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Buscar mi Vehículo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
