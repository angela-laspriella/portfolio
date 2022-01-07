import React from "react";

import {
  Container,
  Content,
  TextWrap,
  Title,
  BasicText,
} from "../../../GlobalStyled.js";

import { IntroText } from "../../../data/data.js";

const Intro = () => {
  return (
    <Container>
      <Content row="false">
        <Title>
          I’m Angela, <br /> product designer
        </Title>

        {IntroText.map((item) => {
          return (
            <>
              <TextWrap>
                <BasicText margin={item.margin}>{item.text}</BasicText>
              </TextWrap>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default Intro;
