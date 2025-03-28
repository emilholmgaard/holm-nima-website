'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Der opstod en fejl
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Noget gik galt
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Der opstod en uventet fejl. Prøv at genindlæse siden eller kontakt os, hvis problemet fortsætter.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={reset}
            className="rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900"
          >
            Prøv igen
          </button>
          <Link
            href="/"
            className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Gå til forsiden
          </Link>
        </div>
      </FadeIn>
    </Container>
  )
} 