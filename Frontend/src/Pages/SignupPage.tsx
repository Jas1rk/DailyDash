import { DailyDashLogo, DarkModeToggle, Signup } from "../Components";

const SignupPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between items-center container mx-auto p-5">
        <DailyDashLogo />
        <DarkModeToggle />
      </div>
      <div className="w-screen grid place-items-center  md:py-4">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
