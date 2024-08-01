import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div className='d-flex'>
        <div className="col-lg-3">
            <SideBar/>
        </div>
        <Outlet/>           
    </div>
  )
}

export default DashBoard