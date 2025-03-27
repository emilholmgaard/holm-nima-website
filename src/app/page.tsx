import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
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
    <div className="mt-24 rounded-4xl bg-blue-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Sager vi som forsvarsadvokat kontor har stået som advokat for
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {cases.map((case_) => (
              <li key={case_.title}>
                <FadeIn>
                  <a
                    href={case_.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
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
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
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
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
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
    </>
  )
}

function Services() {
  return (
    <>
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
        <List className="mt-16 lg:mt-0 lg:w-full">
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
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-blue-950 sm:text-7xl">
            Dine forsvarsadvokater i straffesager
          </h1>
          <p className="mt-6 text-xl font-semibold text-blue-950">
            Tilgængelige forsvarsadvokater for sigtede og anklagede. Vi repræsenterer dine rettigheder og tilbyder juridisk bistand i straffesager.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Nima Nabipour' }}
      >
        <div className="text-blue-950">
          Undertegnede og mit hold af dedikerede og engagerede medarbejdere fører alt fra små til nogle af landets største og mest profilerede sager indenfor vores felt.
          <br /><br />
          Vi har valgt få arbejdsområder som speciale – til gengæld mener vores klienter, at vi er blandt landets bedste til det vi laver.
        </div>
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
