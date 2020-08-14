import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    --color-base: #222;

    --color-dark-base: #888;
    --color-dark-pink: #e336ff;
    --color-dark-blue: #94e8fb;

    --color-bg-base: #fff;

    --font-family-heading: 'Inter', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
