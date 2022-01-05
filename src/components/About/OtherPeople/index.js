import React from "react";

import { OtherPeople } from "../../../data/data.js";

import { Container, Subtitle } from "../../../GlobalStyled.js";
import {
  Content,
  BoxWrap,
  FirstBlock,
  Image,
  Social,
  SocialIcon,
  LinkedIn,
  Behance,
  SecondBlock,
  Text,
  Job,
  Name,
} from "./OtherPeopleElemets.js";

const OtherPeopleBlock = ({}) => {
  return (
    <Container>
      <Content>
        <Subtitle>What other people say</Subtitle>
        {OtherPeople.map((item) => {
          return (
            <>
              <BoxWrap>
                <FirstBlock>
                  <img src={item.img} />
                  <Social>
                    <a href={item.pathOne} target={item.pathTwo}>
                      <SocialIcon>
                        <LinkedIn />
                      </SocialIcon>
                    </a>

                    <a href={item.pathOne} target={item.pathTwo}>
                      <SocialIcon>
                        <Behance />
                      </SocialIcon>
                    </a>
                  </Social>
                  <Name>{item.name}</Name>
                </FirstBlock>
                <SecondBlock>
                  <Text>{item.text}</Text>
                  <Job>{item.position}</Job>
                </SecondBlock>
              </BoxWrap>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default OtherPeopleBlock;
