import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

import { Autoplay, EffectCube, Mousewheel, Pagination } from "swiper/modules";

export default function TheHeroCarousel({ images }) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
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
            <img
              src={image.img}
              className="cursor-pointer object-cover w-[500px] h-[460px]"
              alt={`Slide ${image.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
