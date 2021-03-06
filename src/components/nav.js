import SVGIcon from './svg-icons'

export default function Nav() {
  return (
    <nav
      className='flex-none hidden mt-8 transform skew-y-3 md:mt-10 lg:mt-12'
      role='menu'
    >
      <SVGIcon name='lightbulb' className='inline-block h-8 mx-4' />
      <SVGIcon name='menu' className='inline-block h-8 mx-4' />
    </nav>
  )
}
