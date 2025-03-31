import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { CookieConsent } from '@/components/CookieConsent'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nima Nabipour Advokatfirma ApS",
              "url": "https://holm-nima.dk",
              "logo": "https://holm-nima.dk/logo.png",
              "description": "Professionel juridisk bistand i straffesager",
              "sameAs": [
                "https://www.linkedin.com/company/holm-nima",
                "https://www.facebook.com/holmnima"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rolighedsvej 11, 1. sal",
                "addressLocality": "Frederiksberg C",
                "postalCode": "1958",
                "addressCountry": "DK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+4561330043",
                "contactType": "customer service",
                "email": "kontakt@nima.dk"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nima Nabipour Advokatfirma ApS",
              "image": "https://holm-nima.dk/logo.png",
              "description": "Professionel juridisk bistand i straffesager",
              "url": "https://holm-nima.dk",
              "telephone": "+4561330043",
              "email": "kontakt@nima.dk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rolighedsvej 11, 1. sal",
                "addressLocality": "Frederiksberg C",
                "postalCode": "1958",
                "addressCountry": "DK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.7125",
                "longitude": "12.5447"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.linkedin.com/company/holm-nima",
                "https://www.facebook.com/holmnima"
              ],
              "priceRange": "$$",
              "areaServed": "Danmark",
              "hasMap": "https://www.google.com/maps/place/Rolighedsvej+11,+1958+Frederiksberg+C",
              "vatID": "41592427"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Nima Nabipour Advokatfirma ApS",
              "url": "https://holm-nima.dk",
              "description": "Professionel juridisk bistand i straffesager",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://holm-nima.dk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Hjem",
                  "item": "https://holm-nima.dk"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Om os",
                  "item": "https://holm-nima.dk/profiler"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Vores arbejde",
                  "item": "https://holm-nima.dk/work"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Blog",
                  "item": "https://holm-nima.dk/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Kontakt",
                  "item": "https://holm-nima.dk/contact"
                }
              ]
            })
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <CookieConsent />
      </body>
    </html>
  )
}
