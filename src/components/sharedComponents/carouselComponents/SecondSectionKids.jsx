import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

const API = "http://localhost:5000/api/v1/product/";
const staticAPI = "http://localhost:5000/api/v1/uploads/";

export default function SecondSectionKids() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const resp = await axios.get(API);
      setProducts(resp.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const navigate = useNavigate();
  const handleProductClick = (item, selectedImage) => {
    navigate(`/product_details/${item.id}`, { state: { item, selectedImage } });
  };

  const kidsProducts = products.filter((item) => item.category === "kids");

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        className="w-full h-500"
        modules={[Pagination, Navigation]}
      >
        {kidsProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              {item.images.map((image) => (
                <img
                  key={image.id}
                  src={staticAPI + image.url}
                  className="w-[500px] h-[500px] object-contain bg-white cursor-pointer"
                  alt={`Slide ${item.id}`}
                  onClick={() =>
                    handleProductClick(item, staticAPI + image.url)
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
  );
}
