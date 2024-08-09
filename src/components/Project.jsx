import React from "react";

const Project = () => {
  const list = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytkZ0onGN7I3kFnAnVHfUBo05aRnaPztD6g&s",
      title:"HR-Management",
      desc:`Human Resource Management (HRM) focuses on recruiting,
      developing, and retaining employees to enhance organizational
      performance. It involves managing employee relations, benefits,
      and compliance with labor laws. HRM aims to create a motivated
      workforce aligned with the company's strategic goals.`,
      link:"https://hr-management-fe.vercel.app/"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&s",
      title:"Todo-List",
      desc:`  A lodo list is a simple, often informal list that outlines tasks
      or items to be accomplished or addressed. It serves as a helpful
      tool for organizing and prioritizing activities, making it
      easier to manage daily responsibilities. a lodo list can enhance
      productivity and ensure nothing important is overlooked.`,
      link:"https://todo-fe-zeta.vercel.app/"
    }
    
  ]
  return (
    <div className="container mt-5">
      <h1 className="text-dark" style={{ textShadow: "2px 2px purple" }}>
        Project
      </h1>
      <div class="row  row-cols-1 row-cols-md-2 g-4 mt-5">
        { 
         list.map((item,index)=>{
          return(
            <div key={index}>
                 <div class="col">
          <div class="card" >
            <img
              src={item.img}
              alt="HR-img"
              style={{height:"220px"}}
            />
            <div class="card-body">
              <h5 class="card-title text-info">{item.title}</h5>
              <p class="card-text">{item.desc}</p>
              <a
                href={`${item.link}`}
                class="btn btn-primary"
                target="blank"
              >
                Go to Visit
              </a>
            </div>
          </div>
        </div>
            </div>
          )
         })      
        }
      </div>
    </div>
  );
};

export default Project;
