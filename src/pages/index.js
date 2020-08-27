import Head from 'next/head'

import Wrapper from '../components/shared/wrapper'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman</title>
      </Head>

      <div className='container'>
        <Header />

        <Wrapper>
          <section className='masthead'>
            <h1>Chris Hartman</h1>
            <h2>Front-End Developer</h2>
            <p>Site is a work in progress.</p>
          </section>

          <section>
            <h2>Featured Projects</h2>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <a>View more</a>
          </section>

          <section>
            <h2>Featured Companies</h2>
            <div>Sony Music</div>
            <div>Warner Bros. Records</div>
            <div>Olive Garden</div>
            <a>View more</a>
          </section>

          <section>
            <h2>Stats/API Data</h2>
            <div>Github</div>
            <div>YouTube</div>
            <div>Etc</div>
          </section>

          <section>
            <h2>Timeline</h2>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <a>View more</a>
          </section>

          <section></section>
        </Wrapper>

        <Footer />
      </div>
    </>
  )
}
