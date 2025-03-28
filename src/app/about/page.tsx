import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import martin from '@/images/team/martin.webp'
import nima from '@/images/team/nima.webp'
import linnea from '@/images/team/linnea.webp'
import karsten from '@/images/team/karsten.webp'
import charlotte from '@/images/team/charlotte.webp'
import samer from '@/images/team/samer.webp'
import kamilla from '@/images/team/kamilla.webp'
import lotte from '@/images/team/lotte.webp'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-blue-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Vores kultur"
        title="Vi kæmper for retfærdighed og retssikkerhed"
        invert
      >
        <p>
          Vi er en gruppe dedikerede forsvarsadvokater, der deler en fælles mission om at sikre retssikkerhed.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Ekspertise" invert>
            Med mange års erfaring i straffesager og dyb viden om strafferet og retssystemet,
            sikrer vi den bedste forsvarsstrategi for vores klienter.
          </GridListItem>
          <GridListItem title="Passion" invert>
            Vi kæmper med overbevisning for vores klienters rettigheder og sikrer, at retssystemet
            fungerer fair og effektivt for alle.
          </GridListItem>
          <GridListItem title="Tilgængelighed" invert>
            Vi er altid tilgængelige for vores klienter og deres familier, fordi vi ved,
            at straffesager ofte kræver akut opmærksomhed og handling.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Advokater',
    people: [
      {
        name: 'Nima Nabipour',
        role: 'Advokat (H)',
        image: { src: nima, alt: 'Nima Nabipour' },
      },
      {
        name: 'Martin Due Lomholdt',
        role: 'Advokat (L)',
        image: { src: martin, alt: 'Martin Due Lomholdt' },
      },
      {
        name: 'Karsten Rifbjerg Erichsen',
        role: 'Advokat',
        image: { src: karsten, alt: 'Karsten Rifbjerg Erichsen' },
      },
      {
        name: 'Samer Hussein Younes',
        role: 'Advokat',
        image: { src: samer, alt: 'Samer Hussein Younes' },
      },
      {
        name: 'Linnea Steen Bluitgen',
        role: 'Advokat',
        image: { src: linnea, alt: 'Linnea Steen Bluitgen' },
      },
    ],
  },
  {
    title: 'Backoffice',
    people: [
      {
        name: 'Charlotte Holmgaard',
        role: 'Sekretær',
        image: { src: charlotte, alt: 'Charlotte Holmgaard' },
      },
      {
        name: 'Kamilla',
        role: 'Stud jr',
        image: { src: imageAngelaFisher, alt: 'Kamilla' },
      },
      {
        name: 'Lotte',
        role: 'Stud jr',
        image: { src: imageBenjaminRussel, alt: 'Lotte' },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Om Os',
  description:
    'Vi er specialister i straffesager og kæmper for vores klienters rettigheder med ekspertise, passion og dedikation.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Om os" title="Vi er specialister i straffesager">
        <p>
          Vi er specialister i straffesager og kæmper for vores klienters rettigheder med ekspertise, passion og dedikation.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            NIMA blev grundlagt af tre erfarne forsvarsadvokater, der delte en vision om at skabe
            et advokatfirma, der fokuserede på at levere den bedste forsvarsstrategi i straffesager.
            Siden starten har vi været forpligtet til at sikre retssikkerhed og retfærdighed for vores klienter.
          </p>
          <p>
            Hos NIMA er vi mere end bare advokater — vi er en familie af dedikerede fagfolk.
            Dette betyder, at vi altid er tilgængelige for vores klienter og deres familier,
            og at vi kæmper med overbevisning for deres rettigheder i retssystemet.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Erfarne advokater" />
          <StatListItem value="1000+" label="Tilfredse klienter" />
          <StatListItem value="10000+" label="Håndterede sager" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Fra bloggen"
        intro="Vores team af erfarne forsvarsadvokater deler deres viden og erfaringer om strafferet, retssystemet og retssikkerhed."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
