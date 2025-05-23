import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Specialer',
    links: [
      { title: 'Strafferet', href: '/specialer/strafferet' },
      { title: 'Familieret', href: '/specialer/family-fund' },
      {
        title: (
          <>
            Se alle <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/specialer',
      },
    ],
  },
  {
    title: 'Virksomhed',
    links: [
      { title: 'Om os', href: '/profiler' },
      { title: 'Forløb', href: '/process' },
      { title: 'Seneste resultater', href: '/blog' },
      { title: 'Praktisk info', href: '/praktisk-info' },
      { title: 'Privatlivspolitik', href: '/privatlivspolitik' },
      { title: 'Kontakt', href: '/contact' },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      ...socialMediaProfiles,
      { 
        title: 'Google Anmeldelse', 
        href: 'https://g.page/r/CcO7G7XfR4hzEAE/review',
        icon: undefined 
      },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Tilmeld vores nyhedsbrev
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Få de seneste nyheder og opdateringer om vores arbejde.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email adresse"
          autoComplete="email"
          aria-label="Email adresse"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Tilmeld"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Hjem">
            <Logo className="h-8" fillOnHover />
          </Link>
          <div className="flex gap-12">
            <div className="text-sm text-neutral-700">
              <p>Lån & Spar Bank, reg.nr. 0400</p>
              <p>konto: 4023 392 602</p>
            </div>
            <div className="text-sm text-neutral-700">
              <p>Rolighedsvej 11, 1. sal</p>
              <p>1958 Frederiksberg C</p>
            </div>
            <div className="text-sm text-neutral-700">
              <p>Nima Nabipour Advokatfirma ApS</p>
              <p>
                <a 
                  href="https://datacvr.virk.dk/enhed/virksomhed/41592427?fritekst=41592427&sideIndex=0&size=10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition"
                >
                  CVR: 41592427
                </a>
              </p>
            </div>
            <div className="text-sm text-neutral-700">
              <p>© NIMA Advokater {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
