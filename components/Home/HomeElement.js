import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  /* background: #f4a75d; */
  background: #f8fffc;
  z-index: 2;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  z-index: 2;
`;

export const HomeRow2 = styled.div`
  height: 100%;
  width: 100%;
  /* max-width: 2500px; */
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 1.8rem;
  margin: 5rem 0;
  z-index: 2;

  @media screen and (min-width: 1025px) {
    padding: 5vmin 5vmin;
    margin: 12vmin 0;
  }

  @media screen and (max-width: 940px) {
    margin: 3rem 0;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 2rem 1.5rem;
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const HomeCol1 = styled.div`
  display: flex;
  align-content: center;
  width: 45%;
  margin-left: 4rem;
  margin-right: auto;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    margin-left: 4.5vmin;
    padding: 0 2vmax;
  }

  @media screen and (max-width: 1024px) {
    width: 41%;
    margin-left: 2rem;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    justify-self: center;
    margin-bottom: 1rem;
    margin-top: 6rem;
    margin-left: auto;
  }
`;

export const HomeCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HomeCol12Wrapper = styled.div`
  width: 100%;
  height: auto;
  /* padding: 2rem; */
  /* background-color: rgba(0, 0, 0, 0.33); */
  border-radius: 15px;
  margin-top: 1.7rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 1025px) {
    margin-bottom: 14vmin;
    padding: 1vmin;
    margin-top: 6vmin;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
    margin-bottom: 2.5rem;
    margin-top: -1vmax;
  }
`;

export const HomeCol12Text1 = styled.h1`
  font-size: 1rem;
  /* color: #f8fffc; */
  color: #f58549;
  /* color: #772f1a; */
  font-style: italic;

  @media screen and (min-width: 1025px) {
    font-size: 4.2vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2vmax;
  }

  @media screen and (max-width: 830px) {
    margin-top: 4vmax;
  }

  @media screen and (max-width: 767x) {
    margin-top: 0vmax;
  }
`;

export const HomeCol12Text2 = styled.h1`
  font-size: 1.1rem;
  /* color: #f8fffc; */
  color: black;

  @media screen and (min-width: 1025px) {
    font-size: 5.1vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2.2vmax;
  }
`;

export const HomeCol12Para = styled.p`
  font-size: 0.8rem;
  /* color: #f8fffc; */
  color: black;
  margin-bottom: 2rem;

  @media screen and (min-width: 1025px) {
    font-size: 2.9vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.6vmax;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const HomeCol12Button = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 1025px) {
    margin-top: 5vmin;
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1vmax;
  }
`;

export const HomeCol2 = styled.div`
  display: flex;
  align-content: center;
  width: 70%;
  height: 100%;
  margin-right: -3rem;
  margin-left: auto;
  padding-left: 6rem;
  /* flex-direction: column; */

  @media screen and (min-width: 1025px) {
    /* padding-left: 15vmin; */
    margin-right: 0;
    padding: 0 5vmax;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    padding-left: 0;
    margin-right: -0.7rem;
  }

  @media screen and (max-width: 767px) {
    margin-right: auto;
    width: 100%;
    justify-self: center;
    margin-top: -5rem;
    margin-bottom: 10rem;
    /* flex-direction: column-reverse; */
  }
`;

export const HomeRow21 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const HomeCol21Img = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-top: -1.3rem;

  @media screen and (min-width: 1025px) {
    /* margin-top: -2vmin; */
  }

  @media screen and (max-width: 767px) {
    margin-top: 1.3rem;
    margin-bottom: -12rem;
  }
`;

export const HomeCol2Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  margin-top: -3.5rem;

  @media screen and (min-width: 1025px) {
    padding: 5.7vmin;
    margin-top: -9vmin;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
    width: auto;
  }
`;

export const HomeCol2Text1 = styled.h1`
  font-size: 2.5rem;
  /* color: #f8fffc; */
  color: #f58549;
  margin-top: 0.5rem;

  @media screen and (min-width: 1025px) {
    font-size: 8vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 4.1vmax;
    margin-top: 2.8vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 8rem;
    margin-bottom: 1.9rem;
  }
`;

export const HomeCol2Underline = styled.div`
  display: block;
  width: 70%;
  margin-top: -1.5rem;
  border-bottom: 4px solid #f58549;
  margin-bottom: 0.7rem;

  @media screen and (min-width: 1025px) {
    border-bottom: 1vmin solid #f58549;
    margin-top: -5.4vmin;
    margin-bottom: -3vmin;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: -2vmax;
  }

  @media screen and (max-width: 830px) {
    margin-bottom: -4.6vmax;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;
