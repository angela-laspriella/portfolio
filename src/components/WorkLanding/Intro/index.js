import React from "react";
import { useParams } from "react-router-dom";

import { Container, Content, Title, BasicText } from "../../../GlobalStyled";

import { WorkWrap } from "./IntroElements";

const IntroBlock = ({ data }) => {
  const { id } = useParams();

  return (
    <Container>
      <Content row="false">
        {data
          .filter((worksInfo) => worksInfo.id === id)
          .map((item) => {
            return (
              <>
                <Title>{item.title}</Title>

                <BasicText margin="false">{item.text}</BasicText>

                <WorkWrap>
                  <img src={item.img} />
                  <img src={item.img2} />
                </WorkWrap>
              </>
            );
          })}
      </Content>
    </Container>
  );
};

export default IntroBlock;
