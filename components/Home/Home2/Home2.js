import { useState } from "react";
import Image from "next/image";
import {
  Home2Container,
  Home2Wrapper,
  Home2Title,
  Home2Underline1,
  Home2ButtonWrapper,
  Home2Buttons,
  Home2Row,
  Home2MenuContainer,
  Home2MenuWrapper,
  Home2MenuImg,
  Home2MenuTitle,
  Home2MenuPrice,
  Home2MenuButton,
} from "./Home2Element";
import Categories from "./Home2Data";
import Link from "next/link";

export default function Home2() {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.kind === catItem;
    });
    setData(result);
  };

  return (
    <>
      <Home2Container>
        <Home2Wrapper>
          <Home2Title>The Best JoyS</Home2Title>
          <Home2Underline1 />
          <Home2ButtonWrapper>
            <Home2Buttons onClick={() => filterResult("special")}>
              Special
            </Home2Buttons>
            <Home2Buttons onClick={() => filterResult("drink")}>
              Drink
            </Home2Buttons>
            <Home2Buttons onClick={() => filterResult("cake")}>
              Cake
            </Home2Buttons>
          </Home2ButtonWrapper>
          <Home2Row>
            {data.map((values) => {
              const { id, image, title, price, alt } = values;
              return (
                <>
                  <Home2MenuContainer key={id}>
                    <Home2MenuWrapper>
                      <Home2MenuImg>
                        <Image
                          src={image}
                          alt={alt}
                          className="Home2Img"
                          layout="responsive"
                          loading="lazy"
                        />
                      </Home2MenuImg>
                      <Home2MenuTitle>{title}</Home2MenuTitle>
                      <Home2MenuPrice>{price}</Home2MenuPrice>
                    </Home2MenuWrapper>
                  </Home2MenuContainer>
                </>
              );
            })}
          </Home2Row>
          <Link href="/menu" passHref>
            <Home2MenuButton>View Menu</Home2MenuButton>
          </Link>
        </Home2Wrapper>
      </Home2Container>
    </>
  );
}
