import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 0px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 80px;
  gap: 32px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .brand {
    display: block;

    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .brand svg {
    margin-top: 4px;
    width: 30px;
    height: 30px;
  }

  .input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    align-items: center;
    border-radius: 5px;
  }

  .input div {
    width: 100%;
    display: flex;
    border: none;
  }

  .input input {
    background: transparent;
  }

  .input svg {
    margin-left: 150px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    z-index: 1;
  }

  .button {
    width: 35%;
  }

  .button button {
    padding: 12px 32px;
  }
  
  .buttonRequest {
     width: 350px;
   
  } 

  .buttonRequest button  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
  }
`; 

export const NewDish = styled(Link)`
width: 35%;
border-radius: 8px;
`

export const Logout = styled.button`
display: block;
border: none;
background-color: transparent;

svg {
    cursor: pointer;
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
}
`;