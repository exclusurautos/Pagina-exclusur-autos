# Reporte Técnico SEO — Exclusur Autos

**Fecha de análisis:** 2026-06-09
**Framework:** Next.js 16.0.0 — App Router
**Despliegue:** AWS Amplify

---

## 1. Estructura de Archivos

### Archivos SEO relevantes

```
app/
  layout.tsx                        ← Root layout (metadata global + schema.org)
  page.tsx                          ← Home page (metadata de página)
  sitemap.ts                        ← Sitemap dinámico (Next.js MetadataRoute)
  robots.ts                         ← robots.txt dinámico (Next.js MetadataRoute)
  vehiculo/
    [id]/
      page.tsx                      ← Server component (generateMetadata + Car schema)
      VehicleDetailClient.tsx       ← Client component ("use client", UI interactivo)
components/
  hero.tsx                          ← H1 visible, imagen hero
  navigation.tsx                    ← Logo (next/image), links de nav
  inventory.tsx                     ← Grid de tarjetas, datos de vehículos, WhatsApp links
  contact.tsx                       ← Tel:, WhatsApp, redes sociales
  footer.tsx                        ← Links internos (2 con href="#")
  about.tsx                         ← Sección nosotros (sin meta)
  sell-form.tsx                     ← Formulario de venta (sin meta)
  buy-form.tsx                      ← Formulario de compra (sin meta)
```

### Archivos con "schema", "seo", "meta" en el nombre

Ninguno. No existe ningún archivo con esas palabras en el nombre dentro del proyecto (excluyendo node_modules).

### Archivos que NO existen

- `public/robots.txt` — No existe (se usa `app/robots.ts` en su lugar)
- `public/sitemap.xml` — No existe (se genera en tiempo de ejecución vía `app/sitemap.ts`)
- `app/_document.js` / `pages/_document.js` — No existe en el código del proyecto (solo en `node_modules/next/dist/` como parte de Next.js)
- Layouts anidados (nested) — No existen. Solo hay un único root layout en `app/layout.tsx`

---

## 2. Metadata por Página

### Root Layout — `app/layout.tsx` (se aplica a todas las rutas)

```
title.default   : "Exclusur Autos | Carros Usados en Medellín y Envigado"
title.template  : "%s | Exclusur Autos"
description     : "Compra y vende carros usados en Medellín y Envigado con total respaldo.
                   Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación
                   y permutas. Visítanos en Envigado."
keywords        : "carros usados Medellín, carros usados Envigado, compra venta carros usados
                   Colombia, vehículos usados Medellín, autos usados Envigado, carros seminuevos
                   Colombia, peritaje vehículos, permuta carros Colombia, financiación carros
                   usados, Renault usados Medellín, Mazda usados Colombia, compraventa autos
                   Antioquia"
authors         : [{ name: "Exclusur Autos" }]
creator         : "Exclusur Autos"
publisher       : "Exclusur Autos"
metadataBase    : https://www.exclusurautos.com
canonical       : https://www.exclusurautos.com  (vía alternates.canonical)
generator       : "v0.app"
robots.index    : true
robots.follow   : true
googleBot       : index=true, follow=true, max-video-preview=-1,
                  max-image-preview=large, max-snippet=-1
```

**Open Graph (layout — base):**

```
og:type         : website
og:locale       : es_CO
og:url          : https://www.exclusurautos.com
og:title        : "Exclusur Autos | Carros Usados en Medellín y Envigado"
og:description  : "Compra y vende carros usados en Medellín y Envigado con total respaldo.
                   Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación
                   y permutas."
og:site_name    : "Exclusur Autos"
og:image        : https://www.exclusurautos.com/og-image.jpg
og:image:width  : 1200
og:image:height : 630
og:image:alt    : "Exclusur Autos - Carros Usados en Medellín y Envigado"
```

**Twitter Card (layout — base):**

```
twitter:card        : summary_large_image
twitter:title       : "Exclusur Autos | Carros Usados en Medellín y Envigado"
twitter:description : "Compra y vende carros usados en Medellín y Envigado con total respaldo.
                       Todos nuestros vehículos pasan peritaje."
twitter:images      : [https://www.exclusurautos.com/og-image.jpg]
```

**Tags adicionales inyectados directamente en `<head>` (fuera del API de metadata):**

```html
<meta name="facebook-domain-verification" content="qurgish02jhi29gseiemg4j4jprax3" />
<link rel="canonical" href="https://www.exclusurautos.com" />
```

> **NOTA:** El canonical está declarado **dos veces** para la home: una vía `metadata.alternates.canonical` (Next.js lo inyecta como `<link rel="canonical">`) y otra como `<link rel="canonical">` hardcodeada dentro del bloque `<head>` del layout. En la home, el HTML final tendrá dos etiquetas canonical idénticas.

**Icons (layout):**

```
icon (SVG)          : /favicon.svg
icon (fallback ICO) : /favicon.ico
apple-touch-icon    : /apple-touch-icon.png
```

**Viewport (layout):**

```
width           : device-width
initialScale    : 1
themeColor      : #1a1a1a
```

---

### Home — `app/page.tsx` (ruta: `/`)

Sobrescribe el título y description del layout:

```
title       : "Exclusur Autos | Carros Usados en Medellín y Envigado — Compra y Venta con Peritaje"
description : "Compra y vende carros usados en Medellín y Envigado con total respaldo.
               Todos nuestros vehículos pasan peritaje. Atención personalizada, financiación
               y permutas. Visítanos en Envigado."
canonical   : https://www.exclusurautos.com
```

Open Graph, Twitter Card, robots: hereda del root layout (no hay override a nivel de página).

---

### Vehículo — `app/vehiculo/[id]/page.tsx` (ruta: `/vehiculo/[id]`)

Generado dinámicamente con `generateMetadata`. Valores para los 6 vehículos del inventario:

**ID 1 — Renault Logan Familier 2013:**

```
title         : "Renault Logan Familier 2013 — $ 27.900.000 | Exclusur Autos"
description   : "Renault Logan Familier 2013 en venta en Envigado. 129,000 km, color Rojo fuego,
                 transmisión Mecanica. El Renault Logan es un sedán familiar amplio y confiable.
                 Combina economía, comodidad y gran espacio interior..."
canonical     : https://www.exclusurautos.com/vehiculo/1
og:type       : website
og:title      : (igual que title)
og:description: (igual que description)
og:url        : https://www.exclusurautos.com/vehiculo/1
og:image      : https://www.exclusurautos.com/renault-logan-2013-portada.jpg
og:image:alt  : "Renault Logan Familier 2013 - Exclusur Autos"
twitter:card  : summary_large_image
twitter:images: [/renault-logan-2013-portada.jpg]
```

**ID 2 — Mazda CX-30 Touring 2022:**

```
title     : "Mazda CX-30 Touring 2022 — $ 96.900.000 | Exclusur Autos"
canonical : https://www.exclusurautos.com/vehiculo/2
og:image  : https://www.exclusurautos.com/cx30-portada.jpeg
```

**ID 3 — Mazda Mazda 2 Grad Touring LX 2023:**

```
title     : "Mazda Mazda 2 Grad Touring LX 2023 — $ 80.900.000 | Exclusur Autos"
canonical : https://www.exclusurautos.com/vehiculo/3
og:image  : https://www.exclusurautos.com/mazda2-p.jpg
```

**ID 4 — Renault Kwid Outsider 2024:**

```
title     : "Renault Kwid Outsider 2024 — $ 44.700.000 | Exclusur Autos"
canonical : https://www.exclusurautos.com/vehiculo/4
og:image  : https://www.exclusurautos.com/kwid-por.jpg
```

**ID 5 — Renault Duster Iconic 2023:**

```
title     : "Renault Duster Iconic 2023 — $ 79.900.000 | Exclusur Autos"
canonical : https://www.exclusurautos.com/vehiculo/5
og:image  : https://www.exclusurautos.com/bduster-portada.jpg
```

**ID 6 — Chevrolet NHR 2023:**

```
title     : "Chevrolet NHR 2023 — $ 120.900.000 | Exclusur Autos"
canonical : https://www.exclusurautos.com/vehiculo/6
og:image  : https://www.exclusurautos.com/nhr-portada.jpg
```

**ID inexistente:**

```
title     : "Vehículo no encontrado | Exclusur Autos"
(sin description, canonical, OG ni Twitter)
```

> **NOTA sobre og:image en páginas de vehículo:** Las imágenes se pasan como rutas relativas (e.g., `/renault-logan-2013-portada.jpg`). Next.js las resuelve como absolutas usando `metadataBase` (`https://www.exclusurautos.com`) para los `<meta>` generados. En el campo `image` del schema.org Car, la URL ya se construye manualmente con la base completa.

> **NOTA sobre og:image width/height en páginas de vehículo:** No se especifican `width` ni `height` para las imágenes OG de vehículo. Solo el layout base especifica 1200×630 para `/og-image.jpg`.

---

## 3. Schema.org / ld+json

### Bloque 1 — `app/layout.tsx` (presente en TODAS las páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Exclusur Autos",
  "description": "Compraventa de carros usados y seminuevos en Envigado y Medellín. Todos los vehículos pasan peritaje.",
  "url": "https://www.exclusurautos.com",
  "telephone": "+573105059178",
  "email": "exclusurautos@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle 39 Sur #25B-130",
    "addressLocality": "Envigado",
    "addressRegion": "Antioquia",
    "addressCountry": "CO"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/exclusur_autos/",
    "https://www.facebook.com/share/177gGyy9vx/",
    "https://www.tiktok.com/@exclusur.autos"
  ]
}
```

### Bloque 2 — `app/layout.tsx` (presente en TODAS las páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",          "item": "https://www.exclusurautos.com" },
    { "@type": "ListItem", "position": 2, "name": "Inventario",      "item": "https://www.exclusurautos.com/#inventario" },
    { "@type": "ListItem", "position": 3, "name": "Vender mi carro", "item": "https://www.exclusurautos.com/#vender" },
    { "@type": "ListItem", "position": 4, "name": "Comprar carro",   "item": "https://www.exclusurautos.com/#comprar" },
    { "@type": "ListItem", "position": 5, "name": "Nosotros",        "item": "https://www.exclusurautos.com/#nosotros" },
    { "@type": "ListItem", "position": 6, "name": "Contacto",        "item": "https://www.exclusurautos.com/#contacto" }
  ]
}
```

### Bloque 3 — `app/vehiculo/[id]/page.tsx` (solo páginas de vehículo, cuando vehicle != null)

Plantilla con valores dinámicos. Ejemplo con ID 1:

```json
{
  "@context": "https://schema.org",
  "@type": "Car",
  "name": "Renault Logan Familier 2013",
  "brand": {
    "@type": "Brand",
    "name": "Renault"
  },
  "modelDate": "2013",
  "mileageFromOdometer": {
    "@type": "QuantitativeValue",
    "value": "129,000 km",
    "unitCode": "KMT"
  },
  "color": "Rojo fuego",
  "fuelType": "Gasolina",
  "vehicleTransmission": "Mecanica",
  "image": "https://www.exclusurautos.com/renault-logan-2013-portada.jpg",
  "offers": {
    "@type": "Offer",
    "price": "27900000",
    "priceCurrency": "COP",
    "availability": "https://schema.org/InStock",
    "url": "https://www.exclusurautos.com/vehiculo/1",
    "seller": {
      "@type": "AutoDealer",
      "name": "Exclusur Autos"
    }
  }
}
```

### Bloque 4 — `app/vehiculo/[id]/page.tsx` (solo páginas de vehículo, cuando vehicle != null)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",                      "item": "https://www.exclusurautos.com" },
    { "@type": "ListItem", "position": 2, "name": "Inventario",                  "item": "https://www.exclusurautos.com/#inventario" },
    { "@type": "ListItem", "position": 3, "name": "Renault Logan Familier 2013", "item": "https://www.exclusurautos.com/vehiculo/1" }
  ]
}
```

> **NOTA sobre doble BreadcrumbList en páginas de vehículo:** En `/vehiculo/[id]`, el HTML final contiene DOS bloques `BreadcrumbList` separados: uno del layout (6 ítems, navegación principal) y uno de la página (3 ítems, breadcrumb contextual).

---

## 4. Sitemap y robots.txt

### Sitemap — `app/sitemap.ts`

Generado dinámicamente. Produce 7 URLs con los datos del inventario actual:

| URL | lastModified | changeFrequency | priority |
|-----|-------------|-----------------|----------|
| `https://www.exclusurautos.com` | `new Date()` | daily | 1.0 |
| `https://www.exclusurautos.com/vehiculo/1` | `new Date()` | weekly | 0.8 |
| `https://www.exclusurautos.com/vehiculo/2` | `new Date()` | weekly | 0.8 |
| `https://www.exclusurautos.com/vehiculo/3` | `new Date()` | weekly | 0.8 |
| `https://www.exclusurautos.com/vehiculo/4` | `new Date()` | weekly | 0.8 |
| `https://www.exclusurautos.com/vehiculo/5` | `new Date()` | weekly | 0.8 |
| `https://www.exclusurautos.com/vehiculo/6` | `new Date()` | weekly | 0.8 |

Accesible en: `https://www.exclusurautos.com/sitemap.xml`

`lastModified` usa `new Date()` en tiempo de ejecución, por lo que cambia en cada request.

No existe `public/sitemap.xml` estático.

### robots.txt — `app/robots.ts`

Generado dinámicamente. Contenido equivalente al output:

```
User-agent: *
Allow: /

Sitemap: https://www.exclusurautos.com/sitemap.xml
Host: https://www.exclusurautos.com
```

No existe `public/robots.txt` estático.

---

## 5. Imágenes

### Uso de `next/image` vs `<img>`

| Componente | Tag | Imagen |
|---|---|---|
| `navigation.tsx` | `<Image>` (next/image) | `/logo.png` |
| `hero.tsx` | `<img>` | `/luxury-sports-car-in-dark-showroom.jpg` |
| `inventory.tsx` | `<img>` | Portada de cada vehículo (dinámica) |
| `VehicleDetailClient.tsx` | `<img>` | Imagen principal + thumbnails |
| `layout.tsx` | `<img>` | Pixel de Facebook noscript |

`next/image` se usa únicamente en el logo. Todas las demás imágenes de contenido usan `<img>` directo.

### Estado del atributo `alt`

**Imágenes CON `alt`:**

| Archivo | Línea | `alt` |
|---|---|---|
| `navigation.tsx:39` | `<Image src="/logo.png">` | `"Exclusur Autos"` |
| `hero.tsx:11` | `<img src="/luxury-sports-car-in-dark-showroom.jpg">` | `"Vehículo deportivo de lujo en showroom exclusivo - Exclusur Autos Colombia"` |
| `inventory.tsx:197` | `<img src={vehicle.image}>` | `"{brand} {model} {year} - {color} - {mileage} - Vehículo de lujo usado en venta"` (template) |
| `VehicleDetailClient.tsx:85` | Imagen principal carrusel | `"{brand} {model} {year} - {view} - {color}"` (via `getImageAlt()`) |
| `VehicleDetailClient.tsx:134` | Thumbnails | `"{brand} {model} miniatura {index+1}"` |

**Imágenes SIN `alt`:**

| Archivo | Línea | Descripción |
|---|---|---|
| `layout.tsx:213` | `<img src="https://www.facebook.com/tr?id=2067378580542089&ev=PageView&noscript=1" height="1" width="1" style="display:none">` | Pixel Facebook noscript — no tiene atributo `alt` |

---

## 6. Links Internos

### Rutas / páginas que existen en el proyecto

| Ruta | Archivo |
|---|---|
| `/` | `app/page.tsx` |
| `/vehiculo/1` | `app/vehiculo/[id]/page.tsx` |
| `/vehiculo/2` | `app/vehiculo/[id]/page.tsx` |
| `/vehiculo/3` | `app/vehiculo/[id]/page.tsx` |
| `/vehiculo/4` | `app/vehiculo/[id]/page.tsx` |
| `/vehiculo/5` | `app/vehiculo/[id]/page.tsx` |
| `/vehiculo/6` | `app/vehiculo/[id]/page.tsx` |
| `/sitemap.xml` | `app/sitemap.ts` (generado) |
| `/robots.txt` | `app/robots.ts` (generado) |

No existe carpeta `app/api/` ni otras rutas de página adicionales.

### Links con `href="#"` (sin URL real)

Encontrados en `components/footer.tsx`:

| Archivo | Línea | Texto del link |
|---|---|---|
| `footer.tsx:53` | `<Link href="#">` | Términos y Condiciones |
| `footer.tsx:58` | `<Link href="#">` | Política de Privacidad |

### Inventario completo de links internos

**`navigation.tsx`:**
- `href="/"` — logo → home
- `href="#inicio"`
- `href="#inventario"`
- `href="#vender"`
- `href="#comprar"`
- `href="#nosotros"`
- `href="#contacto"`

**`hero.tsx`:**
- `href="#inventario"`
- `href="#contacto"`

**`inventory.tsx`:**
- `href="/vehiculo/1"` × 2 (imagen y título)
- `href="/vehiculo/2"` × 2
- `href="/vehiculo/3"` × 2
- `href="/vehiculo/4"` × 2
- `href="/vehiculo/5"` × 2
- `href="/vehiculo/6"` × 2

**`VehicleDetailClient.tsx`:**
- `router.push("/#inventario")` — botón "Volver al inventario" (no es `<a>` ni `<Link>`, es programático)

**`footer.tsx`:**
- `href="#inicio"`
- `href="#inventario"`
- `href="#vender"`
- `href="#comprar"`
- `href="#nosotros"`
- `href="#contacto"`
- `href="#"` — Términos y Condiciones
- `href="#"` — Política de Privacidad

---

## 7. Número de Teléfono y WhatsApp

Grep confirma que **no existe ninguna ocurrencia** de `573001234567` ni `3001234567` en el código.

### Todas las ocurrencias del número `573105059178`:

| Archivo | Línea | Valor exacto | Contexto |
|---|---|---|---|
| `components/navigation.tsx` | 54 | `https://wa.me/573105059178` | WhatsApp — botón desktop |
| `components/navigation.tsx` | 85 | `https://wa.me/573105059178` | WhatsApp — botón mobile |
| `components/contact.tsx` | 36 | `tel:+573105059178` | tel: link |
| `components/contact.tsx` | 114 | `https://wa.me/573105059178` | WhatsApp — botón sección contacto |
| `components/inventory.tsx` | 222 | `https://wa.me/573105059178?text=Hola, estoy interesado en el ...` | WhatsApp — botón tarjeta (template literal) |
| `app/vehiculo/[id]/VehicleDetailClient.tsx` | 201 | `https://wa.me/573105059178?text=Hola, estoy interesado en el ...` | WhatsApp — botón página detalle |
| `app/vehiculo/[id]/VehicleDetailClient.tsx` | 210 | `tel:+573105059178` | tel: — botón llamar |
| `app/layout.tsx` | 105 | `"+573105059178"` | Schema.org AutoDealer `telephone` |

**Texto visible renderizado (no hrefs):**

| Archivo | Línea | Texto |
|---|---|---|
| `components/contact.tsx` | 37 | `+57 310 505 9178` (contenido del `<a>`) |
| `components/footer.tsx` | 67 | `+57 310 505 9178` (texto plano en `<li>`) |

---

## 8. Performance SEO Básico

### `_document.js` o equivalente

No existe ningún `_document.js` / `_document.tsx` en el código fuente del proyecto. Los únicos archivos con ese nombre están en:

- `node_modules/next/dist/pages/_document.js` — parte interna de Next.js
- `.next/dev/server/pages/_document.js` — output de build

El proyecto usa Next.js App Router. `_document` es un patrón de Pages Router y no aplica a esta arquitectura.

### Dynamic imports

No existe ninguna llamada a `dynamic()` (`next/dynamic`) ni a `import()` lazy en ningún archivo bajo `app/`. No hay code splitting manual que pueda afectar la indexación.

### Modo de renderizado de `/vehiculo/[id]`

**SSR — Server-Side Rendering en tiempo de request.**

Justificación:

- `app/vehiculo/[id]/page.tsx` es un **async Server Component** (sin `"use client"`, exporta `generateMetadata`, usa `await params`).
- **No existe** función `generateStaticParams()` en el archivo.
- Sin `generateStaticParams`, Next.js App Router renderiza rutas dinámicas en el servidor en cada request, no en build time (no SSG).
- `VehicleDetailClient.tsx` tiene `"use client"` y gestiona el estado del carrusel. Este código también se pre-renderiza en servidor (SSR) y luego se hidrata en el cliente.

### Configuración `next.config.mjs`

```js
typescript.ignoreBuildErrors : true   // errores TS no detienen el build
images.unoptimized           : true   // next/image no optimiza imágenes
```

Con `images.unoptimized: true`, el componente `<Image>` (usado solo en el logo) no aplica optimización automática de tamaño ni conversión a WebP/AVIF. Las imágenes se sirven en su formato y tamaño original.
