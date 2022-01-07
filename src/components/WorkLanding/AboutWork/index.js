import React from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Content,
  BasicText,
  Subtitle,
  TextWrap,
} from "../../../GlobalStyled";
import { Wrap, FirstBlock, SecondBlock, ExamplesWrap } from "./AboutWork";

const AboutBlock = ({ data }) => {
  const { id } = useParams();

  return (
    <Container>
      <Content row="false">
        {data
          .filter((worksInfo) => worksInfo.id === id)
          .map((item) => {
            return (
              <>
                <Subtitle>{item.roleTitle}</Subtitle>
                <BasicText margin="false">{item.roleText}</BasicText>

                <Wrap>
                  <SecondBlock>
                    <Subtitle>{item.challengesTitle}</Subtitle>
                    <BasicText>{item.challengesText}</BasicText>

                    <Subtitle>{item.resultsTitle}</Subtitle>
                    <BasicText>{item.resultsText}</BasicText>
                  </SecondBlock>
                  <FirstBlock>
                    <img src={item.imgSecondSection} />
                  </FirstBlock>
                </Wrap>

                <ExamplesWrap>
                  <img src={item.imgEx1} />
                  <img src={item.imgEx2} />
                  <img src={item.imgEx3} />
                  <img src={item.imgEx4} />
                </ExamplesWrap>
              </>
            );
          })}
      </Content>
    </Container>
  );
};

export default AboutBlock;
