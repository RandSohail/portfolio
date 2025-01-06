import styled, { createGlobalStyle } from 'styled-components';
import BK from './assets/background.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap');
  
:root{
  --primary-color: #B56BE3;
  --secondary-color: #EFD4D1;
  --color1: #140F20;
  --color2: #C8A1E0;
  --color3: #F9E6CF;
  --navbar-background-color: #131010;
  --monospace-font: "Afacad Flux", sans-serif;
  --gradient-text: linear-gradient(45deg, var(--primary-color), var(--secondary-color));

}
body, html {
  margin: 0px;
  padding: 0px;
  background-image: url(${BK});
  background-size: cover;
  background-attachment: fixed;
  color: var(--secondary-color);
  font-family: "Afacad Flux", serif;
  letter-spacing: 0.09em;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0px auto;
`;
export const Title = styled.h1`
  color: var(--color2);
`;
export default GlobalStyle;
