import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
    }
  }
  
  html, body, #root {
    font-family: 'Rubik', sans-serif;
    color: #ecf0f1;
    background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    :visited {
      color: #ecf0f1 !important;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 2px 2px 2px #d1d8e092;
    background: #fff;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #4d4d4d60;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #4d4d4d71;
  }
`;
