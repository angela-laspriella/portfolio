import React from "react";
import { useParams } from "react-router-dom";

import { Container, Content, BasicText, Subtitle } from "../../../GlobalStyled";

import { ApproachH, ApproachV } from "./ApproachElements";

const ApproachBlock = ({ data }) => {
  const { id } = useParams();

  return (
    <Container>
      <Content row="false">
        {data
          .filter((worksInfo) => worksInfo.id === id)
          .map((item) => {
            return (
              <>
                <Subtitle>{item.approachTitle}</Subtitle>
                <BasicText margin="false">{item.approachText}</BasicText>
                <ApproachH>
                  <img src={item.imgApproach} />
                </ApproachH>
                <ApproachV>
                  <img src={item.imgApproachV} />
                </ApproachV>
              </>
            );
          })}
      </Content>
    </Container>
  );
};

export default ApproachBlock;
