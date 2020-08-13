import Link from 'next/link'
import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import { MastheadLogo, MastheadLogoDark } from '../components/masthead-logo'

export default function Index() {
  return (
    <>
      <Callout>
        <Wrapper>
          <div>Black Lives Matter</div>
        </Wrapper>
      </Callout>
      <Header>
        <Wrapper>
          <div>
            <Link href='/'>
              <a> chrish/rtm/n</a>
            </Link>
            <a>Mode Toggle</a>
          </div>
          <nav>
            <ul>
              <li>About</li>
              <li>Dashboard</li>
              <li>Posts</li>
              <li>Bookmarks?</li>
              <li>Work</li>
              <li>Resume?</li>
              <li>Contact</li>
            </ul>
          </nav>
        </Wrapper>
      </Header>

      <Masthead>
        <MastheadLogo />
        {/*<MastheadLogoDark />*/}
      </Masthead>
    </>
  )
}

const Callout = styled.section`
  height: 50px;
  text-align: center;
  color: var(--color-white);
  background: var(--color-base);
`

const Header = styled.header`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const Masthead = styled.section``
