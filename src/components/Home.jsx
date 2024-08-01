import React from "react";
import LinkedImage from "../assets/My image/linkedin.png";
import EmailImage from "../assets/My image/email.png";
import GithubImage from "../assets/My image/github.png";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-info">
        Hi 👋, I am <b style={{ textShadow: "2px 2px green" }}>Abimani.</b>
      </h1>
      <div className="anime mt-5 fs-2">Full Stack Developer</div>
      <ul>
        <li className="mt-3 fs-5 fw-bolder">
          Proficient full stack developer with expertise in both front-end and
          back-end technologies.
        </li>
        <li className="mt-3 fs-5 fw-bolder">
          Skilled in developing responsive web applications and delivering
          seamless user experiences.
        </li>
        <li className="mt-3 fs-5 fw-bolder">
          Strong problem-solving abilities and a keen eye for detail in software
          development.
        </li>
      </ul>
      <div className="image-container d-flex mt-5" style={{ gap: "20px" }}>
        <a
          href="https://www.linkedin.com/in/abimani18/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedImage}
            alt="linkedin logo"
            className="border border-dark p-2 rounded-circle"
          />
        </a>
        <a
          href="mailto:info@abikbm06.com.np"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={EmailImage}
            alt="email logo"
            className="border border-dark p-2 rounded-circle"
          />
        </a>
        <a
          href="https://github.com/Abimanianandan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubImage}
            alt="github logo"
            className="border border-dark p-2 rounded-circle"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
