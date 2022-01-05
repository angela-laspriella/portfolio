import React from "react";
import styled from "styled-components";
import { ReactComponent as GradientSVG } from "../../images/Gradient.svg";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  overflow: hidden;

  top: 0;
  margin-top: 40%;
  z-index: -1;

  -webkit-filter: blur(25px);
  -moz-filter: blur(25px);
  -o-filter: blur(25px);
  -ms-filter: blur(25px);
  filter: blur(25px);

  svg {
    margin-left: 5%;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 90%;

    svg {
      margin-left: -40%;
    }
  }
`;

const Gradient = () => {
  return (
    <Wrapper>
      <GradientSVG />
    </Wrapper>
  );
};

export default Gradient;
