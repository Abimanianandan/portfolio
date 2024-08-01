import React from "react";
import CertificateImage from "../assets/My image/certificate.jpeg";

const Certificate = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-warning" style={{ textShadow: "2px 2px green" }}>
        Certification
      </h1>
      <img
        src={CertificateImage}
        alt="certificate img"
        style={{ width: "80%", border: "3px solid black" }}
      />
    </div>
  );
};

export default Certificate;
