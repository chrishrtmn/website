import Head from 'next/head'

import Wrapper from '../../components/shared/wrapper'
import Header from '../../components/shared/header'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />
        <Wrapper>Projects</Wrapper>
      </div>
    </>
  )
}
