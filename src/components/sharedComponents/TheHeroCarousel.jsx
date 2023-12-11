import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  
// import required modules
import { Autoplay, EffectFade, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import images from '../../data/HeroCarouselImages';

export default function TheHeroCarousel() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="relative justify-center align-middle flex flex-row h-[100%] w-[100%] bg-slate-400 text-sm text-black rounded-md"
      >
         {images.map((images) => (
          <SwiperSlide key={images.id} className="swiper-slide object-cover flex justify-center items-center">
            <img src={images.img} className='w-full h-full cursor-pointer ' alt={`Slide ${images.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
