import React, { useState } from "react";
import { Formik } from "formik";
import Validation from "./Validation";
// import { FaEye } from 'react-icons/fa';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

// import {FaEye} from 'react-icons/fa'

function LoginForm() {
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
          <form className="mt-10"
           onSubmit={handleSubmit}>
            <label htmlFor="">Email Adress</label>
            <input
              className="inputBox"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="text-brightColor"> {errors.email}</p>
            )}

            <label htmlFor="">Password</label>
            <input
              className='inputBox'
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

            {errors.password && touched.password && (
              <p className="text-brightColor"> {errors.password}</p>
            )}

            <div className="text-right">
              <a href="http://" className="text-blue">
                Forgot password
              </a>
            </div>

            <div className="text-center">
              <button
                className="button"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>

            <div className="text-center mt-5">
              <a href="/" className="text-blue">
                Register
              </a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
