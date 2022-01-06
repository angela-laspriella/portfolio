import React from "react";

import { Container, Content } from "../../../GlobalStyled.js";
import { Grid, Card } from "./GridElements.js";

import { DataPost } from "../../../data/data.js";

const Works = () => {
  return (
    <Container id="work">
      <Content row="false">
        <Grid>
          {DataPost.map((item, index) => {
            return (
              <Card index={index} key={item.id}>
                <img src={item.img} alt="" />
              </Card>
            );
          })}
        </Grid>
      </Content>
    </Container>
  );
};

export default Works;
