import Image from 'next/image'
import SVGIcon from '../svg-icons'

const Recent = () => {
  return (
    <section className='my-16 md:my-32'>
      <h2 className='flex-grow mb-6 text-xl font-bold text-gray-800 md:text-2xl'>
        Recent Projects
      </h2>
      <div className='sm:flex'>
        <a
          href='https://remotejamstack.com'
          target='_blank'
          rel='noopener'
          className='block p-3 pb-2 sm:max-w-sm sm:mr-10 bg-gradient-to-r from-secondary to-primary'
        >
          <Image
            src='/images/home-featured-screenshot.png'
            alt='Remote Jamstack screenshot'
            width={640}
            height={395}
            quality='100'
            priority
          />
        </a>
        <div className='pt-5 sm:pt-6 md:pt-16 lg:pt-20'>
          <a
            className='block mb-2 font-bold text-gray-800 transition sm:text-xl text-md hover:text-red-500'
            href='https://remotejamstack.com'
            target='_blank'
            rel='noopener'
          >
            Remote Jamstack{' '}
            <SVGIcon
              name='external-link'
              className='inline-block w-4 h-6 mb-1 mr-2'
            />{' '}
            <span className='block mt-1 text-xs font-normal text-red-400 uppercase sm:text-sm md:inline-block md:ml-2 md:mt-0'>
              Status: Ongoing
            </span>
          </a>
          <p className='text-gray-500'>
            Design and development all done by me. Project built with React.js,
            Next.js, Tailwind CSS, Firebase, Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Recent
