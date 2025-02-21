import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

  #root {
    width: 100%;
    background-color: #fff;
    padding: 50px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9d92e3;
  }

  button, input {
    outline: none;
  }

  h3 {
    font-size: 18px;
  }
`;
