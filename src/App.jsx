import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Education from "./components/Education";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<DashBoard />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="certification" element={<Certificate />}></Route>
            <Route path="education" element={<Education />}></Route>
            <Route path="resume" element={<Resume />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
