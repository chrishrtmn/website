import SVGIcon from '../svg-icons'

import {
  DevPreferredStack,
  DevMisc,
  Design,
  Services,
  Principles,
} from '../../data/knowledge'

export default function SectionKnowledge() {
  return (
    <div className='w-full max-w-screen-lg px-4 mx-auto'>
      <section className='my-16 md:my-32'>
        <div className='items-center content-between mb-6 sm:flex'>
          <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
            Relevant Skills &amp; Knowledge
          </h2>
          <div className='block mt-2 sm:mt-0 sm:inline-block'>
            <span className='border-blue-300 pill'>Entry-Level</span>
            <span className='border-green-300 pill'>Mid-Level</span>
            <span className='border-red-300 pill'>Senior-Level</span>
          </div>
        </div>

        <h3 className='mb-1 text-gray-800 text-md'>
          <SVGIcon name='code' className='inline-block w-4 h-6 mb-1 mr-2' />
          Development{' '}
        </h3>
        <div>
          <span className='border-red-300 pill'>HTML</span>
          <span className='border-red-300 pill'>CSS</span>
          <span className='border-red-300 pill'>Sass</span>
          <span className='border-red-300 pill'>Tailwind CSS</span>
          <span className='border-red-300 pill'>styled-components</span>
          <span className='border-green-300 pill'>JavaScript</span>
          <span className='border-green-300 pill'>React.js</span>
          <span className='border-green-300 pill'>Next.js</span>
          <span className='border-blue-300 pill'>jQuery</span>
          <span className='border-green-300 pill'>Drupal</span>
          <span className='border-blue-300 pill'>Firebase</span>
          <span className='border-green-300 pill'>Webpack</span>
          <span className='border-red-300 pill'>Git</span>
          <span className='border-red-300 pill'>NPM</span>
        </div>

        <h3 className='mt-8 mb-1 text-gray-800 text-md'>
          <SVGIcon
            name='photograph'
            className='inline-block w-4 h-6 mb-1 mr-2'
          />
          Design
        </h3>
        <div>
          {Design.map((value, index) => {
            return (
              <span key={index} className='pill'>
                {value}
              </span>
            )
          })}
        </div>

        <h3 className='mt-8 mb-1 text-gray-800 text-md'>
          <SVGIcon name='scale' className='inline-block w-4 h-6 mb-1 mr-2' />
          Principles
        </h3>
        <div>
          {Principles.map((value, index) => {
            return (
              <span key={index} className='pill'>
                {value}
              </span>
            )
          })}
        </div>
      </section>
    </div>
  )
}
