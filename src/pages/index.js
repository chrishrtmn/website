import Head from 'next/head'

import {
  Dev,
  Design,
  Services,
  Principles,
  Interests,
  Software,
  Hardware,
} from '../utilities/data'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chris Hartman</title>
      </Head>

      <div className='pt-24 mb-4 -mt-12 transform -skew-y-3 bg-gradient-to-r from-secondary to-primary'>
        <div className='flex w-full max-w-screen-lg mx-auto'>
          <h1 className='flex-grow px-4 py-6 my-2 mr-4 text-2xl font-bold leading-none uppercase md:text-5xl lg:text-6xl'>
            Chris Hartman
          </h1>

          <nav className='flex-none hidden mt-8 transform skew-y-3 md:mt-10 lg:mt-12'>
            <svg
              className='inline-block h-8 mx-4'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              />
            </svg>

            <svg
              className='inline-block h-8 mx-4'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </nav>
        </div>
      </div>

      <div className='w-full max-w-screen-lg px-4 mx-auto'>
        <p className='text-lg text-gray-600 transform -skew-y-3 md:text-2xl lg:text-3xl'>
          A design-minded{' '}
          <strong className='font-bold text-gray-800'>
            Front-End Developer
          </strong>{' '}
          focused on building beautiful interfaces and experiences.
        </p>

        <section className='my-16 md:my-32'>
          <div className='flex items-center content-between mb-6'>
            <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
              Skills &amp; Knowledge
            </h2>
            <span
              className='hidden text-6xl leading-none text-right text-gray-400 md:block font-signs'
              aria-hidden='true'
            >
              Knowledge
            </span>
          </div>

          <h3 className='mb-1 text-gray-800 text-md'>
            <svg
              className='inline-block w-4 h-6 mb-1 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
            Development
          </h3>
          <div>
            {Dev.map((value, index) => {
              return (
                <span
                  key={index}
                  className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                >
                  {value}
                </span>
              )
            })}
          </div>

          <h3 className='mt-8 mb-1 text-gray-800 text-md'>
            <svg
              className='inline-block w-4 h-6 mb-1 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            Design
          </h3>
          <div>
            {Design.map((value, index) => {
              return (
                <span
                  key={index}
                  className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                >
                  {value}
                </span>
              )
            })}
          </div>

          <h3 className='mt-8 mb-1 text-gray-800 text-md'>
            <svg
              className='inline-block w-4 h-6 mb-1 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              />
            </svg>
            Services
          </h3>
          <div>
            {Services.map((value, index) => {
              return (
                <span
                  key={index}
                  className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                >
                  {value}
                </span>
              )
            })}
          </div>

          <h3 className='mt-8 mb-1 text-gray-800 text-md'>
            <svg
              className='inline-block w-4 h-6 mb-1 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
              />
            </svg>
            Principles
          </h3>
          <div>
            {Principles.map((value, index) => {
              return (
                <span
                  key={index}
                  className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                >
                  {value}
                </span>
              )
            })}
          </div>
        </section>
      </div>

      <div className='w-full transform -skew-y-3 bg-gradient-to-r from-secondary to-primary'>
        <section className='max-w-screen-lg grid-cols-3 mx-auto transform skew-y-3 md:grid'>
          <div className='py-6 text-center md:py-24 '>
            <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>
              250+
            </div>
            <div>Websites Developed</div>
            <svg
              className='h-8 mx-auto mt-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              />
            </svg>
          </div>
          <div className='py-6 text-center md:py-24'>
            <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>
              12+
            </div>
            <div>Years of Experience</div>
            <svg
              className='h-8 mx-auto mt-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div className='py-6 text-center md:py-24'>
            <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>11</div>
            <div>Volume Cranked</div>
            <svg
              className='h-8 mx-auto mt-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
              />
            </svg>
          </div>
        </section>
      </div>

      <div className='w-full max-w-screen-lg py-10 mx-auto'>
        <div className='w-full max-w-screen-lg px-4 mx-auto'>
          <section className='mt-16 md:mt-32'>
            <div className='flex items-center content-between mb-6'>
              <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
                Up-Close &amp; Personal
              </h2>
              <span
                className='hidden text-6xl leading-none text-right text-gray-400 md:block font-signs'
                aria-hidden='true'
              >
                Personal
              </span>
            </div>

            <h3 className='mt-8 mb-1 text-gray-800 text-md'>
              <svg
                className='inline-block w-4 h-6 mb-1 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Interests
            </h3>
            <div>
              {Interests.map((value, index) => {
                return (
                  <span
                    key={index}
                    className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                  >
                    {value}
                  </span>
                )
              })}
            </div>

            <h3 className='mt-8 mb-1 text-gray-800 text-md'>
              <svg
                className='inline-block w-4 h-6 mb-1 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
                />
              </svg>
              Software
            </h3>
            <div>
              {Software.map((value, index) => {
                return (
                  <span
                    key={index}
                    className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                  >
                    {value}
                  </span>
                )
              })}
            </div>

            <h3 className='mt-8 mb-1 text-gray-800 text-md'>
              <svg
                className='inline-block w-4 h-6 mb-1 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                />
              </svg>
              Hardware
            </h3>
            <div>
              {Hardware.map((value, index) => {
                return (
                  <span
                    key={index}
                    className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded'
                  >
                    {value}
                  </span>
                )
              })}
            </div>

            <h3 className='mt-8 mb-1 text-gray-800 text-md'>
              <svg
                className='inline-block w-4 h-6 mb-1 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                />
              </svg>
              Profiles
            </h3>
            <div>
              <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
                <a href='http://github.com/chrishrtmn' target='_blank'>
                  Github
                </a>
              </span>
              <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
                <a href='http://linkedin.com/in/chrishrtmn' target='_blank'>
                  LinkedIn
                </a>
              </span>
              <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
                <a href='http://twitter.com/chrishrtmn' target='_blank'>
                  Twitter
                </a>
              </span>
            </div>

            <div className='mt-16 text-xs italic text-center text-gray-500'>
              Site is a work in progress. Made using React with Next.js, styled
              with Tailwind CSS, and hosted on Vercel.
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
