import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import { Container, Content, Title, BasicText } from "../../../GlobalStyled";

import { WorkWrap, YoutubeBlock } from "./IntroElements";

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
                  <img display={item.displayImg2} src={item.img2} />
                  <YoutubeBlock displayPlease={item.displayYoutube}>
                    <ReactPlayer url={item.displayVideo} controls={true} />
                  </YoutubeBlock>
                </WorkWrap>
              </>
            );
          })}
      </Content>
    </Container>
  );
};

export default IntroBlock;
