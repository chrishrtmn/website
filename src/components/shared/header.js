import Link from 'next/link'

import Wrapper from './wrapper'

import ToggleDarkMode from './toggle-dark-mode'

export default function Header() {
  return (
    <>
      <header>
        <Wrapper>
          <Link href='/'>Logo</Link>
          <div>
            <ToggleDarkMode />
            <nav>
              <Link href='/about'>About</Link>
              <Link href='/work'>Work</Link>
              <Link href='/contact'>Contact</Link>
            </nav>
          </div>
        </Wrapper>
      </header>
    </>
  )
}
