import styled from "styled-components";
import backgroundImg from '../../assets/prato.png'

export const Container = styled.div`
  > main {
    margin: 32px 120px 150px;

    .container {
      display: flex;
      margin-top: 42px;
      gap: 42px;

      > img {
        width: 390px;
        height: 389px;
        flex-shrink: 0;
      }
    }

    .content {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      h2 {
        font-size: 40px;
        font-weight: 500;
        margin-top: 45px;
        margin-bottom: 24px;
      }

      h4 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 24px;
      }
    }

    .ingredients {
      margin-bottom: 52px;
    }

    .button {
      justify-content: start;
      width: 131px;
    }

    .add {
      display: flex;
      width: 100%;
      height: 45px;
      gap: 25px;
      justify-content: center;
      align-items: center;
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
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      
    }
  }
`;






