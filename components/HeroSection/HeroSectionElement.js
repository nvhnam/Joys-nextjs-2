import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2a65a;
  z-index: 1;

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const HeroWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* max-width: 1900px; */
  height: 100%;
  position: relative;
`;

export const HeroImg = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;

  @media screen and (height: 1180px) {
    height: 32vh;
  }

  @media screen and (height: 1024px) {
    height: 34vh;
  }

  @media screen and (max-width: 767px) {
    height: 43vmin;
  }
`;
