import styled from "styled-components";

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;

  display: flex;
  flex-direction: ${({ first }) => (first ? "row" : " row-reverse")};
  align-items: center;
  justify-content: space-between;

  margin-top: 6%;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 16%;
  }

  h2 {
    margin: 0;
  }

  p:first-child {
    margin: 0;
  }
`;

export const TextWrap = styled.div`
  width: 50%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ImageWrap = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  img {
    width: 90%;
    max-width: 450px;
    height: auto;

    mix-blend-mode: lighten;
  }
`;
