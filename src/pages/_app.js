import PlausibleProvider from 'next-plausible'

import '../styles/base.css'
import '../styles/components.css'
import '../styles/custom.css'
import '../styles/utilities.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="chrishrtmn.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
