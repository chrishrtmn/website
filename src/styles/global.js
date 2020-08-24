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

  body.light-mode {
    background-color: #fff;
    color: #333;
    transition: background-color 0.3s ease;
  }

  body.dark-mode {
    background-color: #1a1919;
    color: #999;
  }
`
