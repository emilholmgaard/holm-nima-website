'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    if (!hasAccepted) {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
    savePreferences()
  }

  const rejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    })
    savePreferences()
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setShowConsent(false)
  }

  const toggleCategory = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return // Can't toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-6 z-50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-950 mb-2">
                  Cookie-indstillinger
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. 
                  Du kan vælge, hvilke cookies du vil acceptere. 
                  Læs mere i vores <Link href="/privatlivspolitik" className="text-blue-950 hover:underline">privatlivspolitik</Link>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-950">Nødvendige cookies</h4>
                    <p className="text-sm text-neutral-600">Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt.</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="h-4 w-4 rounded border-neutral-300 text-blue-950 focus:ring-blue-950"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-950">Analytics cookies</h4>
                    <p className="text-sm text-neutral-600">Hjælper os med at forbedre vores hjemmeside ved at indsamle anonymiseret data om brug.</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => toggleCategory('analytics')}
                      className="h-4 w-4 rounded border-neutral-300 text-blue-950 focus:ring-blue-950"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-neutral-950">Marketing cookies</h4>
                    <p className="text-sm text-neutral-600">Bruges til at vise relevante annoncer og forbedre din oplevelse.</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => toggleCategory('marketing')}
                      className="h-4 w-4 rounded border-neutral-300 text-blue-950 focus:ring-blue-950"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
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
                  onClick={savePreferences}
                  className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Gem valg
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 