import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #002B5B;
    --blue: #2B4865;
    --teal: #256D85;
    --mint: #8FE3CF;
    --white: #ffffff;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  html, body {
    background-color: var(--navy);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
