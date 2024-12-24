import { DarkModeToggle, Login } from "../Components";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <>
      <div className="relative w-screen h-screen flex items-center justify-center">
        <div className="absolute top-5 left-5 flex items-end ml-4">
          <img src={logo} alt="Logo" className="w-[30px] md:w-[50px]" />
          <h1 className="text-md md:text-xl md:mb-2  font-semibold dark:text-white">
            ailyDash
          </h1>
        </div>
        <div className="absolute top-5 right-5 mr-4">
          <DarkModeToggle />
        </div>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
