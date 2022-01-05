import React from "react";

import Gradient from "../components/Gradient";
import NavSection from "../components/Nav";
import Footer from "../components/Footer";

import Works from "../components/Home/Grid";
import Intro from "../components/Home/Intro";

function Home() {
  const Answer = { yesHome: true, yesWork: false };

  return (
    <>
      <NavSection {...Answer} />

      <Intro />
      <Works />
      <Gradient />

      <Footer {...Answer} />
    </>
  );
}

export default Home;
