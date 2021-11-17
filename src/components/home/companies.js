import { useState } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'
import SVGIcon from '../svg-icons'

const Companies = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <div className='my-20 transform -skew-y-3 md:my-36'>
      <div className='w-full max-w-screen-lg px-4 mx-auto'>
        <h2 className='mb-4 text-xl text-gray-800 md:text-2xl'>
          Several{' '}
          <strong className='font-bold text-gray-800'>
            Projects &amp; Companies
          </strong>{' '}
          I've had the pleasure of working with{' '}
          <SVGIcon
            name='corner-right-down'
            fill='text-gray-800'
            className='inline-block w-4 h-4 mt-1 md:mt-4 md:h-7 md:w-7'
          />
        </h2>
      </div>
      <div className='w-full bg-gradient-to-r from-secondary to-primary'>
        <div className='pt-8 pb-6 mx-auto text-2xl lg:py-20 lg:text-3xl'>
          <PageVisibility onChange={handleVisibilityChange}>
            {pageIsVisible && (
              <>
                <Ticker speed={2} height='40'>
                  {({ index }) => (
                    <>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        OU Medicine
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        American Salon
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Estée Lauder Companies
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Sony Music
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        ASU
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Warner Music Group
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Olive Garden
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Big Lots
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Stanford University
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        GNC
                      </span>
                      <span
                        key={index}
                        className='mx-4 md:mx-6 lg:mx-8 whitespace-nowrap'
                      >
                        Value City Furniture
                      </span>
                    </>
                  )}
                </Ticker>
              </>
            )}
          </PageVisibility>
        </div>
      </div>
    </div>
  )
}

export default Companies
