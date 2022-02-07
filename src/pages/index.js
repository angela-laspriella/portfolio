import React, { useState } from "react";

import Gradient from "../components/Gradient";
import NavSection from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import Works from "../components/Home/Grid";
import Intro from "../components/Home/Intro";

function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  const Answer = { yesHome: true, yesWork: false };

  return (
    <>
      <NavSection toggle={toggle} {...Answer} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Intro />
      <Works data={data} />
      {/* <Gradient /> */}

      <Footer {...Answer} />
    </>
  );
}

export default Home;
