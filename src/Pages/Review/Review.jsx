import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <>
    <h1 className='text-3xl font-bold text-center mt-5'>Reviews</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-80 my-5"
      >
        <SwiperSlide>
          <img  src="https://embedsocial.com/wp-content/uploads/2022/11/classic-google-reviews-feed.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/google-reviews-cta-widget.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://embedsocial.com/wp-content/uploads/2022/11/modern-google-reviews-slider.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Review;