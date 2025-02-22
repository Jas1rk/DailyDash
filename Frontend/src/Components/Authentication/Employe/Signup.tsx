import { HTMLInputTypeAttribute, useState } from "react";
import { useFormik } from "formik";
import signup from "../../../assets/signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "./validations";

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
    <div className="w-[90%] md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5 dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl overflow-hidden">
      <h1 className="dark:text-white text-2xl font-bold text-center">
        Register
      </h1>
      <div className="flex w-full items-center flex-col md:flex-row md:gap-10">
        <img src={signup} className="w-[270px] md:w-[400px]" alt="Signup" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
          {inputFields.map((input, index) => (
            <div className="mt-5" key={index}>
              <label htmlFor="name" className="text-colors-primaryYellow">
                {input.label}
              </label>
              <div className="w-full flex items-center placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
                <input
                  type={
                    input.type === "password"
                      ? isVisible
                        ? "text"
                        : "password"
                      : input.type
                  }
                  placeholder={input.placeHolder}
                  {...formik.getFieldProps(input.name)}
                  className="w-full bg-transparent outline-none placeholder:text-gray-600"
                  min={input.type === "number" ? 1 : undefined}
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
                <p className="text-red-500 text-xs mt-1 absolute">
                  {formik.errors[input.name]}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-colors-primaryYellow w-full text-white mt-8 py-2 px-10 rounded-3xl font-bold"
          >
            Register
          </button>
        </form>
      </div>
      <p className="dark:text-white text-center mt-5">
        Already have an account ? {""}
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
