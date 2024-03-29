import Head from "next/head";
import { useState } from "react";
import {
  BannerContainer,
  PageBannerTitle,
} from "../components/About/AboutElement";
import PageBanner from "../components/PageBanner/PageBanner";
import PageLayout from "../components/PageBanner/PageLayout";
import { BsChevronDown } from "react-icons/bs";
import {
  MenuContainer,
  MenuWrapper,
  MenuRow,
  MenuCol1,
  MenuCol1Wrapper,
  MenuColTitle,
  MenuDropWrapper,
  MenuCol1Title,
  MenuCol2Row,
  MenuCol2,
  MenuCol2Wrapper,
  MenuCol2Title,
  MenuCol2Underline,
  MenuCol2ListContainer,
  MenuCol2ListWrapper,
  MenuCol2ListImg,
  MenuCol2ListTitle,
  MenuCol2ListDescr,
  MenuCol2ListPrice,
} from "../components/Menu/MenuElement";
import { HomeCol2Underline } from "../components/Home/HomeElement";
import MenuFull from "../components/Menu/MenuData";
import Image from "next/image";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const drop = () => {
    setOpen(!open);
  };

  const [selected, setSelected] = useState("Pick your menu");

  const [item, setItem] = useState(MenuFull);
  const filterMenu = (menuItem) => {
    const menuResult = MenuFull.filter((curItem) => {
      return curItem.kind === menuItem;
    });
    setItem(menuResult);
  };

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
      <BannerContainer>
        <PageBanner />
        <PageBannerTitle>MENU</PageBannerTitle>
        <PageLayout />
      </BannerContainer>
      <MenuContainer>
        <MenuWrapper>
          <MenuRow>
            <MenuCol1>
              <MenuCol1Wrapper>
                <MenuColTitle
                  onClick={() => {
                    drop();
                  }}
                >
                  {selected}
                  <BsChevronDown />
                </MenuColTitle>
                <MenuDropWrapper open={open}>
                  <MenuCol1Title
                    onClick={() => {
                      setItem(MenuFull);
                      setSelected("All");
                      drop();
                    }}
                  >
                    All
                  </MenuCol1Title>
                  <MenuCol1Title
                    onClick={() => {
                      filterMenu("Special JoyS");
                      setSelected("Special JoyS");
                      drop();
                    }}
                  >
                    Special JoyS
                  </MenuCol1Title>
                  <MenuCol1Title
                    onClick={() => {
                      filterMenu("JoyS Combo");
                      setSelected("JoyS Combo");
                      drop();
                    }}
                  >
                    JoyS Combo
                  </MenuCol1Title>
                  <MenuCol1Title
                    onClick={() => {
                      filterMenu("Cakes");
                      setSelected("Cakes");
                      drop();
                    }}
                  >
                    Cakes
                  </MenuCol1Title>
                  <MenuCol1Title
                    onClick={() => {
                      filterMenu("Coffee");
                      setSelected("Coffee");
                      drop();
                    }}
                  >
                    Coffee
                  </MenuCol1Title>
                  <MenuCol1Title
                    onClick={() => {
                      filterMenu("Tea");
                      setSelected("Tea");
                      drop();
                    }}
                  >
                    Tea
                  </MenuCol1Title>
                </MenuDropWrapper>
              </MenuCol1Wrapper>
            </MenuCol1>
            <MenuCol2Row>
              <MenuCol2Title>{selected}</MenuCol2Title>
              <MenuCol2Underline>
                <HomeCol2Underline />
              </MenuCol2Underline>
              <MenuCol2>
                {item.map((values) => {
                  const { id, image, alt, title, price, descr } = values;
                  return (
                    <MenuCol2Wrapper key={id}>
                      <MenuCol2ListContainer>
                        <MenuCol2ListWrapper>
                          <MenuCol2ListImg>
                            <Image
                              src={image}
                              alt={alt}
                              className="Home4Img"
                              layout="responsive"
                              loading="lazy"
                            />
                          </MenuCol2ListImg>
                          <MenuCol2ListTitle>{title}</MenuCol2ListTitle>
                          <MenuCol2ListDescr>{descr}</MenuCol2ListDescr>
                          <MenuCol2ListPrice>{price}</MenuCol2ListPrice>
                        </MenuCol2ListWrapper>
                      </MenuCol2ListContainer>
                    </MenuCol2Wrapper>
                  );
                })}
              </MenuCol2>
            </MenuCol2Row>
          </MenuRow>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
}
