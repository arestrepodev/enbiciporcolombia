import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-blue: #87E1E4;
    --color-light-green: #03796D;
    --color-dark-green: #266B64;
  }

  html{
    box-sizing: border-box;
    font-family: "Josefin Sans", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  
  h1,h2,h3,h4,h5,h6{
    font-family: "Montserrat";
  }

  /* Responsive Images */
  img{
    max-width:  100%;
    height:     auto;
  }

  body{
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 1;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;
