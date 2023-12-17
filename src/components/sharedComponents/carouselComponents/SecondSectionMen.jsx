import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';


import images from '../../../data/carousel-images/SecondSectionCarousel_MenImages';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function SecondSectionMen() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        // direction={'horizontal'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%] h-[500px] p-2"
      >
         {images.map((image) => (
        <SwiperSlide key={image.id} className="w-auto h-auto">
          <img src={image.img} className='cursor-pointer object-cover w-[90%] h-[100vh]' alt={`Slide ${image.id}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
