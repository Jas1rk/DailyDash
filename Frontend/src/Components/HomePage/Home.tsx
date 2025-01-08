import { FaKeyboard } from "react-icons/fa";
import { RiCameraAiFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import assigntask from "../../assets/assigntask.svg";
import schedule from "../../assets/schedule.svg";
import secure from "../../assets/secure.svg";
import sharelink from "../../assets/linkshare.svg";

const Home = () => {
  return (
    <div className="min-h-[88vh] flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col gap-6">
          <h1 className="md:text-5xl text-4xl mt-2 text-colors-darkText dark:text-white text-center md:text-start">
            Connect, Collaborate, <br />
            Complete.
          </h1>
          <p className="md:md:text-2xl text-xl text-[22px] text-gray-500 mt-4 text-center md:text-start">
            Connect, Conduct meetings and, <br /> assign tasks in one
            streamlined experience.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-start gap-5">
            <button className="flex bg-colors-primaryYellow p-3 text-colors-darkText dark:text-white rounded items-center gap-2">
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
          <div className="md:w-full w-[90%]  mt-10 h-[1px] bg-colors-primaryYellow"></div>
        </div>
      </div>
      <div className="flex-1 flex   my-32 md:my-0 justify-center items-center relative">
        <div className="w-[90%] max-w-[500px] flex justify-center items-center relative">
          <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true} // Ensure loop is enabled for autoplay
            autoplay={{
              delay: 3000, // Set delay in milliseconds
              disableOnInteraction: false, // Keep autoplay active after user interaction
            }}
          >
            <SwiperSlide>
              <div className="relative text-center ">
                <img
                  src={schedule}
                  alt="Schedule"
                  className="w-[75%] mx-auto block"
                />
                <div className="absolute mb-10 botom-4 left-1/2 transform -translate-x-1/2 text-colors-darkText dark:text-white md:text-2xl text-lg font-semibold">
                  Schedule Meetings
                </div>
                <p className="my-10 text-gray-500 dark:text-gray-400 md:text-base text-sm">
                  Stay on top of your calendar by scheduling meetings
                  effortlessly with automated reminders.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative text-center">
                <img
                  src={assigntask}
                  alt="Assign Task"
                  className="w-[80%] mx-auto block"
                />
                <div className="absolute mb-10 bottom-4 left-1/2 transform -translate-x-1/2 text-colors-darkText dark:text-white md:text-2xl text-lg font-semibold">
                  Assign Tasks
                </div>
                <p className="my-10 text-gray-500 dark:text-gray-400 md:text-base text-sm">
                  Assign tasks to your team with clear deadlines and track their
                  progress seamlessly.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative text-center">
                <img
                  src={sharelink}
                  alt="Share Link"
                  className="w-[80%] mx-auto block"
                />
                <div className="absolute my-10 bottom-4 left-1/2 transform -translate-x-1/2 text-colors-darkText dark:text-white md:text-2xl text-lg font-semibold">
                  Share Links
                </div>
                <p className="my-10 text-gray-500 dark:text-gray-400 md:text-base text-sm">
                  Share meeting links with a single click, making it easy for
                  everyone to join.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative text-center">
                <img
                  src={secure}
                  alt="Secure"
                  className="w-[80%] mx-auto block"
                />
                <div className="absolute mb-10 bottom-4 left-1/2 transform -translate-x-1/2 text-colors-darkText dark:text-white md:text-2xl text-lg font-semibold">
                  Your meeting is safe
                </div>
                <p className="my-10 text-gray-500 dark:text-gray-400 md:text-base text-sm">
                  Protect your meetings with top-notch security protocols and
                  encrypted connections.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
