import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { Container, Content } from "../../GlobalStyled.js";
import {
  SocialSection,
  SocialIcon,
  NavMenu,
  NavLinks,
  LinkA,
  LinkedIn,
  Behance,
  Github,
} from "./FooterElements.js";

import { NavInfo } from "../../data/data.js";

const Footer = ({ yesHome, yesWork }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <Content row="false">
        <SocialSection>
          <a
            href="https://www.linkedin.com/in/angela-laspriella/"
            target="_blank"
          >
            <SocialIcon>
              <LinkedIn />
            </SocialIcon>
          </a>

          <a href="https://www.behance.net/angelavlm2861e" target="_blank">
            <SocialIcon>
              <Behance />
            </SocialIcon>
          </a>

          <a href="https://github.com/angela-laspriella" target="_blank">
            <SocialIcon>
              <Github />
            </SocialIcon>
          </a>
        </SocialSection>
        <NavMenu showHome={yesHome} showWork={yesWork}>
          <Link
            to="work"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offsett={0}
          >
            Work
          </Link>
          {NavInfo.map((item) => {
            return (
              <>
                <LinkA href={item.path} margin={item.margin}>
                  {item.name}
                </LinkA>
              </>
            );
          })}
          <Link
            onClick={toggleHome}
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offsett={0}
          >
            Go to top
          </Link>
        </NavMenu>
      </Content>
    </Container>
  );
};

export default Footer;
