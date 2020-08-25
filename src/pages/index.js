import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>
          <h1>Chris Hartman</h1>
          <h2>Front-End Developer</h2>
          <p>Site is a work in progress.</p>
        </Wrapper>
      </div>
    </>
  )
}
