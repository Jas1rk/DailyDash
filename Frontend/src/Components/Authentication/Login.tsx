import login from "../../assets/login.svg";

const Login = () => {
  return (
    <div className="w-[90%] md:w-auto flex flex-col items-center bg-colors-lightComponent shadow-md dark:shadow-none gap-10 dark:bg-colors-darkComponent p-10 rounded-2xl">
      <h1 className="dark:text-white text-2xl font-bold text-center">Login</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <img src={login} className="w-[400px]" />
        <div>
          <div className="mt-5">
            <label htmlFor="name" className="text-colors-primaryYellow">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              className="w-full placeholder:text-gray-600  bg-colors-whiteScreen dark:bg-colors-blackScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-lg border-b-colors-primaryYellow"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="name" className="text-colors-primaryYellow">
              Password
            </label>
            <input
              placeholder="••••••••••"
              type="text"
              className="w-full placeholder:text-gray-600 dark:bg-colors-blackScreen bg-colors-whiteScreen mt-2 py-1 px-2 outline-none text-colors-primaryYellow border-b-2 text-lg border-b-colors-primaryYellow"
            />
          </div>
        </div>
      </div>
      <button className="bg-colors-primaryYellow  text-white mt-5 py-2 px-10 rounded-3xl font-bold">
        Login
      </button>
    </div>
  );
};

export default Login;
