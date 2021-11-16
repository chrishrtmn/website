import PlausibleProvider from 'next-plausible'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

import '../styles/base.css'
import '../styles/components.css'
import '../styles/custom.css'
import '../styles/utilities.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(1941197, 6)
  }, [])
  return (
    <PlausibleProvider domain="chrishrtmn.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
