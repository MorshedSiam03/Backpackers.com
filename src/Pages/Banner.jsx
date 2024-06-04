// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/Zd7z32s/439620-wallpaper-thailand-5k-4k-wallpaper-8k-beach-shore-boat.jpg"
            alt=""
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/K7hc1by/village-salzkammergut-hallstatt-eu-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/9pR3bhk/pexels-sudipta-1603650.jpg"
            alt=""
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/mqxcP2g/single-slide1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/qmtQXjR/sheraton-maldives-resort-luxury-bungalows-in-water-photo-hd-wallpaper-1920-1080-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[70vh] object-cover"
            src="https://i.ibb.co/F5wQspL/nature-water-sea-travel-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Banner;
