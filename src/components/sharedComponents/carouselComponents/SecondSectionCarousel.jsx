import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import images from '../../../data/carousel-images/SecondSectionCarouselImages';


// import required modules
import {  Navigation, Pagination } from 'swiper/modules';

export default function SecondSectionCarousel() {
  return (
    <>
      <Swiper
      navigation={true}
      direction={'horizontal'}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%] h-[500px]"
      >
         {images.map((image) => (
        <SwiperSlide key={image.id} className="w-auto h-auto">
          <img src={image.img} className='cursor-pointer object-cover w-[100%] h-[100vh]' alt={`Slide ${image.id}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
