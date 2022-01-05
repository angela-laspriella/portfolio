import React from "react";

import { Container, BasicText, Subtitle } from "../../../GlobalStyled.js";
import { Content, TextWrap, ImageWrap } from "./BlockElements.js";

const Block = ({ first, title, text, img }) => {
  return (
    <Container>
      <Content first={first}>
        <TextWrap>
          <Subtitle>{title}</Subtitle>
          <BasicText>{text}</BasicText>
        </TextWrap>
        <ImageWrap>
          <img src={img} />
        </ImageWrap>
      </Content>
    </Container>
  );
};

export default Block;
