import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
  }

  body {
    box-sizing: border-box;
  }
`

export default GlobalStyle;