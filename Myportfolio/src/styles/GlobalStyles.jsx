import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
  }

  .container {
    width: 80%;
    margin: auto;
    overflow: hidden;
  }
`;

export default GlobalStyles;