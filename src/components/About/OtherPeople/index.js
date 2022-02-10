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
  NameBlock,
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
                  <NameBlock>
                    {" "}
                    <Social>
                      <a href={item.pathOne} target="_blank">
                        <SocialIcon>
                          <LinkedIn />
                        </SocialIcon>
                      </a>

                      <a href={item.pathTwo} target="_blank">
                        <SocialIcon>
                          <Behance />
                        </SocialIcon>
                      </a>
                    </Social>
                    <Name>{item.name}</Name>
                  </NameBlock>
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
