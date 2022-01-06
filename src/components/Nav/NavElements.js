import styled from "styled-components";

import { ReactComponent as LinkedInIcon } from "../../images/icons-LinkedIn.svg";
import { ReactComponent as BehanceIcon } from "../../images/icons-Behance.svg";
import { ReactComponent as GithubIcon } from "../../images/icons-Github.svg";

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 24px;
  opacity: 0.6;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    padding-left: 0;
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

export const Github = styled(GithubIcon)`
  width: 100%;
  height: auto;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;

  font-weight: 300;
  font-size: 95%;

  a {
    position: relative;

    font-weight: 300;
    font-size: 95%;

    color: white;
    text-decoration: none;
  }

  a:after {
    content: "";
    position: absolute;

    width: 100%;
    transform: scaleX(0);
    height: 1.6px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  a:first-child {
    display: ${({ showWork }) => (showWork ? "none" : "block")};
  }

  a:nth-child(2) {
    display: ${({ showHome }) => (showHome ? "none" : "block")};
  }
`;

export const LinkA = styled.a`
  margin-left: 40px;
`;
