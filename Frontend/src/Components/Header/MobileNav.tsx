import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";

const MobileNav = () => {
  return (
    <div className="fixed rounded-full bottom-10 left-2/4 transform -translate-x-1/2 bg-colors-primaryYellow h-[55px] w-[80%] shadow-md dark:shadow-[0_4px_6px_-1px_rgba(247,181,0,0.6),0_2px_4px_-2px_rgba(247,181,0,0.4)]">
      <div className="w-full flex justify-around items-center h-full text-white dark:text-colors-darkComponent">
        <div className="flex items-center justify-center flex-col">
          <FaHome className="text-2xl" />
          <p className="text-xs">Home</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <IoSettings className="text-2xl" />
          <p className="text-xs">Settings</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <RiLoginCircleFill className="text-2xl" />
          <p className="text-xs">Login</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
