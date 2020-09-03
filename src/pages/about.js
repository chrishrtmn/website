import Header from '../components/header'

export default function About() {
  return (
    <>
      <Header />

      <div className='w-full max-w-screen-lg p-4 mx-auto'>
        <section className='grid grid-cols-2'>
          <div>
            <div>
              <h3 className='text-2xl bold'>Software</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
                <li>Apple Music</li>
              </ul>
            </div>

            <div className='mt-8'>
              <h3 className='text-2xl bold'>Hardware</h3>
              <ul>
                <li>16" Macbook Pro (2019)</li>
                <li>Dell UltraSharp 38" Curved Monitor (U3818DW)</li>
                <li>Apple Magic Keyboard</li>
                <li>Logitech MX Master 2</li>
                <li>Autonomous SmartDesk 2</li>
                <li>Autonomous ErgoChair 2</li>
                <li>Audioengine A5 Powered Speakers</li>
                <li>Audioengine S8 Powered Subwoofer</li>
                <li>Sony A6400 Camera</li>
                <li>35mm Sigma Prime Lens</li>
                <li>16mm Sigma Prime Lens</li>
                <li>Elgato Cam Link 4K</li>
                <li>Elgato Key Light</li>
                <li>Elgato Stream Deck Mini</li>
                <li>Apple iPhone 11 Pro</li>
                <li>Apple Watch Series 4</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className='text-2xl bold'>Online</h3>
              <ul>
                <li>Open-Source</li>
                <li>Entrepreneurship</li>
                <li>Visual Design</li>
              </ul>
            </div>

            <div className='mt-8'>
              <h3 className='text-2xl bold'>Offline</h3>
              <ul>
                <li>Onewheel</li>
                <li>Mountain Biking</li>
                <li>Kayaking</li>
                <li>Coffee</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
