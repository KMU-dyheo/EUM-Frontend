/* eslint-disable import/no-named-as-default */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  #root, 
  body,html {
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 18px;
  }
 
  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }

  input:focus {
    outline: none;
  }
  
  textarea:focus {
    outline: none;
  }
`;
