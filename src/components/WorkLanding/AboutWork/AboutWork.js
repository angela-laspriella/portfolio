import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FirstBlock = styled.div`
  width: 50%;

  display: ${({ display }) => (display ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    max-width: 310px;
  }

  @media screen and (max-width: 1200px) {
    display: ${({ display }) => (display ? "none" : "block")};

    width: 100%;
    margin-top: 8%;
  }
`;

export const SecondBlock = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    margin-top: 12%;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ExamplesWrap = styled.div`
  width: 100%;
  margin: 8% 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 23%;
    max-width: 300px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media screen and (max-width: 850px) {
    display: ${({ display }) => (display ? "none" : "block")};

    justify-content: center;
    flex-wrap: wrap;

    img {
      width: 80%;
      max-width: 200px;
    }

    gap: 24px;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;

    img {
      width: 45%;
    }

    gap: 16px;
  }

  display: ${({ display }) => (display ? "none" : "block")};
`;
