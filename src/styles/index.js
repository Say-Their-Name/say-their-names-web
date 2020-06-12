import { createGlobalStyle } from 'styled-components';
import Color from '../constants/Color';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: auto;
}

  body {
    margin: 0;
    font-family: 'Karla', sans-serif;
    padding: 0;
    background-color: ${Color.WHITE}
  }

  h1 {
    font-family: 'Karla', sans-serif;
    font-size: 3rem;
}

a {
    text-decoration: none;
}

.hover {
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.not-found {
    height: 70vh;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

`;

export default GlobalStyle;
