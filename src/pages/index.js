import Head from 'next/head'

import { Dev, Design, Principles, Interests } from '../utilities/data'

import Header from '../components/header'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman</title>
      </Head>

      <div className='w-full max-w-screen-lg p-4 mx-auto'>
        <Header />

        <div className='py-16'>
          <h1 className='text-4xl font-bold uppercase md:text-5xl lg:text-6xl'>
            Chris Hartman
          </h1>
          <h2 className='text-2xl font-bold uppercase md:text-3xl lg:text-4xl'>
            Front-End Developer
          </h2>
        </div>

        <section className='skills'>
          <h3 className='mb-1'>Development</h3>

          <div>
            {Dev.map((value, index) => {
              return <span key={index}>{value}</span>
            })}
          </div>

          <h3 className='mt-6 mb-1'>Design</h3>
          <div>
            {Design.map((value, index) => {
              return <span key={index}>{value}</span>
            })}
          </div>

          <h3 className='mt-6 mb-1'>Principles</h3>
          <div>
            {Principles.map((value, index) => {
              return <span key={index}>{value}</span>
            })}
          </div>

          <h3 className='mt-6 mb-1'>Interests</h3>
          <div>
            {Interests.map((value, index) => {
              return <span key={index}>{value}</span>
            })}
          </div>
        </section>
      </div>
    </>
  )
}
