import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-primary" style={{ textShadow: "2px 2px yellow" }}>
        About
      </h1>
      <p className="fs-3" style={{ textIndent: "50px" }}>
        {" "}
        Hello! I’m Abimani, a passionate <b className="text-warning" style={{ textShadow: "2px 2px red" }}>Full Stack Developer</b> with a
        solid foundation in both front-end and back-end technologies. With a
        knack for problem-solving and a love for building seamless user
        experiences, I thrive in dynamic environments where I can leverage my
        skills to create efficient and effective web applications.
      </p>
      <ul className="mt-5 fs-3">
      <li> <b>Languages:</b>  HTML, CSS, JavaScript .</li>
      <li className="mt-3"> <b>Databases:</b> MySQL, MongoDB.</li>
      <li className="mt-3"><b>Libraries:</b> React.</li>
      <li className="mt-3">
       <b> Frameworks:</b> Node.js, Bootstrap.
      </li>
      <li className="mt-3"> <b>Tools & Technologies: </b>Git.</li>
      </ul>
      <p className="mt-3 fs-4">Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
    </div>
  );
};

export default About;
