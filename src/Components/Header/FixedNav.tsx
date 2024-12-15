import React from "react";
import { motion } from "framer-motion";
import { navItems } from "./Navitems";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

const FixedNav = () => {
  return (
    <motion
      className="fixed z-[999] top-4 left-1/2 rounded-full p-1  bg-[#e91f64] bg-opacity-[.08] backdrop-blur-lg border border-[#f83c86] border-opacity-[.08]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
    >
      <div className="flex items-center gap-3 font-jakarta">
        <h1>DailyDash</h1>
        {navItems.map((data, index) => (
          <li key={index}>{data.title}</li>
        ))}
      </div>
    </motion>
  );
};

export default FixedNav;
