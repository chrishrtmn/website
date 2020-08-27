import Link from 'next/link'

import Wrapper from './wrapper'
import ToggleTheme from './toggle-theme'

export default function Header() {
  return (
    <header>
      <Wrapper>
        <Link href='/'>
          <a>Logo</a>
        </Link>
        <div>
          <ToggleTheme />
          <nav>
            <Link href='/about'>
              <a>About</a>
            </Link>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
            <Link href='/resume'>
              <a>Resume</a>
            </Link>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}
