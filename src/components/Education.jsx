import React from "react";

const Education = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-success" style={{ textShadow: "2px 2px yellow" }}>
        Education
      </h1>
      <div class="row mt-5">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card p-3 " style={{ boxShadow: "2px 2px 3px 3px gray" }}>
            <div class="card-body">
              <h3 class="card-title text-success">
                Annai Vailankanni Arts And Science{" "}
              </h3>
              <p class="card-text" style={{ color: "purple" }}>
                College in Thanjavur, Tamil Nadu
              </p>
              <p className="mt-3 fs-5">
                <b>Degree:</b>Bachelor of Computer Application
              </p>
              <p className="fs-5">
                <b>Percentage:</b> 71.09%
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3">
          <div class="card p-3" style={{ boxShadow: "2px 2px 3px 3px gray" }}>
            <div class="card-body">
              <h3 class="card-title text-success">
                Government Higher Secondary School
              </h3>
              <p class="card-text" style={{ color: "purple" }}>
                School in Thanjavur, Tamil Nadu
              </p>
              <p className="mt-3 fs-5">
                <b>Degree:</b> SSLC
              </p>
              <p className="fs-5">
                <b>Percentage:</b> 78.04%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
