import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="w-3/4 mx-auto text-center mt-10 ">

     <div className="w-2/4 mx-auto">
     <div className="w-3/4 mx-auto text-center leading-6">
        <h3 className=" text-2xl pb-5  mx-auto mt-5">
            Sign into <br />
          <span className="text-blue"> Khadijat </span>
          Academy
        </h3>
        <p>Lets Sign into your Account</p>
      </div>

      <LoginForm/>
     </div>


   
    </div>
  );
}

export default Login;
