import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 300;
  src: url('https://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7PqtlsnDvecq7Gq0DDzS.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 300;
  src: url('https://fonts.gstatic.com/s/sourcecodepro/v13/HI_XiYsKILxRpg3hIP6sJ7fM7PqtlsnDs-cq7Gq0DA.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
} 

body {
  background: #0f0f23; /*337 x 5*/
  color: #cccccc;
  font-family: "Source Code Pro", monospace;
  font-size: 14pt;
  min-width: 60em;
}


a { outline:0; }

a {
  text-decoration: none;
  color: #009900;
}
a:hover, a:focus {
  color: #99ff99;
}
h1, h2 {
  font-size: 1em;
  font-weight: normal;
}


`;

export default GlobalStyle;
