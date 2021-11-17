import Image from 'next/image'
import SVGIcon from '../svg-icons'

const Recent = () => {
  return (
    <div className='w-full max-w-screen-lg px-4 mx-auto'>
      <section className='my-20 md:my-36'>
        <h2 className='flex-grow mb-6 text-xl font-bold text-gray-800 md:text-2xl'>
          Recent Projects
        </h2>
        <div className='sm:flex'>
          <a
            href='https://remotejamstack.com'
            target='_blank'
            rel='noopener'
            className='block max-w-sm p-3 pb-2 sm:mr-10 bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l hover:from-primary hover:to-secondary'
          >
            <Image
              src='/images/recent-projects/remotejamstack.jpg'
              alt='Remote Jamstack screenshot'
              width={640}
              height={395}
              quality='100'
              priority
            />
          </a>
          <div className='pt-5 sm:pt-4 md:pt-12 lg:pt-16'>
            <a
              className='block mb-2 font-bold text-gray-800 transition sm:text-xl text-md hover:text-red-500'
              href='https://remotejamstack.com'
              target='_blank'
              rel='noopener'
            >
              Remote Jamstack{' '}
              <SVGIcon
                name='external-link'
                className='inline-block w-4 h-6 mr-2'
              />
            </a>
            <div className='mb-2 font-normal text-red-400 border-red-300 pill'>
              In-Progress
            </div>
            <p className='text-gray-500'>
              Full design and development. Project built with React.js, Next.js,
              Tailwind CSS, Firebase, Vercel.
            </p>
          </div>
        </div>
        <div className='my-10 sm:flex sm:my-16'>
          <a
            href='https://jobs.olivegarden.com'
            target='_blank'
            rel='noopener'
            className='block max-w-sm p-3 pb-2 sm:hidden sm:ml-10 bg-gradient-to-r from-secondary to-primary'
          >
            <Image
              src='/images/recent-projects/olivegarden.jpg'
              alt='Olive Garden screenshot'
              width={640}
              height={395}
              quality='100'
              priority
            />
          </a>
          <div className='pt-5 sm:pt-4 md:pt-12 lg:pt-16'>
            <a
              className='block mb-2 font-bold text-gray-800 transition sm:text-xl text-md hover:text-red-500'
              href='https://jobs.olivegarden.com'
              target='_blank'
              rel='noopener'
            >
              Olive Garden{' '}
              <SVGIcon
                name='external-link'
                className='inline-block w-4 h-6 mr-2'
              />
            </a>
            <div className='mb-2 font-normal text-red-400 border-red-300 pill'>
              2020
            </div>
            <p className='text-gray-500'>
              Front-end development. Project built with ASP.NET Razor
              Templating, Sass, jQuery.
            </p>
          </div>
          <a
            href='https://jobs.olivegarden.com'
            target='_blank'
            rel='noopener'
            className='hidden max-w-sm p-3 pb-2 sm:block sm:ml-10 bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l hover:from-primary hover:to-secondary'
          >
            <Image
              src='/images/recent-projects/olivegarden.jpg'
              alt='Olive Garden screenshot'
              width={640}
              height={395}
              quality='100'
              priority
            />
          </a>
        </div>
        <div className='sm:flex'>
          <a
            href='https://careers.oumedicine.com'
            target='_blank'
            rel='noopener'
            className='block max-w-sm p-3 pb-2 sm:mr-10 bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l hover:from-primary hover:to-secondary'
          >
            <Image
              src='/images/recent-projects/oumedicine.jpg'
              alt='OU Medicine screenshot'
              width={640}
              height={395}
              quality='100'
            />
          </a>
          <div className='pt-5 sm:pt-4 md:pt-12 lg:pt-16'>
            <a
              className='block mb-2 font-bold text-gray-800 transition sm:text-xl text-md hover:text-red-500'
              href='https://careers.oumedicine.com'
              target='_blank'
              rel='noopener'
            >
              OU Medicine{' '}
              <SVGIcon
                name='external-link'
                className='inline-block w-4 h-6 mr-2'
              />
            </a>
            <div className='mb-2 font-normal text-red-400 border-red-300 pill'>
              2020
            </div>
            <p className='text-gray-500'>
              Front-end development. Project built with ASP.NET Razor
              Templating, Sass, jQuery.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recent
