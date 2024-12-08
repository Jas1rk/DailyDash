import React from "react";

type Button = {
  children: React.ReactNode;
};

const Button = ({ children }: Button) => {
  return (
    <>
      <button className="bg-[#f181e3] hover:bg-[#a6258f] text-[#4a083d] p-2 w-32 rounded-3xl">
        {children}
      </button>
    </>
  );
};

export default Button;
