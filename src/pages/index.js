import Head from 'next/head'

import Footer from '../components/footer'

import Masthead from '../components/masthead'
import Knowledge from '../components/home/knowledge'
import Statistics from '../components/home/statistics'
import Personal from '../components/home/personal'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman | Front-End Developer</title>
      </Head>

      <Masthead />

      <div className='w-full max-w-screen-lg px-4 mx-auto'>
        <Knowledge />
      </div>

      <div className='w-full transform -skew-y-3 bg-gradient-to-r from-secondary to-primary'>
        <Statistics />
      </div>

      <div className='w-full max-w-screen-lg px-4 py-10 mx-auto'>
        <Personal />
      </div>

      <Footer />
    </>
  )
}
