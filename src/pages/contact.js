import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Contact</Wrapper>
      </div>
    </>
  )
}
