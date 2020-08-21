import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
  }

  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    background-color: var(--color-bg-base);
    color: var(--color-base);
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }
  
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #__next {
    height: 100%;
  }
`
