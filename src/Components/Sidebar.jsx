import React from "react";
import logo from "../Assets/Logo (1).png";
import Lady from "../Assets/Group 122.png";

function Sidebar() {
  return (
    <div className=" hidden md:block w-3/5 bg-darkblue h-screen  ">

      <div className="py-6 h-screen ">
        <div className=" w-2/5 mx-auto pb-10">
          <img src={logo} alt="" />
        </div>

        <div className="w-3/5 mx-auto">
          <img className="object-cover" src={Lady} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
