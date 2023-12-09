import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";

const TheSecondSectionCarousel = ({ items, settings }) => {

  const handleSlideClick = (url) => {
    window.location.href = url;
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => handleSlideClick('/product_details')} className="flex flex-row items-center w-64 h-64 mx-52 mt-5 overflow-hidden rounded-lg">
          <div className="flex flex-row items-center w-64 h-64 mx-52 mt-5 overflow-hidden border border-gray-100 rounded-l">
            <img
              src="https://m.media-amazon.com/images/I/61wcdlkB0XL._AC_UY1100_.jpg"
              alt="Product 1"
              className="mx-10 max-w-64 max-h-64 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default TheSecondSectionCarousel;
