 import styled from "styled-components";

 export const Container = styled.div`
   display: flex;
   
   width: 100%;
   height: 60px;
   padding: 24px 100px;
   background-color: ${({ theme }) => theme.COLORS.DARK_600};
   bottom: 0;

   > footer {
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     padding: 10px;

     div {
       display: flex;
       font-size: 24px;
       font-weight: 700;
       gap: 5px;
       align-items: center;
       white-space: nowrap;
       color: ${({ theme }) => theme.COLORS.LIGHT_700};
     }
     > p {
       color: ${({ theme }) => theme.COLORS.LIGHT_200};
       font-size: 14px;
       font-weight: 400;
     }
   }
 `;