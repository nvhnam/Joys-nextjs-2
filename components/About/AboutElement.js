import styled from "styled-components";

export const BannerContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PageBannerTitle = styled.h1`
  display: block;
  top: 0;
  left: 0;
  position: absolute;
  font-size: 4rem;
  color: #f8fffc;
  padding-left: 10rem;
  padding-top: 5rem;
  width: 100%;
  height: 100%;
  z-index: 4;

  @media screen and (max-width: 1024px) {
    font-size: 3.5rem;
    padding-top: 4rem;
    padding-left: 8rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 3rem;
    padding-top: 2.3rem;
    padding-left: 5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    padding-top: 0.7rem;
    padding-left: 2.3rem;
  }

  @media screen and (width: 320px) {
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-top: 0.4rem;
  }
`;

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a75d;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 10rem 0;

  @media screen and (max-width: 767px) {
    margin: 5rem 0;
  }

  @media screen and (width: 320px) {
    margin: 4rem 0;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-items: space-between;
  flex-direction: row;
  padding: 1rem 2rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const AboutCol1 = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (width: 320px) {
    margin-bottom: 1rem;
  }
`;

export const AboutCol1Pic = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const AboutCol2 = styled.div`
  width: 45%;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
    margin-left: 0;
  }
`;

export const AboutCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.7rem;
  background: rgba(0, 0, 0, 0.63);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    padding: 2.4rem;
  }

  @media screen and (max-width: 940px) {
    padding: 2rem;
  }

  @media screen and (width: 320px) {
    padding: 1.5rem;
  }
`;

export const AboutCol2Title = styled.h1`
  font-size: 3.5rem;
  color: #f8fffc;
  font-family: "Short Stack", cursive;
  margin-bottom: 6rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (width: 320px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`;

export const AboutCol2Para = styled.p`
  font-size: 1.3rem;
  color: #f8fffc;

  @media screen and (max-width: 940px) {
    font-size: 1rem;
  }

  @media screen and (width: 320px) {
    font-size: 0.8rem;
  }
`;