import React, { useState, useEffect } from "react";
import SecondCarousel from "../components/sharedComponents/carouselComponents/SecondCarousel";
import TheFooter from "../components/specificComponents/TheFooter";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import axios from "axios";
import Thecard from "../components/sharedComponents/TheCard";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../services/api/config";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";

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
    <div className="h-[88vh] custom-scroll">
      <div className="">
        <h1 className=""></h1>
        <div className="mt-10">
          <SecondCarousel
            products={products?.filter((item) => item.category === "kids")}
            isError={isError}
            handleProductClick={handleProductClick}
          />
        </div>
        <div className="py-5 mt-10 px-[7%]">
          <div className="content">
            <div className="border border-white shadow-custom-shadow p-3">
              <div className="flex justify-start flex-wrap gap-3 pl-1">
                {" "}
                {products
                  ?.filter((item) => item.category === "kids")
                  ?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleProductClick(item)}
                    >
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
    </div>
  );
}

export default TheKids;
