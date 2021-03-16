import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: "OpenSans";
    src: url("/fonts/OpenSans/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  } */


  * {
    font-family: Lato, Karla, OpenSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
  }

  ${({ theme, removeMainBg }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      background-color: #ffffff;
      color: #000000;
    }

    span::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    p::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h1::selection {
      background: #0000;
      color: #ffffff;
    }

    h2::selection {
      background: #0000;
      color: #ffffff;
    }

    h3::selection {
      background: #0000;
      color: #ffffff;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    a:hover {
    }
  `}

`;

export default GlobalStyles;
