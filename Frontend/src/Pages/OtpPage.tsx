import { DarkModeToggle } from '../Components'
import OtpForm from '../Components/Authentication/Otp'
import logo from '../assets/logo.png'

const OtpPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-start">
          <img src={logo} className="w-[30px] md:w-[40px]" alt="Logo" />
          <h1 className="text-xl font-semibold dark:text-white">ailyDash</h1>
        </div>
        <DarkModeToggle />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <OtpForm />
      </div>
    </div>
  );
};

export default OtpPage;
