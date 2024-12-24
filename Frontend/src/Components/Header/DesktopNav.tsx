import { navItems } from "./Navitems";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiSignInFill } from "react-icons/pi";
import { CommonButton, DarkModeToggle, MobileNavbar } from "..";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <>
      <header className="bg-transparent dark:text-white dark:bg-whiteScreen  z-50 ">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-end">
            <img src={logo} className="w-[40px] md:w-[50px]" />
            <h1 className="text-xl mb-2 font-semibold">ailyDash</h1>
          </div>
          <ul className="hidden md:flex gap-5">
            {navItems.map((data, index) => (
              <li
                key={index}
                className="cursor-pointer flex gap-2 items-center  dark:text-white text-black dark:hover:text-colors-primaryYellow hover:text-colors-hoverYellow font-sans text-sm py-2 px-4 "
              >
                {data.icon} {data.title}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-5">
            <Link to="/login">
              <CommonButton icon={<PiSignInFill />}>sign-in</CommonButton>
            </Link>
            <Link to="signup">
              <CommonButton icon={<SiGnuprivacyguard />}>sign-up</CommonButton>
            </Link>

            <DarkModeToggle />
          </div>
          <div className="md:hidden cursor-pointer hover:text-colors-hoverYellow ">
            <DarkModeToggle />
          </div>
        </nav>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </header>
    </>
  );
};

export default DesktopNav;
