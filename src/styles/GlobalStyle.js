import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
  }

  h1 {
    text-align: center;
    color: #333;
  }
`;

export default GlobalStyle;
