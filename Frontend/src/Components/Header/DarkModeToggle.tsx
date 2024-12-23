import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(darkModePreference);
      if (darkModePreference) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("the dark",isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-white bg-colors-darkComponent dark:text-colors-primaryYellow text-white"
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
