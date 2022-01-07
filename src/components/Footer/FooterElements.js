import styled from "styled-components";

import { ReactComponent as LinkedInIcon } from "../../images/icons-LinkedIn.svg";
import { ReactComponent as BehanceIcon } from "../../images/icons-Behance.svg";
import { ReactComponent as GithubIcon } from "../../images/icons-Github.svg";

export const SocialSection = styled.div`
  width: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const SocialIcon = styled.div`
  width: 26px;
  height: 26px;
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

export const Github = styled(GithubIcon)`
  width: 100%;
  height: auto;
`;

export const NavMenu = styled.div`
  width: 320px;
  margin-top: 24px;
  margin-bottom: 5%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;

  font-weight: 300;
  font-size: 95%;

  margin-bottom: 40px;

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

export const LinkA = styled.a``;
