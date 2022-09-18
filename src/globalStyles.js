import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }
`

export default GlobalStyle;