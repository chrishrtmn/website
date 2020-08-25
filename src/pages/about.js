import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>About</Wrapper>
      </div>
    </>
  )
}
