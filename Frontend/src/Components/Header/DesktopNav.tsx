import { navItems } from "./Navitems";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiSignInFill } from "react-icons/pi";
import { CommonButton, DailyDashLogo, DarkModeToggle, MobileNavbar } from "..";

import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const DesktopNav = () => {
  const { employData }: any = useAuth();

  return (
    <>
      <header className="bg-transparent dark:text-white dark:bg-whiteScreen  z-50 ">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <DailyDashLogo />
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
            {employData ? (
              <img
                src={employData?.profilePicture}
                alt="profile image"
                className="md:w-[40px] md:h-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center cursor-pointer"
              />
            ) : (
              <>
                <Link to="/login">
                  <CommonButton icon={<PiSignInFill />}>Login</CommonButton>
                </Link>
                <Link to="signup">
                  <CommonButton icon={<SiGnuprivacyguard />}>
                    Register
                  </CommonButton>
                </Link>
              </>
            )}

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
