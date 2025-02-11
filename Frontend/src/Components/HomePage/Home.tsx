import swiper1 from '../../assets/swip1.svg'
import swiper2 from '../../assets/swip2.svg'
import swiper3 from '../../assets/swip3.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CommonButton } from '..';
import { IoVideocamOutline } from "react-icons/io5";
import { CiKeyboard } from "react-icons/ci";


const Home = () => {
  return (
    <div className="flex py-5 px-5 w-full h-screen flex-col">
    
      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-56 bg-transparent p-5"
        >
          <SwiperSlide>
            <img src={swiper1} alt="swip1"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper2} alt="swip2"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper3} alt="swip3"  />
          </SwiperSlide>
        </Swiper>
   
      <div className='flex gap-5 justify-center items-center'>
  
       <CommonButton icon={<IoVideocamOutline />}>New meeting</CommonButton>
       <CommonButton icon={<CiKeyboard />}>Enter the link</CommonButton>

      </div>
    </div>
  );
};

export default Home;
