import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


import images from '../../../data/carousel-images/SecondSectionCarousel_KidsImages';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function ProductDetailsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        direction={'horizontal'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[500px] h-[30vh] bg-neutral-100 rounded-md "
      >
         {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img src={image.img} className='cursor-pointer object-cover w-[200px] h-[200px]' alt={`Slide ${image.id}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}

