import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 50px;
  border: 0;
  padding: 0 16px;
  
  white-space: nowrap;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;

  &:disabled {
    opacity: 0.5;
  }
`;
