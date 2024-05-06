import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --coral: #f89698;
    --forest: #578477;
    --moss: #788d7d;
    --salmon: #f2b7b1;
    --mauve: #d89fa2;
    --taupe: #8e716a;
    --sage: #9faca5;

    /* Font families */
    --script: "League Script", "Brush Script MT", cursive;
    --type: "Playfair Display", "Georgia", serif;
    --sans-serif: "Quicksand", "Arial", sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: var(--type);
    font-weight: 400;
    font-size: 1.3125em;
    line-height: 1.6;
    width: 100%;
    margin-bottom: 140px;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  .watermark {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url("./assets/zoe-schaeffer-r2SY2zsBmgM-unsplash.jpg");
    background-image: url("./assets/europeana-SMWPYQhVRuY-unsplash.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
  }

  button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--mauve);
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--type);
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: var(--taupe)};
    }
  }

h2 {
  font-family: var(--script);
  line-height: 1;
  font-size: 2.5rem;
  margin: auto;
  text-transform: lowercase;
}

/* app titles */
h3 {
  font-size: 2rem;
  position: relative;
}

.responsive {
  width: 50%;
  height: auto;
  margin: auto;
}

.stretchimage {
  width: 100%;
  height: 100%;
  position: relative;
}
`;

export default GlobalStyle;
