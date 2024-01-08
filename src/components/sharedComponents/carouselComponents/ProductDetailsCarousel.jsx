import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";
import { apiConfig } from "../../../services/api/config";


export default function ProductDetailsCarousel({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[500px] h-[30vh] bg-neutral-100 rounded-md "
      >
        {images?.map((image) => (
          <SwiperSlide key={image?.id}>
            <img
            src={`${apiConfig.baseUrl}uploads/${image.url}`}
              className="cursor-pointer object-cover w-[200px] h-[200px]"
              alt={`Slide ${image?.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
