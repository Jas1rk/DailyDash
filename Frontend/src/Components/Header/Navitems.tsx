import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

type Items = {
  title: string;
  url?: string;
  icon?: React.ReactNode; 
};

export const navItems: Items[] = [
  { title: "Home", url: "/home", icon:<FaHome className="text-xl"/> },
  { title: "Settings", url:"/settings", icon:<IoSettings className="text-xl"/> },
];

