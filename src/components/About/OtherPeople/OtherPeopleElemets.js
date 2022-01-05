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
  }
`;

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 250px;

  img {
    margin-bottom: 16px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;

    img {
      width: 120px;
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
`;

export const LinkedIn = styled(LinkedInIcon)`
  width: 100%;
  height: auto;
`;

export const Behance = styled(BehanceIcon)`
  width: 100%;
  height: auto;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const SecondBlock = styled.div`
  background: rgba(237, 237, 237, 0.05);
  border-radius: 16px;
  margin-left: 24px;

  padding: 24px;
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
