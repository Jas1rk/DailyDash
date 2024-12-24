import { useState } from "react";
import login from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <div className="w-[90%]   md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-10 dark:bg-colors-darkComponent p-10 rounded-2xl">
        <h1 className="dark:text-white text-2xl font-bold text-center">
          Login
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <img src={login} className="w-[200px] md:w-[250px]" />
          <div className="flex flex-col">
            <div>
              <div className="mt-5">
                <label htmlFor="name" className="text-colors-primaryYellow">
                  Email
                </label>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="w-full placeholder:text-gray-600  bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow"
                />
              </div>
              <div className="mt-5">
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
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="flex-grow h-[1px] bg-gray-400"></div>
              <p className="text-colors-primaryYellow px-2">or</p>
              <div className="flex-grow h-[1px] bg-gray-400"></div>
            </div>
            <div className="mt-3 flex justify-center items-center gap-2 ">
              <AiFillGoogleCircle className="hover:text-colors-primaryYellow text-2xl cursor-pointer dark:text-gray-400 dark:hover:text-colors-primaryYellow" />
              <FaGithub className="hover:text-colors-primaryYellow text-2xl cursor-pointer dark:text-gray-400 dark:hover:text-colors-primaryYellow" />
            </div>
          </div>
        </div>
        <button className="bg-colors-primaryYellow  text-white mt-5 py-2 px-10 rounded-3xl font-bold">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
