import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';


import images from '../../../data/carousel-images/SecondSectionCarousel_MenImages';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function SecondSectionMen() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        mousewheel={true}
        direction={'horizontal'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper w-[100%] h-[580px]"
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
