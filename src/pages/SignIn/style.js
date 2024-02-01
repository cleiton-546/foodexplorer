import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .brand {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 700;
  }

  .brand svg {
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  margin: 50px 90px 50px 0;
  border-radius: 16px;
  width: 56%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: flex;
    padding: 64px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      margin-bottom: 32px;
      font-size: 32px;
      font-weight: 500;

    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
      font-size: 14px;
      margin-top: 32px;
      border: none;
      text-decoration: none;
    }
  }

  .input {
    width: 100%;
  }

  .input input {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 32px;
    
  }

  .input h3 {
    margin-bottom: 8px;
  }
`; 




