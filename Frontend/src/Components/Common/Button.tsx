import React from "react";

type Button = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, icon, onClick }: Button) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-colors-primaryYellow  flex gap-2 justify-center items-center hover:bg-colors-hoverYellow text-black p-2 w-full px-4 rounded-3xl mt-1 text-base"
      >
        {icon && <span>{icon}</span>}
        {children}
      </button>
    </>
  );
};

export default Button;
