import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/index.js";
import About from "./pages/about_me";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
