import { useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (darkModePreference) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);
};

export default useDarkMode;
