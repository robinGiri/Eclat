import React from 'react';
import Thecard from '../TheCard';
import products from '../../../data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

export default function VerticalScrollContainer() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-h-[700px] overflow-y-auto relative">
            <h4 className="pt-4 px-4 font-medium sticky top-0 bg-white h-14 shadow-sm z-10">
              Similar Products
            </h4>
            <div className="w-[300px] p-2 mt-2">
              {products.map((card) => (
                <Thecard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
