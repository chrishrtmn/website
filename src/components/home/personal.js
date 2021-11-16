import SVGIcon from '../svg-icons'

import { Interests } from '../../data/personal'

export default function Personal() {
  return (
    <div className='w-full max-w-screen-lg px-4 py-10 mx-auto'>
      <section className='mt-16 mb-16 md:mt-32'>
        <div className='flex items-center content-between mb-6'>
          <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
            Up-Close &amp; Personal
          </h2>
        </div>

        <h3 className='mt-8 mb-1 text-gray-800 text-md'>
          <SVGIcon
            name='emoji-happy'
            className='inline-block w-4 h-6 mb-1 mr-2'
          />
          Personal Interests
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
          <SVGIcon
            name='external-link'
            className='inline-block w-4 h-6 mb-1 mr-2'
          />
          Social Profiles
        </h3>
        <div>
          <a
            href='http://github.com/chrishrtmn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-400 border-blue-100 bg-blue-50 pill'>
              Github
            </span>
          </a>
          <a
            href='http://linkedin.com/in/chrishrtmn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-400 border-blue-100 bg-blue-50 pill'>
              LinkedIn
            </span>
          </a>
          <a
            href='http://twitter.com/chrishrtmn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-blue-400 border-blue-100 bg-blue-50 pill'>
              Twitter
            </span>
          </a>
        </div>

        {/* <h3 className='mt-8 mb-1 text-gray-800 text-md'>
          <SVGIcon
            name='paper-clip'
            className='inline-block w-4 h-6 mb-1 mr-2'
          />
          Resume &amp; Examples
        </h3>
        <div>
          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            <span className='text-blue-400 border-blue-100 bg-blue-50 pill'>
              Resume.pdf
            </span>
          </a>
          <a href='/companies.pdf' target='_blank' rel='noopener noreferrer'>
            <span className='text-blue-400 border-blue-100 bg-blue-50 pill'>
              Companies.pdf
            </span>
          </a>
        </div> */}
      </section>
    </div>
  )
}
