import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior: smooth;
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
        font-family: 'Nanum Gothic', sans-serif !important;
    }
    a{
        text-decoration: none;
    }
    button{
        border: none;
        outline: none;
        cursor: pointer;
    }
    input{
        border: none;
        outline:none;
    }
    ul{
        list-style:none;
    }
`;

export default GlobalStyle;
