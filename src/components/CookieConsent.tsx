'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  consentDate?: string
}

type CookieProvider = {
  name: string
  cookies: Array<{
    name: string
    description: string
    storage: string
    duration: string
    type: string
  }>
}

type CookieCategory = {
  id: keyof CookiePreferences
  title: string
  description: string
  providers: CookieProvider[]
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    title: 'Nødvendige cookies',
    description: 'Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt.',
    providers: [
      {
        name: 'Nima Nabipour Advokatfirma',
        cookies: [
          {
            name: 'session_id',
            description: 'Holder dig logget ind på hjemmesiden',
            storage: 'Lokalt HTML-lager',
            duration: 'Session',
            type: 'Funktionalitet'
          }
        ]
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics cookies',
    description: 'Hjælper os med at forbedre vores hjemmeside ved at indsamle anonymiseret data om brug.',
    providers: [
      {
        name: 'Google Analytics',
        cookies: [
          {
            name: '_ga',
            description: 'Indsamler anonymiseret data om besøg på hjemmesiden',
            storage: 'Lokalt HTML-lager',
            duration: '2 år',
            type: 'Analytics'
          },
          {
            name: '_gid',
            description: 'Bruges til at generere statistiske data om hvordan besøgende bruger hjemmesiden',
            storage: 'Lokalt HTML-lager',
            duration: '24 timer',
            type: 'Analytics'
          }
        ]
      }
    ]
  }
]

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  })
  const [expandedCategory, setExpandedCategory] = useState<keyof CookiePreferences | null>(null)
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null)

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      setPreferences(JSON.parse(savedConsent))
    } else {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      consentDate: new Date().toISOString(),
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
  }

  const rejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      consentDate: new Date().toISOString(),
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
  }

  const savePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))
    setShowConsent(false)
  }

  const toggleCategory = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
      consentDate: new Date().toISOString(),
    }))
  }

  const withdrawConsent = () => {
    localStorage.removeItem('cookieConsent')
    setShowConsent(true)
    setPreferences({
      necessary: true,
      analytics: false,
    })
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Centered Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950 mb-2">
                    Cookie-indstillinger
                  </h3>
                  <div className="text-sm text-neutral-600 space-y-3">
                    <p>
                      Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. 
                      Nogle cookies er nødvendige for at hjemmesiden kan fungere, mens andre hjælper os med at forbedre vores tjenester.
                    </p>
                    <p>
                      Du kan til enhver tid ændre eller tilbagetrække dit samtykke. 
                      Læs mere i vores <Link href="/privatlivspolitik" className="text-blue-950 hover:underline">privatlivspolitik</Link>.
                    </p>
                    <p>
                      Dit samtykke gælder for: nima.dk
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cookieCategories.map((category) => (
                    <div key={category.id} className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-neutral-950">{category.title}</h4>
                          <p className="text-sm text-neutral-600">{category.description}</p>
                        </div>
                        <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                          <button
                            onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                            className="text-sm text-blue-950 hover:underline whitespace-nowrap"
                          >
                            {expandedCategory === category.id ? 'Skjul detaljer' : 'Se detaljer'}
                          </button>
                          <input
                            type="checkbox"
                            checked={preferences[category.id] as boolean}
                            onChange={() => toggleCategory(category.id)}
                            disabled={category.id === 'necessary'}
                            className="h-5 w-5 rounded border-neutral-300 text-blue-950 focus:ring-blue-950 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedCategory === category.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-4"
                          >
                            {category.providers.map((provider) => (
                              <div key={provider.name} className="border border-neutral-100 rounded p-3">
                                <div className="flex items-center justify-between">
                                  <h5 className="font-medium text-neutral-900">{provider.name}</h5>
                                  <button
                                    onClick={() => setExpandedProvider(expandedProvider === provider.name ? null : provider.name)}
                                    className="text-sm text-blue-950 hover:underline"
                                  >
                                    {expandedProvider === provider.name ? 'Skjul cookies' : 'Vis cookies'}
                                  </button>
                                </div>
                                
                                <AnimatePresence>
                                  {expandedProvider === provider.name && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-3"
                                    >
                                      <div className="space-y-2">
                                        {provider.cookies.map((cookie) => (
                                          <div key={cookie.name} className="text-sm text-neutral-600">
                                            <div className="font-medium">{cookie.name}</div>
                                            <div className="pl-4 space-y-1">
                                              <div>Beskrivelse: {cookie.description}</div>
                                              <div>Opbevaring: {cookie.storage}</div>
                                              <div>Varighed: {cookie.duration}</div>
                                              <div>Type: {cookie.type}</div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t border-neutral-200">
                  <button
                    onClick={rejectAll}
                    className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                  >
                    Afvis alle
                  </button>
                  <button
                    onClick={acceptAll}
                    className="rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900"
                  >
                    Accepter alle
                  </button>
                  <button
                    onClick={() => savePreferences(preferences)}
                    className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Gem valg
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Cookie Settings Button */}
      <button
        onClick={withdrawConsent}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center transition hover:bg-neutral-200 z-40"
        aria-label="Cookie-indstillinger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-neutral-950"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </AnimatePresence>
  )
} 