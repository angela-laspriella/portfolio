import React, { useState } from "react";

import NavSection from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { AboutMeIntro, WhyInfo, WhyMe } from "../data/data";
import Block from "../components/About/BasicBlock";
import ExtraBox from "../components/About/ExtraBox";
import CVBlock from "../components/About/CV";
import Gradient from "../components/Gradient";

import "./gradient.css";
import OtherPeopleBlock from "../components/About/OtherPeople";
import CarouselBlock from "../components/WorkCarousel";

//import Gradient from "../components/Gradient";

function About({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  const Answer = { yesHome: false, yesWork: true };

  return (
    <>
      <NavSection toggle={toggle} {...Answer} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Block {...AboutMeIntro} />
      <CVBlock />
      <ExtraBox />
      <Block {...WhyInfo} />
      <Block {...WhyMe} />
      <OtherPeopleBlock />
      <CarouselBlock data={data} />
      <Footer {...Answer} />
      {/*       <div class="gradientOne">
        <Gradient />
      </div>
 */}{" "}
    </>
  );
}

export default About;
