import React from "react";
// import ResumeImage from "../assets/My image/Abi new resume.pdf";
import MyImage from "../assets/My image/my photo.jpeg";


const Resume = () => {
  return (
    <div className="container mt-5"> 
      <h1 className="text-warning " style={{ textShadow: "2px 2px purple" }}>Resume</h1>
      <div className="card mb-3 mt-5 p-3" style={{maxWidth: "540px",boxShadow: "2px 2px 3px 3px gray" }} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={MyImage} className="img-fluid rounded-start" alt="my image" style={{width:"220px", height:"220px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hi 👋 I am <b className="text-warning fs-4" style={{ textShadow: "2px 2px black" }}>Abimani.</b></h5>
        <p className="card-text fs-5">A passionate Full Stack Developer with a solid foundation in both front-end and back-end technologies.</p>
        <a href="https://drive.google.com/file/d/1d_7OzxirgE6bDUXdVd4lVNiV0TFwFHF7/view?pli=1" target="blank" className="btn btn-primary">View Resume</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Resume;
