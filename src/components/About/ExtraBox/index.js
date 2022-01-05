import React from "react";

import { Extras } from "../../../data/data.js";

import { Container, BasicText } from "../../../GlobalStyled.js";
import { Content, BoxWrap, EmojiWrap } from "./ExtraBoxElements.js";

const ExtraBox = ({}) => {
  return (
    <Container>
      <Content>
        {Extras.map((item) => {
          return (
            <>
              <BoxWrap>
                <EmojiWrap>
                  <img src={item.emoji} />
                  <img src={item.emojiTwo} />
                  <img src={item.emojiThree} />
                </EmojiWrap>

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
