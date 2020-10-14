import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  :root{
    --color-blue: #3FD0D4;
    --color-light-green: #03796D;
    --color-dark-green: #266B64;
    --color-white: #fefefe;
    --color-gray: #595959;
    --color-light-gray: #fbfafa;
    --color-black: #212121;
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
    font-size: 16px;
    overscroll-behavior: none;
    overflow-x: hidden;
  }

  ::selection {
    background-color: var(--color-blue);
    color: var(--color-white);
  }

  .is--display--none{
    display: none;
  }
`;

export default GlobalStyle;
