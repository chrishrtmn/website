import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'

export default function Index() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Home</Wrapper>
      </div>
    </>
  )
}
