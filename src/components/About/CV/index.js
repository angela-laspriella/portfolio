import React from "react";
import { ExperienceCV, ExtrasCV } from "../../../data/data.js";

import { Container, BasicText, Subtitle } from "../../../GlobalStyled.js";

import {
  Content,
  FirstBlock,
  SecondBlock,
  SimpleBlock,
  ComplexBlock,
  Title,
  SmallTitle,
  JobPosition,
  Extras,
  JobLink,
} from "./CVElements.js";

const CVBlock = () => {
  return (
    <Container>
      <Content>
        <FirstBlock>
          {ExperienceCV.map((item) => {
            return (
              <>
                <Subtitle white="false">{item.maintitle}</Subtitle>
                <ComplexBlock>
                  <Title>{item.title}</Title>
                  <JobPosition>{item.subtitle}</JobPosition>
                  <BasicText>{item.text}</BasicText>
                  <Extras>{item.extras}</Extras>
                  <JobLink href={item.path} target="_blank">
                    {item.linkName}
                  </JobLink>
                </ComplexBlock>
              </>
            );
          })}
        </FirstBlock>
        <SecondBlock>
          {ExtrasCV.map((item) => {
            return (
              <>
                <Subtitle white="false">{item.maintitle}</Subtitle>
                <SimpleBlock>
                  <SmallTitle>{item.title}</SmallTitle>
                  <JobPosition>{item.subtitle}</JobPosition>
                  <Extras>{item.extras}</Extras>
                </SimpleBlock>
              </>
            );
          })}
        </SecondBlock>
      </Content>
    </Container>
  );
};

export default CVBlock;
