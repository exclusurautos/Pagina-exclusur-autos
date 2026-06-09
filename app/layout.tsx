import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
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
  title: {
    default: "Exclusur Autos | Carros Usados en Medellín y Envigado",
    template: "%s | Exclusur Autos",
  },
  description:
    "Compra y vende carros usados en Medellín y Envigado con total respaldo. Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación y permutas. Visítanos en Envigado.",
  keywords: [
    "carros usados Medellín",
    "carros usados Envigado",
    "compra venta carros usados Colombia",
    "vehículos usados Medellín",
    "autos usados Envigado",
    "carros seminuevos Colombia",
    "peritaje vehículos",
    "permuta carros Colombia",
    "financiación carros usados",
    "Renault usados Medellín",
    "Mazda usados Colombia",
    "compraventa autos Antioquia",
  ].join(", "),
  authors: [{ name: "Exclusur Autos" }],
  creator: "Exclusur Autos",
  publisher: "Exclusur Autos",
  metadataBase: new URL("https://www.exclusurautos.com"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.exclusurautos.com",
    title: "Exclusur Autos | Carros Usados en Medellín y Envigado",
    description:
      "Compra y vende carros usados en Medellín y Envigado con total respaldo. Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación y permutas.",
    siteName: "Exclusur Autos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exclusur Autos - Carros Usados en Medellín y Envigado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusur Autos | Carros Usados en Medellín y Envigado",
    description:
      "Compra y vende carros usados en Medellín y Envigado con total respaldo. Todos nuestros vehículos pasan peritaje.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
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
    canonical: "https://www.exclusurautos.com",
  },
  generator: "Next.js",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

const autoDealerSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Exclusur Autos",
  description:
    "Compraventa de carros usados y seminuevos en Envigado y Medellín. Todos los vehículos pasan peritaje.",
  url: "https://www.exclusurautos.com",
  telephone: "+573105059178",
  email: "exclusurautos@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 39 Sur #25B-130",
    addressLocality: "Envigado",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/exclusur_autos/",
    "https://www.facebook.com/share/177gGyy9vx/",
    "https://www.tiktok.com/@exclusur.autos",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="facebook-domain-verification" content="qurgish02jhi29gseiemg4j4jprax3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2067378580542089');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2067378580542089&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`font-sans antialiased`}>
        <BreadcrumbSchema />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
