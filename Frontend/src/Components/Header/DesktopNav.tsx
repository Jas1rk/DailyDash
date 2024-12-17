import { useState } from "react";
import { navItems } from "./Navitems";
import { RiMenuFold4Line } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiSignInFill } from "react-icons/pi";
import { CommonButton, MobileNavbar } from "..";

const DesktopNav = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <header className="bg-green-200 dark:bg-whiteScreen  z-50">
        <nav className="container mx-auto flex justify-between items-center p-3">
          <h1 className="text-lg">DailyDash</h1>
          {/* <Input
            className=" rounded-full flex gap-2 justify-center  items-center "
            placeholder="search task..."
            type="search"
            icon={<CiSearch />}
          /> */}
          <ul className="hidden md:flex gap-5">
            {navItems.map((data, index) => (
              <li
                key={index}
                className="cursor-pointer text-gray-600 font-sans text-sm py-2 px-4 rounded-md transition duration-200 ease-in-out hover:text-[#f83c86] overflow-hidden"
              >
                {data.title}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-5">
            <CommonButton icon={<PiSignInFill />} >sign-in</CommonButton>
            <CommonButton icon={<SiGnuprivacyguard />}>sign-up</CommonButton>
          </div>
          <div className="md:hidden text-2xl cursor-pointer hover:text-[#f83c86]">
            <RiMenuFold4Line onClick={() => setMenu(true)} />
          </div>
        </nav>
        {menu && (
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40"
              onClick={() => setMenu(false)}
            ></div>
           <MobileNavbar onClose={() => setMenu(false)}/>
          </>
        )}
      </header>
    </>
  );
};

export default DesktopNav;
