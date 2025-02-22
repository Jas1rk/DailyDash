import { DailyDashLogo, DarkModeToggle } from "../Components";
import OtpForm from "../Components/Authentication/Employe/Otp";

const OtpPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between items-center p-5">
        <DailyDashLogo />
        <DarkModeToggle />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <OtpForm />
      </div>
    </div>
  );
};

export default OtpPage;
