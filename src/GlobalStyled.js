import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;

  display: flex;
  flex-direction: ${({ row }) => (row ? "column" : "row")};
  align-items: flex-start;
  justify-content: space-between;

  padding-top: ${({ padding }) => (padding ? "0" : "40px")};
`;

export const TextWrap = styled.div`
  width: 80%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 550%;
  margin-top: 32vh;

  @media screen and (max-width: 1200px) {
    padding: 0 0;
  }

  @media screen and (max-width: 1000px) {
    font-size: 325%;
  }
`;

export const Subtitle = styled.h2`
  display: ${({ display }) => (display ? "none" : "block")};
  color: ${({ white }) => (white ? "#7C7C7C" : "white")};

  font-style: normal;
  font-weight: 600;
  font-size: 250%;
  line-height: 58px;

  @media screen and (max-width: 1200px) {
    padding: 0 0;
  }
`;

export const BasicText = styled.p`
  display: ${({ display }) => (display ? "none" : "block")};
  margin-top: ${({ margin }) => (margin ? "0" : "8")};

  font-size: 130%;
  line-height: 145%;
  font-weight: lighter;

  white-space: pre-line;

  br {
    display: block;
    content: "";
    margin-top: 16px;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 0;
  }

  @media screen and (max-width: 1000px) {
    font-size: 112%;
  }
`;
