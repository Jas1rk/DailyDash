import { RiLoginCircleFill } from "react-icons/ri";
import { navItems } from "./Navitems";

const MobileNav = () => {
  return (
    <div className="fixed rounded-full bottom-10 left-2/4 transform -translate-x-1/2 bg-colors-primaryYellow h-[55px] w-[80%] shadow-md ">
      <div className="w-full flex justify-around items-center h-full text-white dark:text-colors-darkComponent">
        {navItems.map((nav, index) => (
          <div
            className="flex items-center justify-center flex-col"
            key={index}
          >
            {nav.icon}
            <p className="text-xs">{nav.title}</p>
          </div>
        ))}

        <div className="flex items-center justify-center flex-col">
          <RiLoginCircleFill className="text-2xl" />
          <p className="text-xs">Login</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
