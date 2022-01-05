import styled from "styled-components";

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 6%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 16%;
  }

  p {
    padding: 0;
    font-size: 120%;
    line-height: 135%;
  }
`;

export const FirstBlock = styled.div`
  width: 60%;

  @media screen and (max-width: 1200px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
`;

export const SecondBlock = styled.div`
  width: 30%;

  h2 {
    margin: 0;
    padding: 0;

    margin-top: 62px;
  }

  h2:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 24px;

    h2:first-child {
      margin-top: 62px;
    }
  }
`;

export const SimpleBlock = styled.div``;

export const ComplexBlock = styled.div`
  margin-top: 62px;
`;

export const Title = styled.h3`
  font-size: 150%;
  font-weight: 600;
  margin: 0;
`;

export const JobPosition = styled.h4`
  font-size: 125%;
  font-weight: 400;

  margin-top: 8px;
  margin-bottom: 0;
`;

export const Extras = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 120%;
  line-height: 27px;

  color: #9a9a9a;

  margin-bottom: 16px;
`;

export const JobLink = styled.a`
  font-size: 120%;
  font-weight: 200;
  color: #9a9a9a;

  margin: 0;

  &:hover {
    transition: 0.4s ease-out;
    color: #fff;
  }
`;

export const SmallTitle = styled.p`
  font-style: normal;
  font-weight: 600;

  font-size: 130%;
  line-height: 31px;
  text-transform: capitalize;

  color: #ffffff;

  margin: 0;
`;
