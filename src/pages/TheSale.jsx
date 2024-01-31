import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TheFooter from "../components/specificComponents/TheFooter";
import Thecard from "../components/sharedComponents/TheCard";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import { apiConfig } from "../services/api/config";
import SecondCarousel from "../components/sharedComponents/carouselComponents/SecondCarousel";

function TheSale() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);

  const getApiData = async () => {
    try {
      const resp = await axios.get(`${apiConfig.baseUrl}product`);
      console.log(resp.data);
      const apiProducts = resp.data.result;
      setProducts(apiProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (clickedProduct) => {
    navigate(`/product_details/${clickedProduct.id}`, {
      state: { item: clickedProduct },
    });
    window.location.reload();
  };

  return (
    <div>
      <div className="h-[88vh] custom-scroll hidden lg:block">
        <div className="mt-10">
          <SecondCarousel
            products={products?.filter((item) => item.category)}
            isError={isError}
            handleProductClick={handleProductClick}
          />
        </div>
        <div className="py-5 mt-10 px-[7%]">
          <div className="content">
            <div className="border border-white shadow-custom-shadow p-3">
              <div className="flex justify-start flex-wrap gap-3 pl-1">
                {products
                  ?.filter((item) => item.category)
                  ?.map((item) => (
                    <div key={item.id} onClick={() => handleProductClick(item)}>
                      <div className="border border-gray-10 shadow-custom-nav-shadow rounded-md flex transition-transform transform hover:scale-105 duration-500 ease-out cursor-pointer">
                        <Thecard {...item} />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center items-center">
                {isError && <h1>{isError}</h1>}
              </div>
            </div>
          </div>
        </div>
        <div className="px-[7%]">
          <TailInfoSection />
        </div>
        <TheFooter />
      </div>

      <div className="lg:hidden md:hidden h-[93.6vh] custom-scroll">
        <h1 className=""></h1>
        <div className="mt-5">
          <SecondCarousel
            products={products?.filter((item) => item.category)}
            isError={isError}
            handleProductClick={handleProductClick}
          />
        </div>
        <div className="mt-5">
          <div className="content">
            <div className="border border-white shadow-custom-shadow p-2">
              <div className="flex justify-around flex-wrap gap-2">
                {products
                  ?.filter((item) => item.category)
                  ?.map((item) => (
                    <div key={item.id} onClick={() => handleProductClick(item)}>
                      <div className="border border-gray-10 shadow-custom-nav-shadow rounded-md flex transition-transform transform hover:scale-105 duration-500 ease-out cursor-pointer">
                        <Thecard {...item} />
                      </div>
                    </div>
                  ))}
                <div className="flex justify-center items-center">
                  {isError && <h1>{isError}</h1>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TailInfoSection />
          <TheFooter />
        </div>
      </div>
    </div>
  );
}

export default TheSale;
