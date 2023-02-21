import React, {useState} from "react";
import { Formik } from "formik";
import Validation from "../LOGIN/Validation";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

function SignupForm() {

    const [showPassword, setShowPassword] = useState(true);

  const Password = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-left">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="mt-10"  onSubmit={handleSubmit}>
           
            <div className=" flex flex-col gap-5 md:flex-row justify-between my-5 ">
              
              <div className="w-full flex flex-col">
                <label htmlFor="">
                  First Name<span className="text-brightColor">*</span>
                </label>
                <input
                  className="inputBox"
                  type="text"
                  name="name"
                  placeholder="Enter Your First Name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="">
                  Last Name<span className="text-brightColor">*</span>
                </label>
                <input
                 className="inputBox"
                 type="text"
                  name="name"
                  placeholder="Enter Your Last Name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
            </div>

            <div className="mb-5">
            <label htmlFor="">
              Email Address<span className="text-brightColor">*</span>
            </label>
            <input
              className="inputBox"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              onChange={handleChange}
              value={values.email}
              required
            />
            </div>
          
            <div className="mb-5">
            <label htmlFor="">
              Phone Number<span className="text-brightColor">*</span>
            </label>
            <input
              className="inputBox"
              type="number"
              name="phone_number"
              placeholder="Enter Your Phone number"
              onChange={handleChange}
              required
            />
            </div>
         
            <div className="mb-5">
            <label htmlFor="">
              Password <span className="text-brightColor">*</span>
            </label>
            <input
           className="inputBox"
           type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              value={values.password}
            />
             <span
              className=" cursor-pointer, -mt-10"
              onClick={() => {
                Password();
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>
            
            {/* <FaEyeSlash/> */}

            <div className="flex gap-2">
              <input type="checkbox" name="" id=""
              className="border-solid w-5 h-5 bg-blue"/>
              <p>I have consented to KhadijatAcademy 
               <a href="http://" className="text-blue"> privacy & policy</a>   terms</p>
            </div>

            <div className="text-center ">
              <button
                className="button"
                type="submit"
                disabled={isSubmitting}
              >
                Create an Account
              </button>
            </div>

            <div className="text-center mt-5">
              <a href="/" className="text-blue">
               Already Have an Account?
              </a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
