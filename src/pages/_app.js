import { AnimatePresence } from 'framer-motion'

import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}
