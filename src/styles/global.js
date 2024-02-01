import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-Sizing: border-box;

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: 'Roboto', sans-serif;
  }

  h3, p, input, textarea, &placeholder {
    font-family: 'Roboto', sans-serif;
  }
  
  h4, h2, button, a {
    font-family: 'Poppins', sans-serif;
  } 

  
    svg:hover, button:hover, a:hover {
        filter: brightness(0.9);
    }

    

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 button {
  cursor: pointer;
 }



  
`;