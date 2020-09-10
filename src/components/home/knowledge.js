import SVGIcon from '../icon'

import { Dev, Design, Services, Principles } from '../../data/knowledge'

export default function SectionKnowledge() {
  return (
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
        <SVGIcon name='dev' className='inline-block w-4 h-6 mb-1 mr-2' />
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
        <SVGIcon name='design' className='inline-block w-4 h-6 mb-1 mr-2' />
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
        <SVGIcon name='services' className='inline-block w-4 h-6 mb-1 mr-2' />
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
        <SVGIcon name='principles' className='inline-block w-4 h-6 mb-1 mr-2' />
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
  )
}
