import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
         <div
    className="d-flex flex-column  flex-shrink-0 p-3 text-bg-success vh-100 position-fixed"
    style={{ width: "280px" }}
  >
    <img src="../src\assets\My image\my photo.jpeg" alt="my image" style={{borderRadius:'50%',height:"220px"}} />
       <b className='d-flex justify-content-center'>abikbm06@gmail.com</b>
    <hr />
    <ul className="nav  nav-pills flex-column mb-auto">
      <li >
        <Link to={"/"} className="nav-link text-white ">
          <h4>Home 🏠</h4>
        </Link>
      </li>
      <li>
        <Link to={"about"} className="nav-link text-white">
         <h4>About 🙍‍♂️</h4>
        </Link>
      </li>
      <li>
        <Link to={"project"} className="nav-link text-white">
          <h4>Project 📚</h4>
        </Link>
      </li>
      <li>
        <Link to={"skills"} className="nav-link text-white">
         <h4>Skills 📶 </h4>
        </Link>
      </li>
      <li>
        <Link to={"certification"} className="nav-link text-white">
         <h4>Certification 📑</h4> 
        </Link>
      </li>
      <li>
        <Link to={"education"} className="nav-link text-white">
         <h4>Education 📔</h4> 
        </Link>
      </li>
     
      <li>
        <Link to={"resume"} className="nav-link text-white">
         <h4>Resume 📝</h4> 
        </Link>
      </li>
    </ul>
  </div>
   
  )
}

export default SideBar