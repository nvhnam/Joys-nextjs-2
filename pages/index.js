import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button/ButtonElement";
import about1 from "../public/img/About1.jpg";
import home2 from "../public/img/Home2.jpg";
import {
  HomeContainer,
  HomeWrapper,
  HomeRow2,
  HomeCol1,
  HomeCol2,
  HomeRow21,
  HomeCol21Img,
  HomeCol1Wrapper,
  HomeCol12Wrapper,
  HomeCol12Text1,
  HomeCol12Text2,
  HomeCol12Para,
  HomeCol12Button,
  HomeCol2Wrapper,
  HomeCol2Text1,
  HomeCol2Underline,
} from "../components/Home/HomeElement";
import Home1 from "../components/Home/Home1/Home1";
import React from "react";
import Home2 from "../components/Home/Home2/Home2";
import HeroSection from "../components/HeroSection/HeroSection";
import Home3 from "../components/Home/Home3/Home3";

export default function Home() {
  return (
    <>
      <Head>
        <title>JoyS Bakery</title>
        <meta name="description" content="JoyS bakery" />
        <link rel="JoyS icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* Home Slide */}
      <HeroSection />
      {/* Home Posts */}
      <HomeContainer>
        <HomeWrapper>
          {/* Home Banner Welcome */}
          <Home1 />
          {/* Home About */}
          <HomeRow2>
            <HomeCol1>
              <HomeCol1Wrapper>
                <Image
                  className="MenuImg"
                  layout="responsive"
                  src={about1}
                  alt="Joys bakery"
                  loading="lazy"
                />
                <HomeCol12Wrapper>
                  <HomeCol12Text1>About</HomeCol12Text1>
                  <HomeCol12Text2>Coffee and Cake</HomeCol12Text2>
                  <HomeCol12Para>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum animi velit amet maiores iste numquam corporis quia
                    dolore. Minus, iusto?
                  </HomeCol12Para>
                  <HomeCol12Button>
                    <Link href="/about" passHref>
                      <Button
                        isBig={false}
                        isBlack={true}
                        isWhite={true}
                        bigFont={false}
                        withBorder={true}
                      >
                        Read more
                      </Button>
                    </Link>
                  </HomeCol12Button>
                </HomeCol12Wrapper>
              </HomeCol1Wrapper>
            </HomeCol1>
            <HomeCol2>
              <HomeCol2Wrapper>
                <HomeCol2Text1>Lastest Post</HomeCol2Text1>
                <HomeCol2Underline />
                <HomeRow21>
                  <HomeCol12Wrapper>
                    <HomeCol12Text1>Announcement</HomeCol12Text1>
                    <HomeCol12Text2>Coffee and Cake</HomeCol12Text2>
                    <HomeCol12Para>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum animi velit amet maiores iste numquam corporis quia
                      dolore. Minus, iusto?
                    </HomeCol12Para>
                    <HomeCol12Para>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum animi velit amet maiores iste numquam corporis quia
                      dolore. Minus, iusto?
                    </HomeCol12Para>
                    <HomeCol12Button>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/JoySBakery2022/posts/pfbid0Q9k2csbb2cvvDtCNZ122K31vmfmQPCtxaZrG9Vs4hWqbrb9Dwr5PMDyyPiJiBmiJl"
                        rel="noopener noreferrer"
                      >
                        <Button
                          isBig={false}
                          isBlack={true}
                          isWhite={true}
                          bigFont={false}
                          withBorder={true}
                        >
                          Read more
                        </Button>
                      </a>
                    </HomeCol12Button>
                  </HomeCol12Wrapper>
                  <HomeCol21Img>
                    <Image
                      layout="responsive"
                      src={home2}
                      alt="Joys coffee and bakery"
                      className="MenuImg"
                      loading="lazy"
                    />
                  </HomeCol21Img>
                </HomeRow21>
              </HomeCol2Wrapper>
            </HomeCol2>
          </HomeRow2>
          {/* Home Menu */}
          <Home2 />
          {/* Home Post 1 */}
          {/* <Home3 /> */}
          {/* Home Contact */}
        </HomeWrapper>
      </HomeContainer>
    </>
  );
}
