import { Interests, Software, Hardware } from '../../data/personal'

export default function Personal() {
  return (
    <section className='mt-8 md:mt-16'>
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
        <a href='http://github.com/chrishrtmn' target='_blank'>
          <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
            Github
          </span>
        </a>
        <a href='http://linkedin.com/in/chrishrtmn' target='_blank'>
          <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
            LinkedIn
          </span>
        </a>
        <a href='http://twitter.com/chrishrtmn' target='_blank'>
          <span className='inline-block px-2 py-1 my-1 mr-2 text-xs text-gray-600 uppercase border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600'>
            Twitter
          </span>
        </a>
      </div>

      <div className='mt-16 text-xs italic text-center text-gray-500'>
        Site is a work in progress. Made using React with Next.js, styled with
        Tailwind CSS, and hosted on Vercel.
      </div>
    </section>
  )
}
