import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { apiConfig } from "../../../services/api/config";

export default function SecondCarousel({
  products,
  isError,
  handleProductClick,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          direction={"horizontal"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-[80%] border border-white shadow-custom-shadow "
          modules={[Pagination, Navigation, Autoplay]}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product-card">
                {item.images.map((image) => (
                  <img
                    key={image.id}
                    src={`${apiConfig.baseUrl}uploads/${image.url}`}
                    className="w-[400px] h-[400px] object-cover bg-white cursor-pointer"
                    alt={`Slide ${item.id}`}
                    onClick={() =>
                      handleProductClick(
                        item,
                        `${apiConfig.baseUrl}uploads/${image.url}`
                      )
                    }
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center items-center">
            {isError && <h1>{isError}</h1>}
          </div>
        </Swiper>
      </div>
      <div className="lg:hidden">
        <div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            direction={"horizontal"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="w-[100%] border border-white shadow-custom-shadow "
            modules={[Pagination, Navigation, Autoplay]}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="product-card flex justify-center">
                  {item.images.map((image) => (
                    <img
                      key={image.id}
                      src={`${apiConfig.baseUrl}uploads/${image.url}`}
                      className="w-full h-[320px] object-cover bg-white cursor-pointer px-2"
                      alt={`Slide ${item.id}`}
                      onClick={() =>
                        handleProductClick(
                          item,
                          `${apiConfig.baseUrl}uploads/${image.url}`
                        )
                      }
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-center items-center">
              {isError && <h1>{isError}</h1>}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
