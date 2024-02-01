import styled from "styled-components";


export const Container = styled.div`
  > main {
    padding: 150px 120px;
  }

  .gradient {
    background: 90deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%;

    > h2 {
      margin-top: 47px;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 32px;
      font-weight: 500;
    }

  .button {
    height: 100%;
    width: 100%;

    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(
        --Gradients-100,
        linear-gradient(80deg, rgba(0, 10, 15, 0.27) 90%, #000a0f 100%)
      ),
      var(
        --Gradients-100,
        linear-gradient(270deg, rgba(0, 10, 15, 0.27) 90%, #000a0f 100%)
      );
  }

  .swiper-wrapper {
    justify-content: start;
    align-items: center;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev {
    justify-content: start;
    width: 10%;
    height: 100%;
    background: linear-gradient(
      98deg,
      #000a0f 0%,
      rgba(0, 10, 15, 0.272541) 100%
    );

    left: 0px;
    top: 1.375rem;
  }

  .swiper-button-next {
    width: 10%;
    height: 100%;
    background: linear-gradient(
      98deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    right: 0;
    top: 1.375rem;
    padding-right: 0.5rem;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
   
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
    
  }

`;

export const Nav = styled.div`
 
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    height: 260px;
    position: relative;

    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

    > img {
      position: relative;
      top: -60px;
      left: -52px;
      max-width: 700px;
      max-height: 376px;
      
    }

    .description {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .description h2 {
      font-size: 40px;
      font-weight: 500;
    }

    .description p {
      font-size: 16px;
      font-weight: 400;
    }

  }
`;

  
