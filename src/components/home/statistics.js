import SVGIcon from '../svg-icons'

export default function Statistics() {
  return (
    <div className='my-20 transform -skew-y-3 md:my-36'>
      <div className='w-full bg-gradient-to-r from-secondary to-primary shake-container'>
        <section className='max-w-screen-lg grid-cols-3 mx-auto sm:grid'>
          <div className='py-6 text-center lg:py-20'>
            <div className='text-2xl font-bold sm:text-3xl md:text-5xl'>
              260+
            </div>
            <div>Websites Developed</div>
            <SVGIcon name='globe' className='h-8 mx-auto mt-2' />
          </div>

          <div className='py-6 text-center lg:py-20'>
            <div className='text-2xl font-bold sm:text-3xl md:text-5xl'>
              14+
            </div>
            <div>Years of Experience</div>
            <SVGIcon name='briefcase' className='h-8 mx-auto mt-2' />
          </div>

          <div className='py-6 text-center lg:py-20 shake motion-reduce:transition-none motion-reduce:transform-none'>
            <div className='text-2xl font-bold sm:text-3xl md:text-5xl'>11</div>
            <div>Volume Cranked</div>
            <SVGIcon name='volume-up' className='h-8 mx-auto mt-2' />
          </div>
        </section>
      </div>
    </div>
  )
}
