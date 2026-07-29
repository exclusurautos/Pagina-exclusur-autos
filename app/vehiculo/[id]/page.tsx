import type { Metadata } from "next"
import { vehicles } from "@/lib/vehicles"
import { VehicleDetailClient } from "./VehicleDetailClient"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    id: vehicle.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const vehicle = vehicles.find((v) => v.id === Number(id))

  if (!vehicle) {
    return { title: "Vehículo no encontrado | Exclusur Autos" }
  }

  const title = `${vehicle.brand} ${vehicle.model} ${vehicle.year} — ${new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(vehicle.price)} | Exclusur Autos`
  const description = `${vehicle.brand} ${vehicle.model} ${vehicle.year} en venta en Envigado. ${vehicle.mileage}, color ${vehicle.color}, transmisión ${vehicle.transmission}. ${vehicle.description}`

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.exclusurautos.com/vehiculo/${vehicle.id}`,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `https://www.exclusurautos.com/vehiculo/${vehicle.id}`,
      images: [
        {
          url: vehicle.image,
          width: 1200,
          height: 630,
          alt: `${vehicle.brand} ${vehicle.model} ${vehicle.year} - Exclusur Autos`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [vehicle.image],
    },
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { id } = await params
  const vehicle = vehicles.find((v) => v.id === Number(id))

  const parseMileage = (mileage: string) =>
    parseInt(mileage.replace(/[^0-9]/g, ""), 10)

  const carSchema = vehicle
    ? {
        "@context": "https://schema.org",
        "@type": "Car",
        name: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
        brand: {
          "@type": "Brand",
          name: vehicle.brand,
        },
        modelDate: vehicle.year.toString(),
        mileageFromOdometer: {
          "@type": "QuantitativeValue",
          value: parseMileage(vehicle.mileage),
          unitCode: "KMT",
        },
        color: vehicle.color,
        fuelType: vehicle.fuelType,
        vehicleTransmission: vehicle.transmission,
        image: `https://www.exclusurautos.com${vehicle.image}`,
        offers: {
          "@type": "Offer",
          price: vehicle.price.toString(),
          priceCurrency: "COP",
          availability: "https://schema.org/InStock",
          url: `https://www.exclusurautos.com/vehiculo/${vehicle.id}`,
          seller: {
            "@type": "AutoDealer",
            name: "Exclusur Autos",
          },
        },
      }
    : null

  const breadcrumbSchema = vehicle
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://www.exclusurautos.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Inventario",
            item: "https://www.exclusurautos.com/#inventario",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
            item: `https://www.exclusurautos.com/vehiculo/${vehicle.id}`,
          },
        ],
      }
    : null

  return (
    <>
      {carSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(carSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <VehicleDetailClient />
    </>
  )
}
