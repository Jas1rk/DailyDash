import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="md:w-[40px] md:h-[40px] h-[30px] w-[30px] rounded-full flex items-center justify-center dark:bg-white bg-colors-darkComponent dark:text-colors-primaryYellow text-white"
    >
      {isDarkMode ? (
        <AiFillSun className="text-lg" />
      ) : (
        <FaMoon className="text-lg" />
      )}
    </button>
  );
};

export default DarkModeToggle;
