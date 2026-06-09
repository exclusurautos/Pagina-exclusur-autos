"use client"

import { usePathname } from "next/navigation"

const breadcrumbSchema = {
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
      name: "Vender mi carro",
      item: "https://www.exclusurautos.com/#vender",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Comprar carro",
      item: "https://www.exclusurautos.com/#comprar",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Nosotros",
      item: "https://www.exclusurautos.com/#nosotros",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contacto",
      item: "https://www.exclusurautos.com/#contacto",
    },
  ],
}

export function BreadcrumbSchema() {
  const pathname = usePathname()
  if (pathname.startsWith("/vehiculo/")) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
