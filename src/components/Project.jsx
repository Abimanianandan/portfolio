import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-dark" style={{ textShadow: "2px 2px purple" }}>
        Project
      </h1>
      <div class="row mt-5">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytkZ0onGN7I3kFnAnVHfUBo05aRnaPztD6g&s"
              alt="HR-img"
            />
            <div class="card-body">
              <h5 class="card-title text-info">HR-Management</h5>
              <p class="card-text">
                Human Resource Management (HRM) focuses on recruiting,
                developing, and retaining employees to enhance organizational
                performance. It involves managing employee relations, benefits,
                and compliance with labor laws. HRM aims to create a motivated
                workforce aligned with the company's strategic goals.
              </p>
              <Link
                to={"https://hr-management-fe.vercel.app/"}
                class="btn btn-primary"
              >
                Go to Visit
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&s"
              alt="todo-img"
              style={{ height: "260px" }}
            />
            <div class="card-body">
              <h5 class="card-title text-info">Todo-List</h5>
              <p class="card-text">
                A lodo list is a simple, often informal list that outlines tasks
                or items to be accomplished or addressed. It serves as a helpful
                tool for organizing and prioritizing activities, making it
                easier to manage daily responsibilities. a lodo list can enhance
                productivity and ensure nothing important is overlooked.
              </p>
              <Link
                to={"https://todo-fe-one.vercel.app/"}
                class="btn btn-primary "
              >
                Go to Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
