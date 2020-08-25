import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Work</Wrapper>
      </div>
    </>
  )
}
