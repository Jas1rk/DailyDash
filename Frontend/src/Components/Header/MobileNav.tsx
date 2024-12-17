import React from "react";
import { navItems } from "./Navitems";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

const navVariants = {
  hidden: {
    x: "100%", // Ensure it's off-screen initially
  },
  visible: {
    x: 0, // Slide into view
    transition: {
      type: "spring",
      stiffness: 270,
      damping: 30,
    },
  },
  exit: {
    x: "100%", // Slide out to the right
    transition: {
      type: "spring",
      stiffness: 270,
      damping: 30,
    },
  },
};

type MobileNav = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNav) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 right-0 w-1/2 h-screen bg-[#55021a] text-white flex flex-col p-6 space-y-4 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
        >
          <div className="text-2xl cursor-pointer hover:text-[#f83c86] flex justify-end">
            <IoIosCloseCircleOutline onClick={onClose} />
          </div>
          <ul>
            {navItems.map((data, index) => (
              <li
                key={index}
                className=" hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out"
              >
                {data.title}
              </li>
            ))}
            <li>Sign-in</li>
            <li>Sign-up</li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
