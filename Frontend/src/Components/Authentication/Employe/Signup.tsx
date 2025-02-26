import { HTMLInputTypeAttribute, useState } from "react";
import { useFormik } from "formik";
import signup from "../../../assets/signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "./validations";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

type FormValues = {
  name: string;
  email: string;
  mobile: string | number;
  password: string;
  confirmPassword: string;
};

const inputFields: {
  label: string;
  type: HTMLInputTypeAttribute;
  placeHolder: string;
  name: keyof FormValues;
}[] = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter your full name",
    name: "name",
  },
  {
    label: "Email",
    type: "email",
    placeHolder: "Enter your email",
    name: "email",
  },
  {
    label: "Mobile",
    type: "number",
    placeHolder: "Enter your number",
    name: "mobile",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "••••••••••",
    name: "password",
  },
  {
    label: " Confirm Password",
    type: "password",
    placeHolder: "••••••••••",
    name: "confirmPassword",
  },
];

const Signup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log("Form Data: ", values);
    },
  });

  return (
    <div className="w-[90%] md:w-auto  flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5  dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl ">
        <h1 className="dark:text-white text-2xl font-bold text-center">
          Login
        </h1>
        <div className="flex w-full items-center flex-col md:flex-row md:gap-10">
          <img src={signup} className="hidden md:block w-[270px]" />
          <div className="flex flex-col">
            <form onSubmit={formik.handleSubmit}>
              {inputFields.map((input, index) => (
                <div className="mt-5 w-full" key={index}>
                  <label htmlFor="name" className="text-colors-primaryYellow">
                    {input.label}
                  </label>
                  <div className="w-full flex items-center bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
                    <input
                      id={input.name}
                      placeholder={input.placeHolder}
                      type={
                        input.type === "password"
                          ? isVisible
                            ? "text"
                            : "password"
                          : input.type
                      }
                      className="w-full bg-transparent outline-none placeholder:text-gray-600"
                      {...formik.getFieldProps(input.name)}
                    />
                    {input.type === "password" && (
                      <>
                        {isVisible ? (
                          <FaEyeSlash
                            className="cursor-pointer"
                            onClick={() => setIsVisible(false)}
                          />
                        ) : (
                          <FaEye
                            className="cursor-pointer"
                            onClick={() => setIsVisible(true)}
                          />
                        )}
                      </>
                    )}
                  </div>
                  {formik.touched[input.name] && formik.errors[input.name] && (
                    <p className="text-red-500 text-[12px] absolute mt-1">
                      {formik.errors[input.name]}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-colors-primaryYellow  w-full text-white mt-8 py-2 px-10 rounded-3xl font-bold"
              >
                Login
              </button>
            </form>
            <div className="flex items-center justify-center gap-1  ">
              <div className="flex-grow h-[1px] bg-gray-400"></div>
              <p className="text-colors-primaryYellow px-2">or</p>
              <div className="flex-grow h-[1px] bg-gray-400"></div>
            </div>
            <div className="mt-3 flex flex-col gap-4 overflow-hidden">
              <div
                className="flex items-center justify-around bg-white p-2 border-2 cursor-pointer  rounded-md"
                
              >
                <FcGoogle className="hover:text-colors-primaryYellow text-2xl cursor-pointer dark:text-gray-400 dark:hover:text-colors-primaryYellow"  />
                <p className="font-bold md:font-semibold">
                  Sign in with Google
                </p>
              </div>
              <div className="w-full flex items-center justify-around shadow-md bg-black p-2 py-3 rounded-md ">
                <FaGithub className="hover:text-colors-primaryYellow text-2xl cursor-pointer text-white dark:hover:text-colors-primaryYellow" />
                <p className="text-white font-bold md:font-semibold">
                  Sign in with GitHub
                </p>
              </div>
              <p className="dark:text-white text-center">
                Already have an account ? {""}
                <Link
                  to="/login"
                  className="text-colors-primaryYellow font-bold md:font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
