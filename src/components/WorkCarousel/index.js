import React from "react";
import Slider from "react-slick";

import { Container, Subtitle, Content } from "../../GlobalStyled.js";
import { Line, CarouselWrap, ImageWrap } from "./CarouselElements.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <br />
        <p>Aqui um carousel</p>
        {/*         <CarouselWrap>
          <Slider dots="true" slidesToShow="1">
            {data.map((item) => {
              return (
                <ImageWrap>
                  <a href={`${item.id}`}>
                    <img src={item.imgBanner} />
                  </a>
                </ImageWrap>
              );
            })}
          </Slider>
        </CarouselWrap>
 */}{" "}
      </Content>
    </Container>
  );
};

export default CarouselBlock;
