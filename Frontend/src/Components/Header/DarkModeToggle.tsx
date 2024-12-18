import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (darkModePreference) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-[50px] h-[50px] rounded-full flex items-center justify-center dark:bg-white bg-colors-darkComponent dark:text-colors-primaryYellow text-white"
    >
      {isDarkMode ? (
        <AiFillSun className="text-3xl" />
      ) : (
        <FaMoon className="text-3xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
