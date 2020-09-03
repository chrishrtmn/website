import Head from 'next/head'

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
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>PostCSS</span>
            <span>styled-components</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Vue</span>
            <span>Framer Motion</span>
            <span>Contentful</span>
            <span>PHP</span>
            <span>Drupal</span>
            <span>Laravel</span>
            <span>Git</span>
            <span>NPM</span>
            <span>Webpack</span>
            <span>Gulp</span>
            <span>Grunt</span>
            <span>Vercel</span>
          </div>

          <h3 className='mt-3 mb-1'>Design</h3>
          <div>
            <span>Adobe Photoshop</span>
            <span>Figma</span>
            <span>UI Design</span>
            <span>Style Guides</span>
            <span>Design Systems</span>
          </div>

          <h3 className='mt-3 mb-1'>Principles</h3>
          <div>
            <span>Accessibility</span>
            <span>Responsive Web Design</span>
            <span>DRY Patterns</span>
            <span>Graceful Degradation</span>
            <span>Performance</span>
            <span>Modular Architectures</span>
            <span>Web Standards</span>
          </div>
        </section>
      </div>
    </>
  )
}
