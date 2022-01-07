import React from "react";

import NavSection from "../components/Nav";
import Footer from "../components/Footer";

import { AboutMeIntro, WhyInfo, WhyMe } from "../data/data";
import Block from "../components/About/BasicBlock";
import ExtraBox from "../components/About/ExtraBox";
import CVBlock from "../components/About/CV";
import Gradient from "../components/Gradient";

import "./gradient.css";
import OtherPeopleBlock from "../components/About/OtherPeople";

//import Gradient from "../components/Gradient";

function About() {
  const Answer = { yesHome: false, yesWork: true };
  const Top1 = "50%";

  return (
    <>
      <NavSection {...Answer} />
      <Block {...AboutMeIntro} />
      <CVBlock />
      <ExtraBox />
      <Block {...WhyInfo} />
      <Block {...WhyMe} />
      <OtherPeopleBlock />
      <Footer {...Answer} />
      {/*       <div class="gradientOne">
        <Gradient />
      </div>
 */}{" "}
    </>
  );
}

export default About;
