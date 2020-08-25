import Link from 'next/link'

import Wrapper from './wrapper'

import ToggleDarkMode from './toggle-dark-mode'

export default function Header() {
  return (
    <>
      <header>
        <Wrapper>
          <Link href='/'>
            <a>Logo</a>
          </Link>
          <div>
            <ToggleDarkMode />
            <nav>
              <Link href='/about'>
                <a>About</a>
              </Link>
              <Link href='/work'>
                <a>Work</a>
              </Link>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </nav>
          </div>
        </Wrapper>
      </header>
    </>
  )
}
