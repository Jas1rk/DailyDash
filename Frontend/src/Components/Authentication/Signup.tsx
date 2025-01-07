import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import signup from "../../assets/signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data: ", values);
    },
  });

  return (
    <div className="w-[90%] md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5 dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl overflow-hidden">
      <h1 className="dark:text-white text-2xl font-bold text-center">
        Register
      </h1>
      <div className="flex w-full items-center flex-col md:flex-row md:gap-10">
        <img src={signup} className="w-[270px] md:w-[400px]" alt="Signup" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
          <div className="mt-5">
            <label htmlFor="name" className="text-colors-primaryYellow">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full placeholder:text-gray-600 bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow
              "
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1 absolute">
                {formik.errors.name}
              </p>
            )}
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="text-colors-primaryYellow">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full placeholder:text-gray-600 bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1 absolute">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="mt-5">
            <label htmlFor="password" className="text-colors-primaryYellow">
              Password
            </label>
            <div className="w-full flex items-center placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
              <input
                id="password"
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-transparent outline-none"
              />
              {!isVisible ? (
                <FaEye
                  className="cursor-pointer"
                  onClick={() => setIsVisible(true)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={() => setIsVisible(false)}
                />
              )}
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1 absolute">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="text-colors-primaryYellow"
            >
              Confirm Password
            </label>
            <div className="w-full flex items-center placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••••"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-transparent outline-none"
              />
            </div>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 absolute">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>
          <button
            type="submit"
            className="bg-colors-primaryYellow w-full text-white mt-8 py-2 px-10 rounded-3xl font-bold"
          >
            Register
          </button>
        </form>
      </div>
      <p className="dark:text-white text-center mt-5">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-colors-primaryYellow font-bold md:font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
