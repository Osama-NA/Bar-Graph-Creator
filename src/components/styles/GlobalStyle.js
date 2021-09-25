import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.lightBlack};
    }
`