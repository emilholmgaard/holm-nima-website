import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Privatlivspolitik - NIMA Advokater',
  description:
    'Læs om hvordan NIMA Advokater håndterer og beskytter dine personlige oplysninger.',
}

export default function Privatlivspolitik() {
  return (
    <>
      <PageIntro eyebrow="Privatlivspolitik" title="Sådan beskytter vi dine oplysninger">
        <p>
          Hos NIMA N advokatfirma prioriterer vi datasikkerhed og fortrolighed højt. I denne privatlivspolitik kan du læse, hvordan vi håndterer de oplysninger, vi kommer i besiddelse af, når du er klient hos os.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Dataansvar
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                NIMA N advokatfirma er dataansvarlig for behandlingen af dine personoplysninger.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Formål med behandling og kategorier af personoplysninger
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                I forbindelse med at vi arbejder på din sag kan vi behandle følgende oplysninger om dig:
              </p>

              <h3 className="font-display text-xl font-semibold text-neutral-950 mt-8">
                Juridiske ydelser:
              </h3>
              <p>
                Hvis du er klient hos NIMA N advokatfirma eller potentiel klient, behandler vi som udgangspunkt dine oplysninger for at kunne yde juridisk rådgivning til dig med henblik på at indgå eller opfylde den aftale vi har med dig eller den virksomhed du repræsenterer.
              </p>
              <p>
                Selskabsoplysninger er som udgangspunkt ikke er omfattet af databeskyttelsesforordningen, men vi kan dog efter omstændighederne behandle dine identitets-, kontakt- og professionelle oplysninger, herunder navn, e-mailadresse, telefonnummer, din privatadresse, din stilling, din uddannelsesmæssige baggrund og oplysninger om vores forretningsmæssige relation. Dit cpr.nr. kan efter omstændighederne behandles i relation til registrering som reel ejer af en virksomhed eller i forbindelse med forberede samt gennemførelse af en straffesag. Retsgrundlaget for vores behandling er databeskyttelsesforordningens artikel 6, stk. 1, litra b.
              </p>
              <p>
                Afhængig af de konkrete omstændigheder i den eller de sager, vi bistår dig med, kan vi ligeledes behandle følsomme personoplysninger, jf. databeskyttelsesforordningens artikel 9, stk. 2, litra f, og/eller oplysninger om strafbare forhold, jf. databeskyttelseslovens § 8, stk. 3 og 4.
              </p>
              <p>
                Da vi som advokatfirma er underlagt pligter efter hvidvaskloven i forbindelse med visse af vores juridiske ydelser, vil vi ligeledes behandle dine personoplysninger i den forbindelse, herunder identitetsoplysninger, fx navn, CPR-nr., pasnummer, etc. Vi behandler alene identitetsoplysninger indhentet efter hvidvaskloven med henblik på opfyldelse af vores pligter efter denne lov. Identitetsoplysningerne bliver ikke brugt til andre formål. Retsgrundlaget for denne behandling er hvidvaskloven.
              </p>
              <p>
                Hvis vi ønsker at behandle dine oplysninger til andre formål, vil vi altid informere dig herom og som udgangspunkt indhente dit samtykke til denne behandling, jf. databeskyttelsesforordningens artikel 6, stk. 1, litra a.
              </p>

              <h3 className="font-display text-xl font-semibold text-neutral-950 mt-8">
                Hjemmeside:
              </h3>
              <p>
                Bemærk, at det er nødvendigt, at du afgiver visse personoplysninger, for at du kan anvende vores hjemmesides kontaktformular. For eksempel har vi brug for dine kontaktoplysninger for at kunne besvare en henvendelse fra dig.
              </p>
              <p>
                Vi bruger Google Analytics på vores hjemmeside for at forbedre brugeroplevelsen og optimere vores indhold. Google Analytics indsamler anonymiseret data om besøg på vores hjemmeside, herunder:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hvilke sider der besøges</li>
                <li>Hvor længe besøgende er på hjemmesiden</li>
                <li>Hvilke enheder der bruges til at besøge hjemmesiden</li>
                <li>Hvilke lande besøgende kommer fra</li>
              </ul>
              <p>
                Disse data er anonymiserede og indeholder ikke personlige oplysninger. Du kan til enhver tid tilbagetrække dit samtykke til brugen af Google Analytics via vores cookie-indstillinger.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Videregivelse af oplysninger
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Vi kan videregive dine oplysninger til eksterne tredjeparter, hvis vi bliver pålagt det, eller det er en del af den ydelse, vi leverer til dig. Det kan f.eks. være andre offentlige myndigheder, andre advokatvirksomheder, modparter i sager m.fl. Dette vil oftest være i tæt samarbejde med dig.
              </p>
              <p>
                I forbindelse med, at vi skal indsætte modtagne klientmidler på en klientkonto, har vi pligt til at videregive klientens identitetsoplysninger til det kontoførende pengeinstitut til brug for dettes opfyldelse af de pligter, der påhviler det efter hvidvaskloven.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Sikkerhed
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Vi gør vores bedste for at sikre dine personfølsomme oplysninger.
              </p>
              <p>
                Vi har sikkermail og sender alle sager med personoplysninger via sikker mail.
              </p>
              <p>
                Hvis du har behov for at sende os følsomme personoplysninger, anbefaler vi, at du benytter kryptering, f.eks. sikker e-mail eller kodebeskyttet fil og sender os koden separat.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Opbevaring og sletning
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Vi sletter dine personoplysninger, når vi ikke længere har behov for at behandle dem til at opfylde et eller flere af de formål, som fremgår ovenfor. Særlige lovregler, herunder i f.eks. bogførings-, hvidvask- og forældelsesloven, kan dog give os pligt eller ret til at opbevare dem i længere tid. Oplysningerne kan også behandles og opbevares længere, hvis de er anonymiseret.
              </p>
              <p>
                Personoplysninger, som vi har indhentet efter hvidvaskloven, opbevares i 5 år efter klientforholdets ophør og slettes derefter.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Dine rettigheder
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Du har ret til at få indsigt i de personoplysninger, som vi behandler om dig, med visse undtagelser, der er fastsat i lovgivningen. Derudover kan du gøre indsigelse mod indsamling og viderebehandling af dine personoplysninger. Endvidere har du ret til berigtigelse af dine personoplysninger eller bede os om at begrænse behandlingen af dine personoplysninger.
              </p>
              <p>
                Hvis du beder om det, vil vi slette de personoplysninger, som vi har registreret om dig, uden unødigt ophold, medmindre vi kan fortsætte behandlingen på et andet grundlag, f.eks. hvis behandlingen er nødvendig for at kunne fastlægge et retskrav, eller hvis det er nødvendigt for at besvare en henvendelse fra dig.
              </p>
              <p>
                Under visse omstændigheder kan du også anmode om, at vi giver dig en kopi af dine personoplysninger i et struktureret, almindeligt anvendt og maskinlæsbart format, og anmode om, at vi overfører oplysningerne til en anden dataansvarlig (dataportabilitet).
              </p>
              <p>
                Hvis vi behandler dine personoplysninger på baggrund af dit samtykke, kan du til enhver tid trække dit samtykke tilbage. Dette kan ske ved at kontakte os (se nedenfor). Hvis du trækker dit samtykke tilbage, vil vi ophøre med at behandle dine personoplysninger, medmindre vi er berettigede eller forpligtede til at fortsætte behandlingen eller opbevaringen af dine personoplysninger på andet grundlag, herunder i henhold til lovgivningen. Tilbagekaldelse af dit samtykke berører ikke lovligheden af den behandling, som er sket før tilbagekaldelse af samtykket.
              </p>
              <p>
                Hvis du ønsker at gøre brug af dine rettigheder som beskrevet ovenfor, er du til enhver tid velkommen til at kontakte os.
              </p>
              <p>
                Vi beder om, at du i forbindelse med henvendelser vedrørende dine rettigheder giver os tilstrækkelige oplysninger til, at vi kan behandle din henvendelse, herunder dit fulde navn og din e-mailadresse, så vi kan identificere dig og svare på din anmodning. Vi vil svare på din henvendelse hurtigst muligt.
              </p>
              <p>
                Hvis du er uenig i den måde, som vi behandler dine personoplysninger på, eller de formål, som vi behandler oplysningerne til, er du velkommen til at kontakte os. Du kan også indgive en klage til:
              </p>
              <p>
                Datatilsynet<br />
                Borgergade 28, 5. sal<br />
                1300 København K<br />
                Telefon 33 19 32 00<br />
                E-mail dt@datatilsynet.dk
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Links til andre hjemmesider mv.
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                På vores hjemmeside er der links til andre hjemmesider eller til integrerede hjemmesider. Vi er ikke ansvarlig for indholdet af andre hjemmesider eller for deres praksis i forbindelse med indsamling af personlige oplysninger.
              </p>
              <p>
                Når du besøger andre hjemmesider, bør du altid læse hjemmesidens politik om beskyttelse af personlige oplysninger og andre relevante politikker.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Ændringer af privatlivspolitikken
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Vi forbeholder os retten til at ændre denne privatlivspolitik grundet væsentlige ændringer i lovgivningen, nye tekniske løsninger, nye eller forbedrede funktioner eller for at forbedre hjemmesiden.
              </p>
            </div>
          </section>

          <section>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Kontakt
              </h2>
            </FadeIn>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Skriv til{' '}
                <a
                  href="mailto:kontakt@nima.dk"
                  className="text-blue-950 hover:text-blue-800 underline"
                >
                  kontakt@nima.dk
                </a>{' '}
                – med Privatlivspolitik i emnefeltet, hvis vi skal ændre eller slette personlige oplysninger, vi har registreret om dig, hvis du ikke ønsker at modtage flere meddelelser fra os, eller hvis du i øvrigt har spørgsmål til retningslinjerne i vores privatlivspolitik.
              </p>
            </div>
          </section>
        </div>
      </Container>

      <ContactSection />
    </>
  )
} 