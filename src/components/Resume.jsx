import React from "react";
import ResumeImage from "../assets/My image/resume.png";

const Resume = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-warning" style={{ textShadow: "2px 2px purple" }}>
        Resume
      </h1>
      <img src={ResumeImage} alt="resume img" />
    </div>
  );
};

export default Resume;
