import Head from 'next/head'

import Wrapper from '../../components/shared/wrapper'
import Header from '../../components/shared/header'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Posts</Wrapper>
      </div>
    </>
  )
}
