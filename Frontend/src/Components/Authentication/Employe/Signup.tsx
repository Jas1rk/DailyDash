import { HTMLInputTypeAttribute, useState } from "react";
import { useFormik } from "formik";
import signup from "../../../assets/signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "./validations";
import { FaGithub } from "react-icons/fa6";
import useAuthHandler from "../../../Hooks/UseAuth";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { backendUrl } from "../../../Service/BackendUrl";

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
  { label: "Name", type: "text", placeHolder: "Enter your full name", name: "name" },
  { label: "Email", type: "email", placeHolder: "Enter your email", name: "email" },
  { label: "Mobile", type: "number", placeHolder: "Enter your number", name: "mobile" },
  { label: "Password", type: "password", placeHolder: "••••••••••", name: "password" },
  { label: "Confirm Password", type: "password", placeHolder: "••••••••••", name: "confirmPassword" },
];

const Signup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const googleLogin = useAuthHandler();

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit:  (values, { resetForm }) => {
      console.log("Submitting form:", values);
      handleRegister(values);
      resetForm();
    },
  });

  const handleRegister = async (values: FormValues) => {
    try {
      const response = await axios.post(`${backendUrl}/employ/register-employ`, {
        employEmail: values.email,
      });
      console.log("Registration success:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="w-[90%] md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5 dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl">
      <h1 className="dark:text-white text-2xl font-bold text-center">Register</h1>

      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col">
        <div className="flex w-full flex-col md:flex-row md:gap-10">
          <img src={signup} className="hidden md:block w-[270px]" alt="Signup" />
          <div className="flex flex-col w-full">
            {inputFields.slice(0, 3).map((input, index) => (
              <div className="mt-5 w-full" key={index}>
                <label htmlFor={input.name} className="text-colors-primaryYellow">{input.label}</label>
                <input
                  id={input.name}
                  placeholder={input.placeHolder}
                  type={input.type}
                  className="w-full bg-transparent outline-none bg-colors-whiteScreen dark:bg-colors-blackScreen placeholder:text-gray-600 text-colors-primaryYellow border-b-2 border-b-colors-primaryYellow p-1"
                  {...formik.getFieldProps(input.name)}
                />
                {formik.touched[input.name] && formik.errors[input.name] && (
                  <p className="text-red-500 text-[12px] mt-1">{formik.errors[input.name]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          {inputFields.slice(3).map((input, index) => (
            <div className="mt-5 w-full" key={index}>
              <label htmlFor={input.name} className="text-colors-primaryYellow">{input.label}</label>
              <div className="w-full flex items-center bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none border-b-2 border-b-colors-primaryYellow">
                <input
                  id={input.name}
                  placeholder={input.placeHolder}
                  type={input.type === "password" ? (isVisible ? "text" : "password") : input.type}
                  className="w-full bg-transparent outline-none placeholder:text-gray-600 text-colors-primaryYellow"
                  min={input.type === 'number' ? 1 : undefined}
                  {...formik.getFieldProps(input.name)}
                />
                {input.type === "password" && (
                  isVisible ? <FaEyeSlash className="cursor-pointer text-colors-primaryYellow" onClick={() => setIsVisible(false)} />
                  : <FaEye className="cursor-pointer text-colors-primaryYellow" onClick={() => setIsVisible(true)} />
                )}
              </div>
              {formik.touched[input.name] && formik.errors[input.name] && (
                <p className="text-red-500 text-[12px] mt-1">{formik.errors[input.name]}</p>
              )}
            </div>
          ))}

          <div>
          <button type="submit" className="bg-colors-primaryYellow w-full text-white mt-8 py-2 px-10 rounded-3xl font-bold">
            Register
          </button>

          </div>

          <div className="flex items-center justify-center gap-1 mt-4">
            <div className="flex-grow h-[1px] bg-gray-400"></div>
            <p className="text-colors-primaryYellow px-2">or</p>
            <div className="flex-grow h-[1px] bg-gray-400"></div>
          </div>

          <div className="mt-3 flex flex-col gap-4 overflow-hidden">
            <GoogleLogin
              onSuccess={(response: CredentialResponse) => {
                console.log("Google Login Success:", response);
                googleLogin(response.credential);
              }}
              onError={() => console.error("Google Login Failed")}
            />
            <div className="w-full flex items-center justify-around shadow-md bg-black p-2 py-3 rounded-md">
              <FaGithub className="hover:text-colors-primaryYellow text-2xl cursor-pointer text-white dark:hover:text-colors-primaryYellow" />
              <p className="text-white font-bold md:font-semibold">Sign in with GitHub</p>
            </div>
          </div>

          <p className="dark:text-white text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-colors-primaryYellow font-bold md:font-semibold">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
