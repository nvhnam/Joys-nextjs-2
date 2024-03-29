import styled from "styled-components";

export const Home1Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const HomeImg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HomeRow1 = styled.div`
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.68);
  text-align: center;
  z-index: 3;

  @media screen and (max-width: 767px) {
    padding: 0.7rem;
  }
`;

export const HomeRow1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1440px; */
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1025px) {
    /* padding: 15vmin; */
    padding: 11vmax;
  }

  @media screen and (max-width: 767px) {
    padding: 0.5rem;
  }
`;

export const HomeText1 = styled.h1`
  font-size: 8rem;
  margin: -1rem;
  color: #f8fffc;
  font-family: uvfHappyCloud;
  letter-spacing: 10px;

  @media screen and (min-width: 1025px) {
    /* font-size: 31vmin; */
    margin: -3vmin;
    letter-spacing: 2vmin;
    font-size: 10vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 9.8vmax;
    margin: -1.5rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 8vmax;
    margin: -1vmin;
  }

  @media screen and (max-width: 830px) {
    font-size: 6.5vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin: -0.5rem;
    margin-top: -0.05rem;
    letter-spacing: 5px;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
    margin-top: -0.5rem;
    margin-bottom: 0.05rem;
  }
`;

export const HomeText2 = styled.h1`
  font-size: 2rem;
  color: #f8fffc;

  @media screen and (min-width: 1025px) {
    /* font-size: 6.3vmin; */
    font-size: 2.2vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2.3vmax;
    /* font-size: 1.8rem; */
  }

  @media screen and (max-width: 940px) {
    font-size: 2.3vmax;
  }

  @media screen and (max-width: 830px) {
    font-size: 1.9vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0.4rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
    margin: 0.2rem;
  }
`;

export const HomePara = styled.p`
  font-size: 1.7rem;
  color: #f8fffc;
  margin: 1rem 0;
  margin-bottom: 2rem;

  @media screen and (min-width: 1025px) {
    /* font-size: 4.7vmin; */
    font-size: 1.7vmax;
  }

  @media screen and (max-width: 1024px) {
    /* font-size: 1.5rem; */
    margin-bottom: 1.6rem;
    font-size: 1.9vmax;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    font-size: 2vmax;
    margin: 1.2vmax 0;
  }

  @media screen and (max-width: 830px) {
    font-size: 1.6vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.66rem;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.58rem;
    margin-top: 0.4rem;
  }
`;

// export const HomeLink = styled.a`
//   font-size: 1.7rem;
//   color: gold;
//   margin-left: 0.5rem;
//   font-style: italic;
//   text-decoration: underline;

//   @media screen and (max-width: 1024px) {
//     font-size: 1.5rem;
//   }

//   @media screen and (max-width: 940px) {
//     font-size: 1.2rem;
//   }

//   @media screen and (max-width: 767px) {
//     font-size: 0.8rem;
//     margin-left: 0.2rem;
//   }
//   @media screen and (max-width: 320px) {
//     font-size: 0.7rem;
//   }
// `;
