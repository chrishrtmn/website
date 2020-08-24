import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import ToggleDarkMode from '../components/shared/toggle-dark-mode'

const GlobalStyle = createGlobalStyle`
  body.light-mode {
    background-color: #fff;
    color: #333;
    transition: background-color 0.3s ease;
  }

  body.dark-mode {
    background-color: #1a1919;
    color: #999;
  }

 h1 {
   font-size: 4rem;
 }
`

const Container = styled.div`
  text-align: center;
`

export default function Index() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
        <p>Welcome to my website. This is a work in progress.</p>
        <ToggleDarkMode />
      </Container>
    </>
  )
}
