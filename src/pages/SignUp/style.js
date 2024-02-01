import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

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
  margin: 35px 90px 35px -90px;
  border-radius: 16px;
  width: 50%;
  padding: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  .Input {
    width: 100%;
  }

  .Input input {
    display: flex;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 32px;
      font-weight: 500;
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
      font-size: 14px;
      border: none;
      text-decoration: none;
    }
  }
`;

