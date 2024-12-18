import React from "react";

type Button = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = ({ children, icon }: Button) => {
  return (
    <>
      <button className="bg-colors-primaryYellow  flex gap-2 justify-center items-center hover:bg-colors-hoverYellow text-black p-2 w-32 rounded-3xl">
        {icon && <span>{icon}</span>}
        {children}
      </button>
    </>
  );
};

export default Button;
