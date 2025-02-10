import swiper1 from '../../assets/swip1.svg'
import swiper2 from '../../assets/swip2.svg'
import swiper3 from '../../assets/swip3.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="flex py-5 px-5 w-auto h-screen">
      <div className=" p-4 shadow-2xl rounded ">
      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded"
        >
          <SwiperSlide>
            <img src={swiper1} alt="swip1" className="w-full h-auto rounded" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper2} alt="swip2" className="w-full h-auto rounded" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper3} alt="swip3" className="w-full h-auto rounded" />
          </SwiperSlide>
        </Swiper>
      </div> 
    </div>
  );
};

export default Home;
