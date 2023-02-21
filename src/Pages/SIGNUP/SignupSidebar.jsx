import React from 'react'
import logo from "../../Assets/Logo (1).png";
import Lady2 from "../../Assets/Group 122 (1).png";

function Sidebar() {
    return (
      <div className=" hidden md:block w-3/5 bg-darkblue ">
  
        <div className="py-6 ">
          <div className=" w-2/5 mx-auto pb-10">
            <img src={logo} alt="" />
          </div>
  
          <div className="mx-auto">
            <img className=" w-4/5 mx-auto object-cover" src={Lady2} alt="" />
          </div>
        </div>
  
      </div>
    );
}

export default Sidebar