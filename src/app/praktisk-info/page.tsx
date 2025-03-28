import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Praktisk Info - NIMA Advokater',
  description:
    'Praktisk information om NIMA Advokater, herunder ejer- og forsikringsforhold, betaling og advokatetiske regler.',
}

export default function PraktiskInfo() {
  return (
    <>
      <PageIntro eyebrow="Praktisk info" title="Vigtig information om vores advokatfirma">
        <p>
          Her finder du praktisk information om NIMA Advokater, herunder ejer- og forsikringsforhold, betaling og advokatetiske regler.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Ejer- og forsikringsforhold
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                NIMA N advokatfirma er organiseret som et anpartsselskab (Nima Nabipour Advokatfirma ApS) og indehaves af advokat Nima Nabipour, der er beskikket af Justitsministeriet i Danmark og er en del af Advokatsamfundet og Landsforeningen af Forsvarsadvokater.
              </p>
              <p>
                Advokatfirmaet har tegnet ansvarsforsikring og garantiordning hos CNA Insurance Company (Europe) S.A. efter de af Advokatsamfundet fastsatte regler. Ansvarsforsikringen dækker al advokatvirksomhed udøvet af advokatfirmaets advokater, uanset hvor advokatvirksomheden udøves.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Betaling
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Straffesager
              </h3>
              <p>
                Salæret for arbejdet med en straffesag fastsættes af retten ud fra de{' '}
                <a
                  href="https://www.domstol.dk/media/xh3nnvdx/vejledende-takster-pr-1-januar-2025-for-salaerer-til-forsvarere-i-straffesager-bistandsadvokater-samt-til-beskikkede-advokater-i-aegteskabs-foraeldreansvars-og-boernefjernelsessager.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 hover:text-blue-800 underline"
                >
                  vejledende takster
                </a>
                , der findes her. Det fremgår af taksterne, at salæret fastsættes med udgangspunkt i en timesats på kr. 2.456,25 inkl. moms.
              </p>
              <p>
                Prisen er det samme uanset om du selv har valgt din forsvarer, eller du benytter den advokat, som retten har tildelt dig.
              </p>
              <p>
                Salæret betales i første række af statskassen. Hvis du bliver fundet skyldig, bliver salæret efterfølgende opkrævet hos dig.
              </p>
              <p>
                Det vil oftest være muligt at aftale en afdragsordning.
              </p>
              <p>
                Hvis du frifindes eller sagen opgives inden den når for retten, betaler statskassen som udgangspunkt sagens omkostninger, herunder også salæret til din forsvarer.
              </p>
              <p>
                Der kan altid indgås aftale om at privatantage os som forsvarer i din sag. De nærmere aftalebetingelser herfor vil fremgå af den konkrete aftale vi laver med dig.
              </p>

              <h3 className="font-display text-xl font-semibold text-neutral-950 mt-8">
                Øvrige sager
              </h3>
              <p>
                Vi aftaler altid en pris med dig som klient inden vi går i gang med arbejdet. Såfremt det ikke er muligt med en fast pris, vil vi give et realistisk overslag over de forventede omkostninger i forbindelse med at vi påtager os din sag.
              </p>
              <p>
                Forud for etablering af klientrelation, vil vi sende dig vores opdrags- og prisoplysninger, som du bedes godkende, førend vi påbegynder arbejdet på din sag.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                De Advokatetiske Regler og klageadgang
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                NIMA N advokatfirma anvender ikke aftaleklausuler om lovvalg eller værneting og er omfattet af{' '}
                <a
                  href="https://www.advokatsamfundet.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 hover:text-blue-800 underline"
                >
                  Advokatsamfundets
                </a>{' '}
                tilsyns- og disciplinærsystem og reglerne om god advokatskik, jf. retsplejelovens § 126. Herudover gælder de advokatetiske regler.
              </p>
              <p>
                De regler, der særligt gælder for udøvelse af advokathvervet, kan findes på Advokatsamfundets hjemmeside. Klager over advokaters salærer og adfærd behandles af{' '}
                <a
                  href="https://www.advokatsamfundet.dk/Advokatnaevnet.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 hover:text-blue-800 underline"
                >
                  Advokatnævnet
                </a>
                , Kronprinsessegade 28, DK-1306 København K. Yderligere oplysninger kan findes på nævnets hjemmeside.
              </p>
            </div>
          </section>
        </div>
      </Container>

      <ContactSection />
    </>
  )
} 