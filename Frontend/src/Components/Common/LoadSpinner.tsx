import logo from "../../assets/logo.png";

const LoadSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-colors-lightComponent dark:bg-colors-darkComponent backdrop-blur-md z-50">
      <div className="relative flex items-center justify-center">
        <img src={logo} className="w-[40px] md:w-[50px] absolute" />
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-colors-primaryYellow p-10"></div>
      </div>
    </div>
  );
};

export default LoadSpinner;
