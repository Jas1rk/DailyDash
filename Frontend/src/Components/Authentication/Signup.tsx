import { useState } from "react";
import signup from '../../assets/signup.png'
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <div className="w-[90%]    md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-5  dark:bg-colors-darkComponent p-8 md:p-10 rounded-2xl overflow-hidden">
        <h1 className="dark:text-white text-2xl font-bold text-center">
          Register
        </h1>
        <div className="flex w-full items-center flex-col md:flex-row md:gap-10">
          <img src={signup} className="w-[270px] md:w-[400px]" />
          <div className="flex flex-col">
            <div>
              <div className="mt-5 w-full">
                <label htmlFor="name" className="text-colors-primaryYellow">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  type="text"
                  className="w-full placeholder:text-gray-600  bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow"
                />
              </div>
              <div className="mt-5 w-full">
                <label htmlFor="name" className="text-colors-primaryYellow">
                  Email
                </label>
                <input
                  placeholder="example@gamil.com"
                  type="email"
                  className="w-full placeholder:text-gray-600  bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow"
                />
              </div>
              <div className="mt-5 mb-10">
                <div>
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
                <div  className="mt-5 mb-3">
                  <label htmlFor="name" className="text-colors-primaryYellow">
                    Confrim Password
                  </label>
                  <div className="w-full flex items-center  placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-md border-b-colors-primaryYellow">
                    <input
                      placeholder="••••••••••"
                      type={isVisible ? "text" : "password"}
                      className=" bg-transparent outline-none"
                    />
                  </div>
                </div>
                <button className="bg-colors-primaryYellow  w-full text-white mt-5 py-2 px-10 rounded-3xl font-bold">
                  Register
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden">
              <p className="dark:text-white text-center">
                Already have an account ?{" "}
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
    </>
  );
}

export default Signup