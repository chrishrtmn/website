import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Custom Properties */
  html {
    --color-base: #222;

    --color-dark-base: #888;
    --color-dark-pink: #e336ff;
    --color-dark-blue: #94e8fb;

    --color-bg-base: #fff;

    --font-family-heading: 'Inter', sans-serif;
  }

  /* Reset */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base */
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};

    transition: all 0.25s linear;
  }

  /* Themes */
  body.light-mode {
    background-color: #fff;
    color: #333;
  }

  body.dark-mode {
    background-color: #1a1919;
    color: #999;
  }
`

export default GlobalStyles
