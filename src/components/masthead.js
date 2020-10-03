import Nav from './nav'

//import { SignName } from './svg-signs'

export default function Masthead() {
  return (
    <>
      <div className='relative pt-24 mb-4 -mt-16 transform -skew-y-3 md:pt-32 md:-mt-16 lg:-mt-24 lg:pt-48 bg-gradient-to-r from-secondary to-primary'>
        {/*<SignName />*/}

        <div className='relative z-10 flex w-full max-w-screen-lg mx-auto'>
          <h1 className='flex-grow px-4 py-6 my-2 mr-4 text-2xl font-bold leading-none uppercase md:text-5xl lg:text-6xl'>
            Chris Hartman
          </h1>

          <Nav />
        </div>
      </div>

      <div className='w-full max-w-screen-lg px-4 mx-auto'>
        <p className='text-lg text-gray-600 transform -skew-y-3 md:text-2xl lg:text-3xl'>
          A design-minded{' '}
          <strong className='font-bold text-gray-800'>
            Front-End Developer
          </strong>{' '}
          focused on building modern web user interfaces and experiences.
        </p>
      </div>

      <div className='w-full max-w-screen-lg px-4 mx-auto'>
        <p>This is the intro</p>
      </div>
    </>
  )
}
