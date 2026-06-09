import type { MetadataRoute } from "next"
import { vehicles } from "@/components/inventory"

const BASE_URL = "https://www.exclusurautos.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const vehicleUrls: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${BASE_URL}/vehiculo/${vehicle.id}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-06-09"),
      changeFrequency: "daily",
      priority: 1,
    },
    ...vehicleUrls,
  ]
}
