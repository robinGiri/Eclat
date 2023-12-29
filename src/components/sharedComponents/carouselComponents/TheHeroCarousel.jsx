import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';

  
// import required modules
import { Autoplay, EffectCube, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import images from '../../../data/carousel-images/HeroCarouselImages';

export default function TheHeroCarousel() {
  return (
    <>
      <Swiper
      // direction={'horizontal'}
      effect={'cube'}
      grabCursor={true}
      // slidesPerView={1}
      // spaceBetween={0}
      // mousewheel={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 5,
        shadowScale: 0.14,
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Mousewheel, Pagination, EffectCube]}
      className="w-[500px] h-[400px] sm:w-[500px]"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} className="w-auto h-auto">
          <img src={image.img} className='cursor-pointer object-cover w-[500px] h-[460px]' alt={`Slide ${image.id}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
}
