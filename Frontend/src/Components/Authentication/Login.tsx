import { useState } from "react";
import login from "../../assets/login.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <div className="w-[90%]    md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5  dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl overflow-hidden">
        <h1 className="dark:text-white text-2xl font-bold text-center">
          Login
        </h1>
        <div className="flex w-full items-center flex-col md:flex-row md:gap-10">
          <img src={login} className="w-[270px] md:w-[350px]" />
          <div className="flex flex-col">
            <div>
              <div className="mt-5 w-full">
                <label htmlFor="name" className="text-colors-primaryYellow">
                  Email
                </label>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="w-full placeholder:text-gray-600  bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow"
                />
              </div>
              <div className="mt-5 mb-10">
                <label htmlFor="name" className="text-colors-primaryYellow">
                  Password
                </label>
                <div className="w-full flex items-center  placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
                  <input
                    placeholder="••••••••••"
                    type={isVisible ? "text" : "password"}
                    className=" bg-transparent outline-none"
                  />
                  {!isVisible ? (
                    <FaEye
                      className=" cursor-pointer"
                      onClick={() => setIsVisible(true)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    />
                  )}
                </div>
                <button className="bg-colors-primaryYellow  w-full text-white mt-5 py-2 px-10 rounded-3xl font-bold">
                  Login
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2 ">
              <div className="flex-grow h-[1px] bg-gray-400"></div>
              <p className="text-colors-primaryYellow px-2">or</p>
              <div className="flex-grow h-[1px] bg-gray-400"></div>
            </div>
            <div className="mt-3 flex flex-col gap-4 overflow-hidden">
              <div className="flex items-center justify-around bg-white p-2 border-2  rounded-md">
                <FcGoogle className="hover:text-colors-primaryYellow text-2xl cursor-pointer dark:text-gray-400 dark:hover:text-colors-primaryYellow" />
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
                Dont have an account ?{" "}
                <Link
                  to="/signup"
                  className="text-colors-primaryYellow font-bold md:font-semibold"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
