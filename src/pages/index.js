import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman</title>
      </Head>

      <div className='w-6/12 m-auto'>
        <Header />

        <div className='justify-center p-24 bg-white rounded-lg md:flex'>
          <div className='text-center md:text-left'>
            <h1 className='text-lg'>Chris Hartman</h1>
            <h2 className='text-lg'>Front-End Developer</h2>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
