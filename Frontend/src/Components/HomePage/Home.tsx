import swiper1 from "../../assets/swip1.svg";
import swiper2 from "../../assets/swip2.svg";
import swiper3 from "../../assets/swip3.svg";
import swiper4 from "../../assets/swip4.svg";
import swiper5 from "../../assets/swip5.svg";
import swiper6 from "../../assets/swip6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { CommonButton, CommonInput } from "..";
import { IoVideocamOutline } from "react-icons/io5";
import { CiKeyboard } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";



const slideImages = [
  { image: swiper1, title: "Conversation" },
  { image: swiper2, title: "Meeting" },
  { image: swiper3, title: "Meet the team" },
  { image: swiper4, title: "Calendar" },
  { image: swiper5, title: "Everywhere together" },
  { image: swiper6, title: "Schedule meeting" },
];

const Home = () => {
  const [linkInput, setLinkInput] = useState<string>("");
  const location = useLocation()

  useEffect(()=>{
    if(location?.state?.message){
      toast.success(location.state.message)
    }
  },[location.state])
  

  const handle = () => {
    if (linkInput) {
      alert("hello");
      return;
    }
  };

  



  return (
    <div className="flex py-5 px-5 w-full h-screen flex-col relative">
      <div className="flex flex-col md:flex-row justify-center  gap-5">
        <div className="flex flex-col">
          <h1 className="font-normal m-0 text-4xl font-sans text-colors-darkComponent dark:text-white leading-tight tracking-normal max-w-72">
            Meetings for your teams
          </h1>
          <p className="font-serif max-w-80  font-normal tracking-normal leading-5 text-base mt-2 text-[#444746]">
            Collaborate and celebrate from anywhere with your team
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-2 ">
            <CommonButton icon={<IoVideocamOutline />}>
              New meeting
            </CommonButton>
            <CommonInput
              type="text"
              placeholder="Enter your link"
              icon={<CiKeyboard />}
              name="link"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              className={`rounded-lg  focus:right-2 focus:ring-colors-primaryYellow 
                ${
                  linkInput
                    ? "border border-colors-primaryYellow duration-200 ease-in-out"
                    : ""
                }`}
            />
            <h1
              className={
                linkInput
                  ? `text-colors-primaryYellow cursor-pointer`
                  : `text-[#444746] cursor-not-allowed`
              }
              onClick={handle}
            >
              Join
            </h1>
          </div>
        </div>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          mousewheel={true}
          modules={[EffectCube, Autoplay, Mousewheel]}
          className="mySwiper"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt="swip1" />
              <h1 className="text-colors-darkText dark:text-colors-lightText text-center mt-2">{slide.title}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
