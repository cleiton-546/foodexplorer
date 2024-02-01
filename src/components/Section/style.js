import styled from "styled-components";

export const Container = styled.section`
  margin-top: 40px;

  > h2 {

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
`;