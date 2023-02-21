import React from 'react'
import SignupForm from './SignupForm'

function Signup() {
  return (
    <div className="w-3/4 mx-auto text-center mt-5 ">

    <div className="w-2/3 mx-auto">
    <div className="w-3/4 mx-auto text-center leading-6">
       <h3 className=" text-2xl pb-5  mx-auto mt-5">
           Register With<br />
         <span className="text-blue"> Khadijat </span>
         Academy
       </h3>
       <p>Lets get you an Account</p>
     </div>

     <SignupForm/>
    </div>


  
   </div>
  )
}

export default Signup