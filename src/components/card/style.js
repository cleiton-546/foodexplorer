import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  width: 302px;
  height: 462px;
  z-index: 1;

  gap: 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  .Icons {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .favorite.active {
    color: ${({ theme }) => theme.COLORS.TOMATO_200}
    
    
  }

  .Img {
    display: flex;
  }

  .Img img {
    width: 190px;
    height: 190px;
  }

  .favorite {
    cursor: pointer;
  }

  .edit {
    cursor: pointer;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .price {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  .Add {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .Add button {
    cursor: pointer;
    background: transparent;
    border: none;
    max-width: 30px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 1px;
  }

  .Add svg:hover {
    filter: brightness(0.5);
  }

  .add {
    display: flex;
    width: 100%;
    height: 45px;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }

  .add button {
    width: 100px;
  }
`;
