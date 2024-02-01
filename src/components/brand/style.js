import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    display: flex;
    gap: 15px;
    white-space: nowrap;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 12px;
  }
`;

