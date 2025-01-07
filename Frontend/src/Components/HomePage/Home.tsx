import { FaKeyboard } from "react-icons/fa";
import { RiCameraAiFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="min-h-[88vh] flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col gap-6">
          <h1 className="md:text-5xl text-4xl mt-2 dark:text-white text-center md:text-start text-colors-darkComponent">
            Connect, Collaborate, <br />
            Complete.
          </h1>
          <p className="md:text-2xl text-[22px] text-gray-500 mt-4 text-center md:text-start">
            Connect, Conduct meetings and, <br /> assign tasks in one
            streamlined experience.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-start gap-5 ">
            <button className="flex bg-colors-primaryYellow p-3 text-white rounded items-center gap-2">
              <RiCameraAiFill />
              New Meeting
            </button>
            <div className="flex items-center gap-5">
              <div className="flex items-center bg-white dark:bg-colors-darkComponent dark:border-colors-blackScreen gap-2 border rounded p-3 justify-center">
                <FaKeyboard className="mr-2 text-gray-600" />
                <input
                  type="text"
                  placeholder="Enter a code or link"
                  className="border-none outline-none bg-transparent flex-1 text-lg"
                />
              </div>
              <button className="text-lg text-colors-primaryYellow font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <h2 className="text-2xl">Right Side Content</h2>
      </div>
    </div>
  );
};

export default Home;
