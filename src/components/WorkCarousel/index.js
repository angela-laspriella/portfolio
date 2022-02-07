import React from "react";
import Carousel from "nuka-carousel";

import { Container, Subtitle, Content } from "../../GlobalStyled.js";
import { Line, CarouselWrap, ImageWrap } from "./CarouselElements.js";

const CarouselBlock = ({ data }) => {
  return (
    <Container>
      <Content row="false">
        <Subtitle>My Work</Subtitle>
        <Line />
        <CarouselWrap>
          <Carousel slidesToShow="2" wrapAround="true" cellAlign="center">
            {data.map((item) => {
              return (
                <ImageWrap>
                  <a href={`${item.id}`}>
                    <img src={item.imgBanner} />
                  </a>
                </ImageWrap>
              );
            })}
          </Carousel>
        </CarouselWrap>
      </Content>
    </Container>
  );
};

export default CarouselBlock;
