import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Our team of private investigators shadow the company director&apos;s for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts — handing that information over to our forensic accounting
          team.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. The roadmap is an
          intricately tangled mess of technical nonsense designed to drag the
          project out as long as possible.
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and obscure the actual progress of the project.
          They act as a buffer between the client&apos;s incessant nagging and the
          development team who are hard at work scouring open source projects
          for code to re-purpose.
        </p>
        <p>
          Our account managers are trained to only reply to client emails after
          9pm, several days after the initial email. This reinforces the general
          aura that we are very busy and dissuades clients from asking for
          changes.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we push each project out by 6
          weeks due to a change in{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to increase the budget a final time before launch.
        </p>
        <p>
          Despite largely using pre-built components, most of the{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          on each project takes place in the final 24 hours. The development
          time allocated to each client is actually spent making augmented
          reality demos that go viral on social media.
        </p>
        <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          retainer.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren&apos;t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Sagsforløb" title="Sådan er en straffesag bygget op">
        <p>
          En straffesag følger et struktureret forløb med 8 forskellige faser. Vi sikrer din retssikkerhed og den bedste forsvarsstrategi i hver fase af sagen.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section title="1. Forbrydelse og anmeldelse">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Det hele starter med en{' '}
              <strong className="font-semibold text-neutral-950">strafbar handling</strong>{' '}
              og politiets kendskab til denne. Dette kan ske gennem anmeldelse, observation eller pågribelse på fersk gerning.
            </p>
            <p>
              I denne fase er det vigtigt at{' '}
              <strong className="font-semibold text-neutral-950">handle hurtigt</strong>{' '}
              og sikre, at dine rettigheder bliver beskyttet fra starten. Vi kan guide dig gennem de første skridt og sikre, at du får den rette bistand.
            </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
            Inkluderet i denne fase
          </h3>
          <TagList className="mt-4">
            <TagListItem>Strafbar handling</TagListItem>
            <TagListItem>Politiets kendskab</TagListItem>
            <TagListItem>Første kontakt</TagListItem>
            <TagListItem>Rettighedsoplysning</TagListItem>
          </TagList>
        </Section>

        <Section title="2. Efterforskning">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              I efterforskningsfasen foretager politiet{' '}
              <strong className="font-semibold text-neutral-950">afhøringer</strong>{' '}
              af sigtede, vidner og eventuelle forurettede. Beviser indsamles i form af video, DNA, fingeraftryk og tekniske spor.
            </p>
            <p>
              Anklagemyndigheden{' '}
              <strong className="font-semibold text-neutral-950">vurderer løbende</strong>{' '}
              om der er grundlag for en sag. Ved alvorlige sager kan politiet foretage ransagning, telefonaflytning eller beslaglæggelse med retskendelse.
            </p>
            <p>
              Vi følger tæt med i efterforskningen og{' '}
              <strong className="font-semibold text-neutral-950">vurderer</strong>{' '}
              løbende, om der er grundlag for at protestere mod politiets tiltag.
            </p>
          </div>

          <Blockquote
            author={{ name: 'Martin Due Lomholdt', role: 'Advokat' }}
            className="mt-12"
          >
            Grundig efterforskning er afgørende for en sag. Vi sikrer, at alle beviser bliver korrekt indsamlet og vurderet.
          </Blockquote>
        </Section>

        <Section title="3. Sigtelse">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Politiet sigter en person, når der er en{' '}
              <strong className="font-semibold text-neutral-950">
                konkret mistanke
              </strong>{' '}
              om lovovertrædelse. Ved sigtelse har du ret til en forsvarer og til at forblive tavs.
            </p>
            <p>
              Vi sikrer, at dine{' '}
              <strong className="font-semibold text-neutral-950">rettigheder</strong>{' '}
              bliver respekteret og at du får den bedste mulige bistand i denne fase.
            </p>
            <p>
              Vi gennemgår grundigt{' '}
              <strong className="font-semibold text-neutral-950">
                sigtelsesgrundlaget
              </strong>{' '}
              og udarbejder en strategi for din forsvarsstrategi.
            </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
            Inkluderet i denne fase
          </h3>
          <List className="mt-8">
            <ListItem title="Sigtelse">
              Vi sikrer, at sigtelsen foregår korrekt og at dine rettigheder respekteres.
            </ListItem>
            <ListItem title="Rettigheder">
              Vi informerer dig om dine rettigheder og sikrer, at de bliver respekteret.
            </ListItem>
            <ListItem title="Strategi">
              Vi udarbejder en forsvarsstrategi baseret på sigtelsesgrundlaget.
            </ListItem>
          </List>
        </Section>

        <Section title="4. Varetægtsfængsling">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Hvis der er risiko for{' '}
              <strong className="font-semibold text-neutral-950">
                flugt, gentagelse eller bevisødelæggelse
              </strong>{' '}
              kan politiet anmode om varetægtsfængsling. En dommer træffer afgørelse ved et grundlovsforhør.
            </p>
            <p>
              Vi repræsenterer dig ved{' '}
              <strong className="font-semibold text-neutral-950">grundlovsforhøret</strong>{' '}
              og kæmper for din ret til frihed. Vi sikrer, at alle relevante omstændigheder bliver vurderet.
            </p>
            <p>
              Vi følger tæt med i{' '}
              <strong className="font-semibold text-neutral-950">
                varetægtsfængslingens forløb
              </strong>{' '}
              og vurderer løbende, om der er grundlag for at anmode om ophævelse.
            </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
            Inkluderet i denne fase
          </h3>
          <TagList className="mt-4">
            <TagListItem>Grundlovsforhør</TagListItem>
            <TagListItem>Varetægtsfængsling</TagListItem>
            <TagListItem>Risikovurdering</TagListItem>
            <TagListItem>Ophævelse af varetægtsfængsling</TagListItem>
          </TagList>
        </Section>

        <Section title="5. Tiltale">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Når efterforskningen er færdig, vurderer anklagemyndigheden om der er{' '}
              <strong className="font-semibold text-neutral-950">rimelig formodning</strong>{' '}
              for domfældelse. Hvis ja, udarbejdes et tiltaleskrift, der beskriver lovovertrædelsen og relevante paragraffer.
            </p>
            <p>
              Vi gennemgår grundigt{' '}
              <strong className="font-semibold text-neutral-950">tiltaleskriftet</strong>{' '}
              og udarbejder din forsvarsstrategi. Vi sikrer, at alle beviser og omstændigheder bliver grundigt analyseret.
            </p>
            <p>
              Vi vurderer også om der er{' '}
              <strong className="font-semibold text-neutral-950">
                grundlag for at nedlægge indsigelse
              </strong>{' '}
              mod tiltalen.
            </p>
          </div>

          <Blockquote
            author={{ name: 'Nima Nabipour', role: 'Advokat (H)' }}
            className="mt-12"
          >
            Vi er dedikerede til at sikre den bedste forsvarsstrategi og retssikkerhed for vores klienter. Vores erfaring og ekspertise giver os mulighed for at levere den bedste rådgivning.
          </Blockquote>
        </Section>

        <Section title="6. Hovedforhandling">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Hovedforhandlingen afholdes i{' '}
              <strong className="font-semibold text-neutral-950">byretten</strong>{' '}
              og følger et struktureret forløb. Vi sikrer, at din sag bliver præsenteret på den bedste måde.
            </p>
            <p>
              Forløbet inkluderer{' '}
              <strong className="font-semibold text-neutral-950">oplæsning af tiltalen</strong>{' '}
              og din mulighed for at udtale dig. Derefter følger bevisførelse med vidneafhøringer og fremlæggelse af beviser.
            </p>
            <p>
              Vi{' '}
              <strong className="font-semibold text-neutral-950">procederer</strong>{' '}
              grundigt for din sag og sikrer, at alle relevante argumenter bliver fremført.
            </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
            Inkluderet i denne fase
          </h3>
          <List className="mt-8">
            <ListItem title="Retssag">
              Vi repræsenterer dig effektivt i retten og sikrer, at din sag bliver præsenteret på den bedste måde.
            </ListItem>
            <ListItem title="Bevisførelse">
              Vi gennemgår og præsenterer alle relevante beviser og sikrer, at din retssikkerhed er beskyttet.
            </ListItem>
            <ListItem title="Procedure">
              Vi følger den retslige procedure tæt og sikrer, at alle dine rettigheder respekteres.
            </ListItem>
          </List>
        </Section>

        <Section title="7. Dom">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Efter hovedforhandlingen træffer retten{' '}
              <strong className="font-semibold text-neutral-950">afgørelse</strong>{' '}
              i form af frifindelse eller domfældelse. Ved domfældelse fastsættes en straf.
            </p>
            <p>
              Vi sikrer, at{' '}
              <strong className="font-semibold text-neutral-950">dommen</strong>{' '}
              bliver grundigt gennemgået og vurderer, om der er grundlag for anke.
            </p>
            <p>
              Ved{' '}
              <strong className="font-semibold text-neutral-950">
                domfældelse
              </strong>{' '}
              sikrer vi, at straffen er proportional og i overensstemmelse med loven.
            </p>
          </div>

          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
            Inkluderet i denne fase
          </h3>
          <TagList className="mt-4">
            <TagListItem>Dom</TagListItem>
            <TagListItem>Strafudmåling</TagListItem>
            <TagListItem>Ankevurdering</TagListItem>
            <TagListItem>Retskraft</TagListItem>
          </TagList>
        </Section>

        <Section title="8. Anke">
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Den dømte eller anklagemyndigheden kan{' '}
              <strong className="font-semibold text-neutral-950">anke</strong>{' '}
              sagen til landsretten inden for 14 dage. Landsretten kan ændre, stadfæste eller frifinde.
            </p>
            <p>
              I særlige tilfælde kan sagen{' '}
              <strong className="font-semibold text-neutral-950">indbringes for Højesteret</strong>{' '}
              ved principielle juridiske spørgsmål. Vi vurderer grundigt, om der er grundlag for anke.
            </p>
            <p>
              Vi sikrer, at{' '}
              <strong className="font-semibold text-neutral-950">
                ankeperioden
              </strong>{' '}
              bliver overholdt og at alle relevante argumenter bliver fremført.
            </p>
          </div>

          <Blockquote
            author={{ name: 'Karsten Rifbjerg Erichsen', role: 'Advokat' }}
            className="mt-12"
          >
            Anke er en vigtig rettighed. Vi sikrer, at din sag bliver grundigt gennemgået og at alle relevante argumenter bliver fremført.
          </Blockquote>
        </Section>
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
