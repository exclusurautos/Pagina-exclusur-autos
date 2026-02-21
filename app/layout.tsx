import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Exclusur Autos - Compra y Venta de Vehículos de Lujo en Colombia",
  description:
    "Compra y venta de vehículos de lujo y alta gama en Colombia. Mercedes-Benz, BMW, Porsche, Ferrari, Lamborghini y más. Vehículos usados certificados con garantía y respaldo profesional.",
  keywords: [
    "compra venta carros usados Colombia",
    "vehículos de lujo Colombia",
    "autos usados Bogotá",
    "carros de alta gama",
    "Mercedes-Benz usados",
    "BMW usados Colombia",
    "Porsche usados",
    "Ferrari Colombia",
    "Lamborghini usados",
    "compraventa autos",
    "carros seminuevos",
    "vehículos exclusivos Colombia",
    "concesionario carros lujo",
  ].join(", "),
  authors: [{ name: "Exclusur Autos" }],
  creator: "Exclusur Autos",
  publisher: "Exclusur Autos",
  metadataBase: new URL("https://exclusurautos.com"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://exclusurautos.com",
    title: "Exclusur Autos - Compra y Venta de Vehículos de Lujo en Colombia",
    description:
      "Compra y venta de vehículos de lujo y alta gama en Colombia. Vehículos usados certificados con garantía y respaldo profesional.",
    siteName: "Exclusur Autos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exclusur Autos - Vehículos de Lujo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusur Autos - Compra y Venta de Vehículos de Lujo",
    description: "Vehículos de lujo y alta gama en Colombia con garantía y respaldo profesional.",
    images: ["/og-image.jpg"],
  },
  icons: {
  icon: [
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.ico" }, // fallback opcional
  ],
  apple: "/apple-touch-icon.png",
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://exclusurautos.com",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://exclusurautos.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
