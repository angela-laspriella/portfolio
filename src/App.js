import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/index.js";
import About from "./pages/about_me";
import Work from "./pages/workpage.js";

import { worksInfo } from "./data/works.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home data={worksInfo} />} />
        <Route exact path="about-me" element={<About data={worksInfo} />} />
        <Route exact path=":id" element={<Work data={worksInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;
