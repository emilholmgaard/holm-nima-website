'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      const preferences = JSON.parse(savedConsent)
      setShouldLoad(preferences.analytics)
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JHJ3M84G41"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JHJ3M84G41');
        `}
      </Script>
    </>
  )
} 