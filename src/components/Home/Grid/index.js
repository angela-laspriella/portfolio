import React from "react";

import { Container, Content } from "../../../GlobalStyled.js";
import { Grid, Card } from "./GridElements.js";

const Works = ({ data }) => {
  return (
    <Container id="work">
      <Content row="false">
        <p>
          As capas ainda vao ser feitas, os projetos que funcionam sao os dois
          primeiros
        </p>
        <Grid class="grid">
          {data.map((item) => {
            return (
              <Card className="card" href={`${item.id}`}>
                <img src={item.imgBanner} alt="" />
              </Card>
            );
          })}
        </Grid>
      </Content>
    </Container>
  );
};

export default Works;
