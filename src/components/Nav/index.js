import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

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
} from "./NavElements.js";

import { NavInfo } from "../../data/data.js";

const NavSection = ({ yesHome, yesWork }) => {
  return (
    <Container>
      <Content>
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
                <LinkA href={item.path}>{item.name}</LinkA>
              </>
            );
          })}
        </NavMenu>
      </Content>
    </Container>
  );
};

export default NavSection;
