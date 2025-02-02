import { CommonButton, CommonInput } from "..";
import { IoAdd } from "react-icons/io5";

const Leftsidebar = () => {
  return (
    <div className=" w-full p-4 h-screen">
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
