import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";

const TheSecondSectionCarousel = ({ items, settings }) => {

  const handleSlideClick = (url) => {
    window.location.href = url;
  }

  return (
    <>
      {/* Card Background */}
      <div className=" bg-white h-[100vh]">
        {/* Card Background */}
        <div className="bg-whiteborder m-2 ">
          <div className="bg-neutral-50 flex flex-row justify-start">
            <div
              onClick={() => handleTabClick("popular")}
              className={`cursor-pointer mx-9 ${activeTab === "popular"
                  ? "text-5xl font-bold "
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh]`}
            >
              <p className="py-14">Popular</p>
              {activeTab === "popular" && (
                <div className="border-8 border-black">
                  <TheSecondSectionCarousel />
                </div>
              )}
            </div>
            <div
              onClick={() => handleTabClick("women")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "women"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Women's
            </div>
            <div
              onClick={() => handleTabClick("men")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "men"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Men's
            </div>
            <div
              onClick={() => handleTabClick("kids")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "kids"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Kid's
            </div>
          </div>

          <div className="">
            {/* Render images based on the active tab */}

            {activeTab === "women" && renderImages(womenImages)}
            {activeTab === "men" && renderImages(menImages)}
            {activeTab === "kids" && renderImages(kidsImages)}
          </div>
        </div>
      </div>

      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => handleSlideClick('/product_details')} className="flex flex-row items-center overflow-hidden ">
          {/* picture's  div */}
          <div className="flex flex-row items-center w-64 h-64 overflow-hidden"> 

            
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default TheSecondSectionCarousel;
