import SVGIcon from '../svg-icons'

import { Interests, Software, Hardware } from '../../data/personal'

export default function Personal() {
  return (
    <section className='mt-8 md:mt-16'>
      <div className='flex items-center content-between mb-6'>
        <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
          Up-Close &amp; Personal
        </h2>
        {/*<SignPersonal />*/}
      </div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon
          name='emoji-happy'
          className='inline-block w-4 h-6 mb-1 mr-2'
        />
        Interests
      </h3>
      <div>
        {Interests.map((value, index) => {
          return (
            <span key={index} className='pill'>
              {value}
            </span>
          )
        })}
      </div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='chart-pie' className='inline-block w-4 h-6 mb-1 mr-2' />
        Software
      </h3>
      <div>
        {Software.map((value, index) => {
          return (
            <span key={index} className='pill'>
              {value}
            </span>
          )
        })}
      </div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='chip' className='inline-block w-4 h-6 mb-1 mr-2' />
        Hardware
      </h3>
      <div>
        {Hardware.map((value, index) => {
          return (
            <span key={index} className='pill'>
              {value}
            </span>
          )
        })}
      </div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon
          name='external-link'
          className='inline-block w-4 h-6 mb-1 mr-2'
        />
        Profiles
      </h3>
      <div>
        <a
          href='http://github.com/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='pill'>Github</span>
        </a>
        <a
          href='http://linkedin.com/in/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='pill'>LinkedIn</span>
        </a>
        <a
          href='http://twitter.com/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='pill'>Twitter</span>
        </a>
      </div>
    </section>
  )
}
