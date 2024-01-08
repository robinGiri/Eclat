import React, { useState, useEffect } from "react";
import SecondCarousel from "../components/sharedComponents/carouselComponents/SecondCarousel";
import TheFooter from "../components/specificComponents/TheFooter";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import axios from "axios";
import Thecard from "../components/sharedComponents/TheCard";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../services/api/config";

function TheKids() {
  const navigate = useNavigate();

  const handleProductClick = (clickedProduct, clickedImage) => {
    navigate(`/product_details/${clickedProduct.id}`, {
      state: { item: clickedProduct, selectedImage: clickedImage },
    });
  };

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const { data } = await axios.get(`${apiConfig.baseUrl}product/`);
      setProducts(data.result);
    } catch (error) {
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div className="bg-neutral-100 px-16">
        <h1 className="mx-[5%] text-5xl py-6 font-bold"></h1>
        <div className="mx-[5%] my-5">
          <SecondCarousel
            products={products?.filter((item) => item.category === "kids")}
            isError={isError}
            handleProductClick={handleProductClick}
          />
        </div>
        <div className="p-5">
          <div className="content">
            <div className="w-[100%] flex flex-wrap gap-[1.4rem]">
              {products
                ?.filter((item) => item.category === "kids")
                ?.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    onClick={() => handleProductClick(item)}
                  >
                    <Thecard {...item} />
                  </div>
                ))}
              <div className="flex justify-center items-center">
                {isError && <h1>{isError}</h1>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16 bg-neutral-100">
        <TailInfoSection />
      </div>
      <TheFooter />
    </div>
  );
}

export default TheKids;
