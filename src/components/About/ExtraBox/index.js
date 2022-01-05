import React from "react";

import { Extras } from "../../../data/data.js";

import { Container, BasicText } from "../../../GlobalStyled.js";
import { Content, BoxWrap } from "./ExtraBoxElements.js";

const ExtraBox = ({}) => {
  return (
    <Container>
      <Content>
        {Extras.map((item) => {
          return (
            <>
              <BoxWrap>
                <BasicText>{item.emoji}</BasicText>
                <BasicText>{item.text}</BasicText>
              </BoxWrap>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default ExtraBox;
