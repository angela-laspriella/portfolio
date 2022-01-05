import React from "react";
import styled from "styled-components";

import { Container, Content, Title, BasicText } from "../../../GlobalStyled.js";

import { IntroText } from "../../../data/data.js";

const TitleWrap = styled.div`
  width: 80%;
`;

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
              <TitleWrap>
                <BasicText margin={item.margin}>{item.text}</BasicText>
              </TitleWrap>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default Intro;
