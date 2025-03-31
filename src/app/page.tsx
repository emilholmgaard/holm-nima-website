import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const cases = [
  {
    title: 'Britta Nielsen Sagen',
    outcome: 'Frifindelse',
    links: []
  },
  {
    title: 'Hamdi Sakatni',
    outcome: 'Frifindelse',
    links: [
      'https://www.seoghoer.dk/krimi/skyderi-i-soenderborg-tre-maend-loesladt-og-frifundet-drabsforsoeg',
      'https://www.domstol.dk/soenderborg/aktuelt/2024/10/frifundet-for-forsoeg-paa-manddrab/',
      'https://www.dr.dk/nyheder/seneste/tre-maend-frikendt-drabsforsoeg'
    ]
  },
  {
    title: 'Jokeren',
    outcome: 'Frifindelse',
    links: [
      'https://nyheder.tv2.dk/krimi/2025-02-25-jokeren-frifundet-foldekniv-var-okay',
      'https://gaffa.dk/nyheder-fra-gaffa/2025/februar/jokeren-frifindes-i-kniv-sag/'
    ]
  },
  {
    title: 'Bashir',
    outcome: 'Frifindelse',
    links: [
      'https://www.domstol.dk/vestrelandsret/aktuelt/2024/2/forvaring-og-udvisning-for-manddrab/',
      'https://politiken.dk/danmark/art9748798/Landsret-omstøder-dom-og-frifinder-to-mænd-i-drabssag-fra-Herning',
      'https://fyens.dk/indland/landsret-omstoeder-dom-og-frifinder-to-maend-i-drabssag-fra-herning'
    ]
  },
  {
    title: 'Michael Wain',
    outcome: 'Frifindelse',
    links: [
      'https://dagbladet-holstebro-struer.dk/holstebro/i-byretten-fik-han-14-maaneders-faengsel-for-vold-og-roeveri-nu-har-landsretten-omstoedt-dommen'
    ]
  },
  {
    title: 'Ghaith',
    outcome: 'Frifindelse',
    links: [
      'https://ekstrabladet.dk/krimi/tre-maend-frifundet-for-anklage-om-voldtaegt-af-polsk-kvinde/9529945',
      'https://fyens.dk/112/tre-syriske-maend-frifundet-for-voldtaegt-slipper-for-udvisning-og-flere-aars-faengsel'
    ]
  },
  {
    title: 'Sønderborg voldtægt',
    outcome: 'Frifindelse',
    links: [
      'https://jv.dk/soenderborg/19-aarig-blev-idoemt-haard-straf-og-udvisning-nu-er-han-frifundet-blev-baaret-ud-af-retten-i-stor-hyldest-fra-vennerne'
    ]
  },
  {
    title: 'Karsten Sønderborg',
    outcome: 'Frifindelse',
    links: [
      'https://jv.dk/soenderborg/ung-mand-indtog-svampe-og-gik-amok-i-sommerhusomraade-troede-han-saa-kinesiske-agenter-og-var-engelsk-prinsesse'
    ]
  },
  {
    title: 'Operation Goldfinger',
    outcome: 'Frifindelse',
    links: [
      'https://politiken.dk/danmark/art9673652/»Når-seddeltælleren-var-færdig-med-én-bunke-sludrede-de-lidt.-Og-så-begyndte-den-igen«',
      'https://www.tv2kosmopol.dk/koebenhavn/15-maend-er-blevet-tiltalt-i-operation-goldfinger'
    ]
  },
  {
    title: 'Eshak',
    outcome: 'Påtaleopgivelse',
    links: [
      'https://avisendanmark.dk/danmark/25-aarig-er-faengslet-i-sag-om-skuddrab-i-herlev'
    ]
  },
  {
    title: 'Terrorsigtelse',
    outcome: 'Påtaleopgivelse',
    links: [
      'https://www.dr.dk/nyheder/indland/mand-sigtet-terror-forsoegte-meje-fodgaengere-ned-i-gaagade-i-aarhus'
    ]
  },
  {
    title: 'Terrorsigtelse Karzoun',
    outcome: 'Påtaleopgivelse',
    links: [
      'https://nyheder.tv2.dk/krimi/2024-01-12-terrorsag-i-danmark-har-traade-til-hamas'
    ]
  }
]

function Clients() {
  return (
    <section aria-labelledby="cases-heading" className="mt-24 rounded-4xl bg-blue-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 id="cases-heading" className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Sager vi som forsvarsadvokat kontor har stået som advokat for
          </h2>
          <div className="h-px flex-auto bg-neutral-800" aria-hidden="true" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            aria-label="Liste over sager"
          >
            {cases.map((case_) => (
              <li key={case_.title}>
                <FadeIn>
                  <a
                    href={case_.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`Læs mere om ${case_.title} - ${case_.outcome}`}
                  >
                    <div className="text-white text-base font-semibold group-hover:text-blue-200">
                      {case_.title}
                    </div>
                    <div className="text-white/80 text-xs">
                      {case_.outcome}
                    </div>
                  </a>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <section aria-labelledby="specialties-heading">
      <SectionIntro
        title="Vores specialer"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Vi er specialister i forskellige områder af strafferetten og tilbyder professionel juridisk bistand til vores klienter.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href} aria-label={`Læs mere om ${caseStudy.title}`}>
                    <span className="absolute inset-0 rounded-3xl" aria-hidden="true" />
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.client} logo`}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Specialer</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section aria-labelledby="services-heading">
      <SectionIntro
        eyebrow="Vores tilbud"
        title="Vi tilbyder professionel juridisk bistand"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Vi er specialister i straffesager og tilbyder professionel juridisk bistand til vores klienter.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <List className="mt-16 lg:mt-0 lg:w-full" aria-label="Liste over vores tjenester">
          <ListItem title="Straffesager">
            Vi er specialister i straffesager og kæmper for vores klienters rettigheder med ekspertise og dedikation.
          </ListItem>
          <ListItem title="Familieret og personret">
            Vi hjælper vores klienter med at navigere i komplekse juridiske situationer inden for familieret og personret.
          </ListItem>
          <ListItem title="Retssager og procedure">
            Vi er specialister i retssager og procedure, og hjælper vores klienter med at navigere i komplekse juridiske processer.
          </ListItem>
          <ListItem title="Ejendomshandler">
            Vi er specialister i ejendomshandler og hjælper vores klienter med at navigere i komplekse ejendomstransaktioner.
          </ListItem>
        </List>
      </Container>
    </section>
  )
}

const faqs = [
  {
    id: 1,
    question: "Hvad koster en forsvarsadvokat?",
    answer: "Prisen for en forsvarsadvokat afhænger af sagens kompleksitet og omfang. Vi tilbyder en første konsultation, hvor vi kan gennemgå din sag og give dig et præcist tilbud. Vi er forpligtet til at være åbne omkring vores priser og vil altid give dig et detaljeret tilbud, før vi starter arbejdet.",
  },
  {
    id: 2,
    question: "Hvordan finder jeg den rigtige forsvarsadvokat?",
    answer: "Det er vigtigt at vælge en erfaren forsvarsadvokat med ekspertise inden for din type sag. Vi er specialister i straffesager og har mange års erfaring med at forsvare vores klienters rettigheder. Vi tilbyder en første konsultation, hvor du kan møde din advokat og få en vurdering af din sag.",
  },
  {
    id: 3,
    question: "Hvad gør en forsvarsadvokat?",
    answer: "En forsvarsadvokat repræsenterer dig i retssystemet, giver juridisk bistand, forbereder din sag, og kæmper for dine rettigheder gennem hele den juridiske proces. Vi hjælper med at sikre, at din sag bliver behandlet fair og effektivt, og at dine rettigheder bliver respekteret.",
  },
  {
    id: 4,
    question: "Hvad er forskellen mellem en forsvarsadvokat og en almindelig advokat?",
    answer: "En forsvarsadvokat er specialiseret i straffesager og har specifik ekspertise i at forsvare sigtede og anklagede. Vi har dyb viden om strafferet og retssystemet, og vi er trænet i at kæmpe for vores klienters rettigheder i straffesager.",
  },
  {
    id: 5,
    question: "Hvad skal jeg gøre, hvis jeg er blevet sigtet eller anklaget?",
    answer: "Det første du skal gøre er at kontakte en forsvarsadvokat. Vi er tilgængelige 24/7 for akutte sager og kan guide dig gennem de første skridt. Det er vigtigt at du ikke udtaler dig til politiet uden at have konsulteret en advokat først.",
  }
]

function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 id="faq-heading" className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Ofte stillede spørgsmål
        </h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hvad er en forsvarsadvokat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En forsvarsadvokat er en advokat, der repræsenterer og forsvarer sigtede og anklagede i straffesager. Vi er din repræsentant i retsystemet og kæmper for dine rettigheder."
      }
    },
    {
      "@type": "Question",
      "name": "Hvad koster en forsvarsadvokat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prisen for en forsvarsadvokat afhænger af sagens kompleksitet og omfang. Vi tilbyder en første konsultation, hvor vi kan gennemgå din sag og give dig et præcist tilbud."
      }
    },
    {
      "@type": "Question",
      "name": "Hvordan finder jeg den rigtige forsvarsadvokat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Det er vigtigt at vælge en erfaren forsvarsadvokat med ekspertise inden for din type sag. Vi er specialister i straffesager og har mange års erfaring med at forsvare vores klienters rettigheder."
      }
    },
    {
      "@type": "Question",
      "name": "Hvad gør en forsvarsadvokat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En forsvarsadvokat repræsenterer dig i retssystemet, giver juridisk bistand, forbereder din sag, og kæmper for dine rettigheder gennem hele den juridiske proces."
      }
    }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://holm-nima.dk'),
  title: {
    default: 'NIMA Advokater - Erfarne forsvarsadvokater i København',
    template: '%s | NIMA Advokater',
  },
  description: 'NIMA Advokater er et advokatfirma med fokus på strafferet, familieret og civile sager. Vi tilbyder professionel juridisk bistand med høj faglig standard.',
  keywords: ['advokat', 'forsvarsadvokat', 'strafferet', 'familieret', 'København', 'advokatfirma'],
  authors: [{ name: 'NIMA Advokater' }],
  creator: 'NIMA Advokater',
  publisher: 'NIMA Advokater',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://holm-nima.dk',
    siteName: 'NIMA Advokater',
    title: 'NIMA Advokater - Erfarne forsvarsadvokater i København',
    description: 'NIMA Advokater er et advokatfirma med fokus på strafferet, familieret og civile sager. Vi tilbyder professionel juridisk bistand med høj faglig standard.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NIMA Advokater - Erfarne forsvarsadvokater i København',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIMA Advokater - Erfarne forsvarsadvokater i København',
    description: 'NIMA Advokater er et advokatfirma med fokus på strafferet, familieret og civile sager. Vi tilbyder professionel juridisk bistand med høj faglig standard.',
    images: ['/images/twitter-image.jpg'],
    creator: '@nimaadvokater',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: 'https://holm-nima.dk',
  },
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Script
        id="law-firm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            "name": "Nima Nabipour Advokatfirma ApS",
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
              "latitude": "55.7125", // Frederiksberg C coordinates
              "longitude": "12.5447"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/holm-nima",
              "https://www.facebook.com/holmnima"
            ],
            "areaServed": "Danmark",
            "priceRange": "$$",
            "vatID": "41592427",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Juridiske tjenester",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Straffesager",
                    "description": "Professionel juridisk bistand i straffesager"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Familieret og personret",
                    "description": "Juridisk bistand inden for familieret og personret"
                  }
                }
              ]
            }
          })
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <main>
        <Container className="mt-24 sm:mt-32 md:mt-56">
          <FadeIn className="max-w-3xl">
            <header>
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-blue-950 sm:text-7xl">
                Dine forsvarsadvokater i straffesager
              </h1>
              <p className="mt-6 text-xl font-semibold text-blue-950">
                Tilgængelige forsvarsadvokater for sigtede, tiltalte og anklagede. Vi er din repræsentant i retsystemet, repræsenterer dine rettigheder og giver juridisk bistand i straffesager.
              </p>
              <div className="mt-8">
                <Button 
                  href="/kontakt" 
                  className="bg-blue-950 text-white hover:bg-blue-900" 
                  aria-label="Kontakt os for juridisk bistand"
                >
                  Lav Opkald
                </Button>
              </div>
            </header>
          </FadeIn>
        </Container>

        <Clients />

        <CaseStudies caseStudies={caseStudies} />

        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: 'Nima Nabipour' }}
        >
          <div className="text-blue-950" role="article">
            Undertegnede og mit hold af dedikerede og engagerede medarbejdere fører alt fra små til nogle af landets største og mest profilerede sager indenfor vores felt.
            <br /><br />
            Vi har valgt få arbejdsområder som speciale – til gengæld mener vores klienter, at vi er blandt landets bedste til det vi laver.
          </div>
        </Testimonial>

        <Services />

        <FAQ />

        <ContactSection />
      </main>
    </>
  )
}
