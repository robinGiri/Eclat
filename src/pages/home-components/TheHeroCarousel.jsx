import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const TheHeroCarousel = ({ items, settings }) => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-row items-center w-64 h-64 mx-52 mt-5 overflow-hidden border border-gray-100 rounded-lg'>
            <img src="https://i.pinimg.com/originals/b4/59/26/b4592635d6855ea30e1d652b846fb3df.jpg" alt="Product 1" class="mx-10 max-w-full max-h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center w-64 h-64 mx-52 mt-5 overflow-hidden border border-gray-100 rounded-lg'>
            <img src="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-9932.jpg" alt="Product 1" class="mx-10 max-w-full max-h-full object-cover" />
          </div>
        </SwiperSlide>
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
}

export default TheHeroCarousel;
