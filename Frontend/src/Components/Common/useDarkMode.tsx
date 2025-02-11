import { useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && darkModePreference)) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
};

export default useDarkMode;
