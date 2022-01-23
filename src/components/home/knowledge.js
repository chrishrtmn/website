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
        <div className='mb-6'>
          <h2 className='text-xl font-bold text-gray-800 md:text-2xl'>
            Relevant Skills &amp; Knowledge
          </h2>
        </div>

        <h3 className='mb-1 text-gray-800 text-md'>
          <SVGIcon name='code' className='inline-block w-4 h-6 mb-1 mr-2' />
          Development{' '}
        </h3>
        <div>
          <span className='pill'>React.js</span>
          <span className='pill'>Next.js</span>
          <span className='pill'>Sass</span>
          <span className='pill'>Tailwind CSS</span>
          <span className='pill'>CSS-in-JS</span>
          <span className='pill'>Drupal</span>
          <span className='pill'>Git</span>
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
