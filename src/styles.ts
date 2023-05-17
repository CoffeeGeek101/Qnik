import styled, { createGlobalStyle } from "styled-components";

const breakpoints = {
    xs: "320px",
    sm: "673px",
    md: "1143px",
    lg: "1337px",
    xl: "1368px",
  }
  
export const devices = {
    xs: `max-width: ${breakpoints.xs}`,
    sm: `max-width: ${breakpoints.sm}`,
    md: `max-width: ${breakpoints.md}`,
    lg: `max-width: ${breakpoints.lg}`,
    xl: `max-width: ${breakpoints.xl}`,
  }

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;1,600&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        background-image: url('images/backdrop.jpg');
        object-fit: cover;
        background-repeat: no-repeat;
        padding: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 95vw;
`;

