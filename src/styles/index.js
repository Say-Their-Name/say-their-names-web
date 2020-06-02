import { createGlobalStyle } from 'styled-components';
import Color from '../constants/Color';

const GlobalStyle = createGlobalStyle`
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

`;

export default GlobalStyle;
