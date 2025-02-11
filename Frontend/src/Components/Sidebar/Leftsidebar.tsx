import {  CommonInput } from "..";
import { IoAdd } from "react-icons/io5";

const Leftsidebar = () => {
  return (
    <div className="hidden md:block w-auto p-4 h-screen sticky border-r-2 border-colors-primaryYellow">
      <h1 className="text-2xl font-bold text-colors-darkComponent dark:text-white">Create Your Task</h1>
      <CommonInput
        placeholder="Create your task"
        type="text"
        className="rounded-md "
        icon={<IoAdd />}
      />
      <button className="bg-colors-primaryYellow rounded-md w-full mt-3 p-2 hover:bg-colors-hoverYellow ">Create</button>
    </div>
  );
};

export default Leftsidebar;
