import SVGIcon from '../icon'

export default function Statistics() {
  return (
    <section className='max-w-screen-lg grid-cols-3 mx-auto transform skew-y-3 md:grid'>
      <div className='py-6 text-center md:py-24 '>
        <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>250+</div>
        <div>Websites Developed</div>
        <SVGIcon name='globe' className='h-8 mx-auto mt-2' />
      </div>

      <div className='py-6 text-center md:py-24'>
        <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>12+</div>
        <div>Years of Experience</div>
        <SVGIcon name='briefcase' className='h-8 mx-auto mt-2' />
      </div>

      <div className='py-6 text-center md:py-24'>
        <div className='text-2xl font-bold md:text-3xl lg:text-5xl'>11</div>
        <div>Volume Cranked</div>
        <SVGIcon name='volume-up' className='h-8 mx-auto mt-2' />
      </div>
    </section>
  )
}
