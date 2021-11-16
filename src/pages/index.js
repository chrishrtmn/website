import Head from 'next/head'

import Masthead from '../components/home/masthead'
import Companies from '../components/home/companies'
import Recent from '../components/home/recent'
import Knowledge from '../components/home/knowledge'
import Statistics from '../components/home/statistics'
import Personal from '../components/home/personal'
import Outro from '../components/home/outro'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman | Front-End Developer</title>
      </Head>

      <Masthead />
      <Recent />
      <Companies />
      <Knowledge />
      <Statistics />
      <Personal />
      <Outro />
      <Footer />
    </>
  )
}
