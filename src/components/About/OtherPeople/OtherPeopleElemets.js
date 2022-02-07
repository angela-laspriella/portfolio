import styled from "styled-components";

import { ReactComponent as LinkedInIcon } from "../../../images/icons-LinkedIn.svg";
import { ReactComponent as BehanceIcon } from "../../../images/icons-Behance.svg";

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 10% 0;

  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
    margin: 16% 0;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 48px;

  width: 550px;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 250px;

  img {
    width: 180px;
    margin-bottom: 16px;

    border-radius: 16px;
    background: rgba(237, 237, 237, 0.05);
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 120px;
      margin-bottom: 0;
      margin-right: 24px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const SocialIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;

  opacity: 0.6;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const LinkedIn = styled(LinkedInIcon)`
  width: 100%;
  height: auto;
`;

export const Behance = styled(BehanceIcon)`
  width: 100%;
  height: auto;
`;

export const NameBlock = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 150%;
    margin-bottom: 16px;
  }
`;

export const SecondBlock = styled.div`
  background: rgba(237, 237, 237, 0.05);
  border-radius: 16px;
  margin-left: 24px;

  padding: 24px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;

  margin: 0;
`;
export const Job = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  margin: 0;
  margin-top: 16px;
`;
