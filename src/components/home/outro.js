const Outro = () => {
  return (
    <div className='w-full max-w-screen-lg px-4 mx-auto'>
      <section>
        <h2 className='flex-grow mb-6 text-xl font-bold text-gray-800 md:text-2xl'>
          Availability
        </h2>
        <p className='leading-loose md:leading-normal'>
          I'm currently freelancing and working on side-projects. However, I am
          available for contract work and full-time roles. Get in touch with me
          at{' '}
          <a href='mailto:hello@chrishrtmn.com' className='inline-block'>
            <span className='mr-0 text-blue-400 border-blue-100 bg-blue-50 pill'>
              hello@chrishrtmn.com
            </span>
          </a>{' '}
          if you have any interest in working together!
        </p>
      </section>
    </div>
  )
}

export default Outro
