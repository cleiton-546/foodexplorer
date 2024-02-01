import styled from "styled-components";

export const Container = styled.div`
  > main {
    padding: 40px 123px 193px;
    font-size: 16px;
    font-weight: 400;

    .add {
      font-size: 32px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-top: 24px;
      margin-bottom: 32px;
    }
    .name {
      display: flex;
      gap: 32px;
      .left {
        width: 70%;
      }
    }
    .name h3 {
      margin-bottom: 16px;
    }

    .inputImg {
      width: 50%;
      height: 48px;

      > h3 {
        margin-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        font-weight: 400;
      }

      > input {
        display: none;
      }

      > label {
        height: 100%;
        width: 100%;
        padding: 12px 32px;
        display: flex;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        gap: 10px;

        > span {
          font-size: 14px;
        }
      }
    }

    .section {
      display: flex;
      width: auto;
      justify-content: space-between;
      margin-top: 32px;
      margin-bottom: 32px;
      gap: 32px;
    }

    .ingredient {
      display: flex;
      height: 48px;
      padding: 4px 8px;
      gap: 16px;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;
    }

    .value {
      width: 25%;
    }

    .button {
      display: flex;
      justify-content: flex-end;
      gap: 32px;
      margin-top: 28px;
    }

    .button button {
      width: 172px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    .button > :nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }
`;
