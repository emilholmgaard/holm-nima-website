import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { ContactSection } from '@/components/ContactSection'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import martin from '@/images/team/martin.webp'
import nima from '@/images/team/nima.webp'
import linnea from '@/images/team/linnea.webp'
import karsten from '@/images/team/karsten.webp'
import charlotte from '@/images/team/charlotte.webp'
import samer from '@/images/team/samer.webp'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import NimaImage from '@/public/images/team/nima.jpg'
import KarstenImage from '@/public/images/team/karsten.jpg'
import SamerImage from '@/public/images/team/samer.jpg'
import LinneaImage from '@/public/images/team/linnea.jpg'
import CharlotteImage from '@/public/images/team/charlotte.jpg'

const inter = Inter({ subsets: ['latin'] })

const team = [
  {
    slug: 'nima-nabipour',
    name: 'Nima Nabipour',
    role: 'Advokat (H) - Møderet for højesteret',
    image: { src: nima, alt: 'Nima Nabipour' },
    bio: `Advokat Nima Nabipour har Møderet for Højesteret og er højt specialiseret inden for det strafferetlige område. Han har været forsvarer i nogle af landets mest profilerede og spektakulære straffesager i de senere år.

Han har vundet fremtrædende juridiske sejre, hvilket har afstedkommet, at han inden for få år har profileret sig som et af landets mest markante og foretrukne forsvarsadvokater.

Samtidig påtager Nima Nabipour sig dagligt sager, som aldrig når offentlighedens interesse, men som er mindst lige så vigtige og derfor prioriteres på lige fod som de mere mediebevågede sager.

Desuden har Nima Nabipour i flere år undervist i faget Strafferet og Straffeproces på Københavns Universitet, hvorfor han har indgående teoretisk og praktisk indsigt i reglerne på det strafferetlige område.

Med baggrund i anklagemyndigheden har Nima Nabipour ligeledes indgående praktisk erfaring med politiets og anklagemyndighedens måde at tænke og arbejde på, hvilket er en stor fordel i tilrettelæggelsen af forsvaret for klienterne.

Derudover er Nima Nabipour qua sin baggrund i Københavns Kommunes Socialforvaltning også specialiseret inden for det familieretlige område, herunder særligt sager vedrørende forældremyndighed, bopæl, samvær, tvangsfjernelse samt adoption.

Endelig har han stor erfaring med sager vedrørende fast ejendom.

Med Nima Nabipour ved din side er du sikret en grundig, effektiv og passioneret advokat, der ikke lader det være op til tilfældighederne, om en sag falder ud i klienternes favør.

Ekspertise, passion og gennemslagskraft er det der kendetegner advokat Nima Nabipour.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
E-mail: nn@nima.dk
Mobiltlf.: 61330043`,
  },
  {
    slug: 'martin-due-lomholdt',
    name: 'Martin Due Lomholdt',
    role: 'Advokat (L) - Møderet for landsret',
    image: { src: martin, alt: 'Martin Due Lomholdt' },
    bio: `Advokat Martin Due Lomholdt har Møderet for Landsretten og har igennem flere år specialiseret sig indenfor alle typer af straffesager. Han fører alt fra små til nogle af de mest omfattende sager her i landet og hans resultater taler deres klare sprog.

Advokat Martin Due Lomholdt følger nøje politiets efterforskning og holder altid klienten orienteret. Martin er endvidere ikke bange for at gå imod politiets og anklagemyndighedens synspunkter under sagen, og du vil som sigtet eller tiltalt altid føle dig tryg, når du har Martin ved din side i retten.

Samtidig beskæftiger Martin sig med sager indenfor familieretten, herunder samvær, forældremyndighed og bopæl og møder også i anbringelsessager i Børn- og Ungeudvalget, Ankestyrelsen og retterne.

Advokat Martin Due Lomholdt sætter en ære i at være tilgængelig for sine klienter og graver sig dybt ind i sagens juridiske problemstillinger for at tilrettelægge den bedste strategi sammen med klienten.

Tilgængelig, grundig og ihærdig kendetegner advokat Martin Due Lomholdt.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
Telefon: 61 30 67 63
E-mail: ml@nima.dk`,
  },
  {
    slug: 'karsten-rifbjerg-erichsen',
    name: 'Karsten Rifbjerg Erichsen',
    role: 'Advokat',
    image: { src: karsten, alt: 'Karsten Rifbjerg Erichsen' },
    bio: `Advokat Karsten Rifbjerg Erichsen har arbejdet ved domstolene i 20 år som dommer (kst) og funktionschef.
Han har været ansat ved flere byretter, Sø-og Handelsretten, Østre Landsret og Højesteret.
Senest har han været chef for retsafdelingen og administrationschef ved Retten i Hillerød.

Advokat Karsten Rifbjerg Erichsen har igennem årene behandlet og afgjort utallige retssager og har således indgående erfaring med straffesager, familiesager og civile sager i øvrigt.

Han har undervist ved Danmarks Domstole og været censor ved jurauddannelsen på Københavns Universitet.

Med Karsten Rifbjerg Erichsen som din advokat er du sikret en advokat, der arbejder dedikeret, grundigt og ordentligt. Det er af stor betydning for et godt resultat at have fuldstændig styr på fakta og juraen, hvilket du kan være sikker på, at advokat Karsten Rifbjerg Erichsen har og fremfører på en troværdig og tillidsvækkende måde.

På baggrund af Karsten Rifbjerg Erichsens mangeårige erfaring fra domstolene ved han, hvad dommerne lægger vægt på ved afgørelsen af sagerne, hvilket unægteligt gavner de klienter, han repræsenterer.

Dedikation, grundighed og ordentlighed kendetegner advokat Karsten Rifbjerg Erichsen.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
E-mail: ke@nima.dk
Mobiltlf.: 31411066`,
  },
  {
    slug: 'samer-hussein-younes',
    name: 'Samer Hussein Younes',
    role: 'Advokat',
    image: { src: samer, alt: 'Samer Hussein Younes' },
    bio: `Advokat Samer Younes har afsluttet såvel sin juridiske bachelor- og kandidateksamen på Århus Universitet med et af de højeste snit på årgangen og har i en længere årrække været ansat hos anklagemyndigheden ved både Sydøstjyllands og Syd-og Sønderjyllands Politi.

Advokat Samer Younes har igennem sin tid som anklager gennemført utallige hovedforhandlinger i såvel små som større straffesager og har derfor en stor praktisk erfaring og et unikt kendskab til sagsgangene og håndteringen af straffesager. Samer kender således politi- og anklagemyndighedens arbejde indgående – alt sammen til gavn for vores klienter.

Herudover har Advokat Samer Younes undervist i strafferet på Aarhus Universitet, hvorfor han besidder en stor teoretisk viden, der kommer til udtryk som et praktisk værktøj allerede fra straffesagens start.

Advokat Samer Younes' unikke drive, faglige ballast og detaljeorienterede tilgang til enhver sag, vil uden tvivl komme klienterne til gavn.

Advokat Samer Younes taler udover dansk og engelsk flydende arabisk og beskæftiger sig primært med straffesager og familieretlige sager.

Dedikeret, detaljeorienteret og analytisk stærk kendetegner Advokat Samer Younes.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
Telefon: 31 41 02 86
E-mail: sy@nima.dk`,
  },
  {
    slug: 'linnea-steen-bluitgen',
    name: 'Linnea Steen Bluitgen',
    role: 'Advokat',
    image: { src: linnea, alt: 'Linnea Steen Bluitgen' },
    bio: `Advokat Linnea Steen Bluitgen styrker kontoret med sin ekspertise indenfor bl.a. strafferet, familie- og børnenet samt erhvervsretlige forhold.

Advokat Linnea Steen Bluitgen har i en årrække fungeret som dommer og er uddannet i nogle af landets største advokathuse.

I tilgift til sin juridiske karrierevej har advokat Linnea Steen Bluitgen læst journalistik, hvilket giver hende særlige kompetencer til at rådgive klienter, der får brug for hjælp til pressestrategi og pressehåndtering i øvrigt.

Endelig har hun stor erfaring i førelse af konkurs- og injuriesager.

Når klienter henvender sig til advokat Linnea Steen Bluitgen, kan de være sikre på, at de får en advokat, som – uanset sagens karakter og størrelse – forbereder sig grundigt og møder dig i øjenhøjde. Hun lægger særlig vægt på at være tilgængelig for sine klienter og deres familier.

Faglighed, grundighed og fordomsfri dedikation kendetegner advokat Linnea Steen Bluitgen.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
Telefon: 31 33 56 58
E-mail: lb@nima.dk`,
  },
  {
    slug: 'charlotte-holmgaard',
    name: 'Charlotte Holmgaard',
    role: 'Advokatsekretær',
    image: { src: charlotte, alt: 'Charlotte Holmgaard' },
    bio: `Advokatsekretær Charlotte Holmgaard har over 35 års erfaring inden for det strafferetlige område, og har tidligere arbejdet hos nogle af landets fremtrædende forsvarsadvokater.
Charlotte Holmgaard har indgående kendskab til domstolenes, politiets, anklagemyndighedens og kriminalforsorgens struktur, processer og arbejdsmetoder.
Charlotte Holmgaard bistår med at arrangere besøg i arresthuse og sikrede insitutioner for klienternes pårørende, og vil løbende holde dem orienteret om sagens forløb. Hun vil ligeledes stå for at indkalde klienterne til møde forud for hovedforhandlingerne i retten.
Charlotte Holmgaard har derudover stor erfaring med køb/salg af fast ejendom, ligesom hun i adskillige år har beskæftiget sig indgående med familieretlige forhold, herunder i forbindelse med udarbejdelse af ægtepagter, testamenter, lånedokumenter, behandling af dødsboer, bodeling i forbindelse med skilsmisser mv.
Der findes ingen advokatsekretær i branchen, der har så stor passion for klienterne og deres sager, og som er tilgængelig over for klienterne i alle døgnets timer.
Med Charlotte Holmgaard på holdet, er advokatfirmaet beriget med en medarbejder, der altid yder sit ypperste for at sikre, at klienterne i forløbet op til hovedforhandlingen løbende orienteres om sagens status og gang, og er behjælpelig med de eventuelle praktiske spørgsmål, der måtte opstå undervejs.
Samtidig er Charlotte Holmgaard kontorets velkendte stemme udadtil, når politiet, retterne, ejendomsmæglerne og andre professionelle aktører skal kontaktes, for at sikre klienterne det mest optimale flow i sagerne.
Engagement, passion og fingerspitzengefühl kendetegner Charlotte Holmgaard.

Arbejdsområder:
• Strafferet
• Familieret
• Forældremyndighed/bopæl/samvær
• Børneret
• Tvangsfjernelser
• Børn- og ungeudvalg
• Ankestyrelsen
• UKN (Ungdomskriminalitetsnævnet)

Kontakt:
Telefon: 31 38 37 16
E-mail: ch@nima.dk`,
  },
  {
    slug: 'kamilla',
    name: 'Kamilla',
    role: 'Stud jr',
    image: { src: imageAngelaFisher, alt: 'Kamilla' },
    bio: 'Kamilla er en dedikeret stud.jur., der assisterer vores advokater i deres daglige arbejde.',
  },
  {
    slug: 'lotte',
    name: 'Lotte',
    role: 'Stud jr',
    image: { src: imageBenjaminRussel, alt: 'Lotte' },
    bio: 'Lotte er en engageret stud.jur., der hjælper med at sikre effektiv håndtering af vores klienters sager.',
  },
]

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const member = team.find((member) => member.slug === params.slug)
  if (!member) return {}

  return {
    title: `${member.name} - NIMA Advokater`,
    description: member.bio,
  }
}

function Video({ videoId }: { videoId: string }) {
  return (
    <div className="relative w-full h-[600px]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?si=o6SK77BGjigF4Ipv&controls=0&autoplay=1&mute=1&loop=1&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://holm-nima.dk&vq=hd2160`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: 'scale(1.5)',
          transformOrigin: 'center top',
          marginTop: '0%'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="Team Member Video"
      />
    </div>
  )
}

function Profile({ params }: { params: { slug: string } }) {
  const member = team.find((member) => member.slug === params.slug)
  if (!member) notFound()

  // Get other team members (excluding the current one)
  const otherMembers = team
    .filter((m) => m.slug !== member.slug)
    .slice(0, 2)
    .map((m) => ({
      title: m.name,
      description: m.role,
      href: `/profiler/${m.slug}`,
      image: m.image.src,
      date: '2024-01-01',
    }))

  return (
    <>
      <PageIntro eyebrow="Profil" title={member.name}>
        <p>{member.role}</p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="space-y-16">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
              {member.slug === 'nima-nabipour' ? (
                <Video videoId="rfKrk8VfyRo" />
              ) : member.slug === 'charlotte-holmgaard' ? (
                <Video videoId="LG11d13EUvU" />
              ) : member.slug === 'martin-due-lomholdt' ? (
                <Video videoId="7kUT3KbTIB8" />
              ) : member.slug === 'linnea-steen-bluitgen' ? (
                <Video videoId="tIj8NqyPadw" />
              ) : member.slug === 'karsten-rifbjerg-erichsen' ? (
                <Video videoId="zJryac91Ut0" />
              ) : (
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  width={member.image.src.width}
                  height={member.image.src.height}
                  className="h-[600px] w-full object-cover"
                  priority
                />
              )}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="prose prose-neutral mx-auto max-w-3xl whitespace-pre-line">
              <div className="space-y-8">
                <div>{member.bio.split('\n\nArbejdsområder:')[0]}</div>
                
                {member.bio.includes('Arbejdsområder:') && (
                  <div className="rounded-lg bg-neutral-50 p-6">
                    <h3 className="font-display text-lg font-semibold text-neutral-950">Arbejdsområder</h3>
                    <ul className="mt-2 list-disc pl-5">
                      {member.bio
                        .split('\n\nArbejdsområder:')[1]
                        .split('\n\n')[0]
                        .split('\n')
                        .filter(line => line.trim().startsWith('•'))
                        .map(line => line.trim())
                        .map(line => (
                          <li key={line}>{line.replace('•', '').trim()}</li>
                        ))}
                    </ul>
                  </div>
                )}
                
                {member.bio.includes('Beskikkelsesår:') && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-neutral-950">Beskikkelse</h3>
                      {member.bio
                        .split('\n\nBeskikkelsesår:')[1]
                        .split('\n\nKontakt:')[0]
                        .split('\n')
                        .map(line => line.trim())
                        .map(line => (
                          <p key={line} className="mt-1">{line}</p>
                        ))}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-neutral-950">Kontakt</h3>
                      {member.bio
                        .split('\n\nKontakt:')[1]
                        .split('\n')
                        .map(line => line.trim())
                        .map(line => (
                          <p key={line} className="mt-1">{line}</p>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Mød resten af teamet"
        intro="Se profilerne på vores andre erfarne advokater og medarbejdere."
        pages={otherMembers}
      />

      <ContactSection />
    </>
  )
}

export default Profile 