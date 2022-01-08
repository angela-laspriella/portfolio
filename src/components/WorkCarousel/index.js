import React from "react";
import { Carousel } from "3d-react-carousal";

import { Container, Subtitle, Content } from "../../GlobalStyled.js";
import { Line, CarouselWrap } from "./CarouselElements.js";

import "./css.css";

const CarouselBlock = ({ data }) => {
  const slides = data.map((item) => {
    return (
      <a href={`${item.id}`}>
        <img src={item.imgBanner} />
      </a>
    );
  });

  return (
    <Container>
      <Content row="false">
        <Subtitle>My Work</Subtitle>
        <Line />
        <CarouselWrap>
          <Carousel
            style="background:blue"
            slides={slides}
            autoplay={false}
            interval={5000}
          />
        </CarouselWrap>
      </Content>
    </Container>
  );
};

export default CarouselBlock;
