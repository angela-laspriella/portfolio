import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

import { Container, Content } from "../../GlobalStyled.js";
import {
  SocialSection,
  SocialIcon,
  NavMenu,
  LinkA,
  LinkedIn,
  Behance,
  Github,
  MobileIcon,
} from "./NavElements.js";

import { NavInfo } from "../../data/data.js";

const NavSection = ({ toggle, yesHome, yesWork }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Container scrollNav={scrollNav}>
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
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
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
