import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 10px; 
  }
  
  .title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.4rem;
    text-align: left;
    padding: 0.8rem 0;
  }
  
  .subtitle {
    font-size: 2rem;
    padding: 0.4rem 0;
  }
 
  ul {
    padding-inline-start: 2rem;
    li {
      font-size: 1.6rem;
      line-height: 2rem;
      &:not(:last-child) {
        margin-bottom: 0.8rem; 
      }
      //line-height: 2.8rem;
    }
  }
  
  a {
    color: inherit;
    font-weight: bold;
    //text-decoration: none;
    &:visited {
      color: inherit;
      //text-decoration: none;
    }
  }
  
  svg {
    font-size: 1.6rem;
    padding-right: 0.6rem;
    // color: lightslategray;
  }
  
  b {
    font-size: 1.6rem;
  }

  .dates-location-wrapper {
    display: flex;
    padding: 0.8rem 0 0;

    & > div {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 0.8rem;
      }
    }
  }

  .block {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export default GlobalStyle
