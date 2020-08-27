import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Resume</Wrapper>
      </div>
    </>
  )
}
