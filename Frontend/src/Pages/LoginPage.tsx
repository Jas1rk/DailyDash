import { DailyDashLogo, DarkModeToggle, Login } from "../Components";

const LoginPage = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center p-5 container mx-auto">
          <DailyDashLogo />
          <DarkModeToggle />
        </div>
        <div className="w-screen place-items-center md:py-4">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
