import React, { useState } from "react";

import NavSection from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import IntroBlock from "../components/WorkLanding/Intro";
import AboutBlock from "../components/WorkLanding/AboutWork";
import ApproachBlock from "../components/WorkLanding/Approach";
import CarouselBlock from "../components/WorkCarousel";

//import Gradient from "../components/Gradient";

function Work({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  const Answer = { yesHome: false, yesWork: true };

  return (
    <>
      <NavSection toggle={toggle} {...Answer} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <IntroBlock data={data} />
      <AboutBlock data={data} />
      <ApproachBlock data={data} />
      <CarouselBlock data={data} />
      <Footer {...Answer} />
    </>
  );
}

export default Work;
