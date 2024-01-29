import React, { useState, useEffect } from "react";
import TheHeroCarousel from "../components/sharedComponents/carouselComponents/TheHeroCarousel";
import ThirdHomepageSection from "../components/specificComponents/ThirdHomepageSection";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate } from "react-router-dom";
import Thecard from "../components/sharedComponents/TheCard";
import { apiConfig } from "../services/api/config";
import images from "../data/carousel-images/HeroCarouselImages";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import { GoArrowRight } from "react-icons/go";

import axios from "axios";

function TheHome() {
  const navigate = useNavigate();

  const lists = [
    // { id: "sales", name: "Seasonal" },
    { id: "mens", name: "Men's", path: "/men" },
    { id: "womens", name: "Women's", path: "/women" },
    { id: "kids", name: "Kids's", path: "/kids" },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  const handleViewMoreClick = (path) => {
    navigate(path);
  };

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getApiData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${apiConfig.baseUrl}product/`);
      setProducts(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const [showBorderIndex, setShowBorderIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBorderIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showBorderIndex]);

  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="h-[88vh] custom-scroll">
      <div>
        <div className="h-[70vh] shadow-custom-shadow flex justify-center items-center border border-black bg-">
          <div className="flex justify-center items-center w-[86%] h-full gap-[14rem] border border-red-500">
            <div className="flex flex-col items-center gap-[2rem]">
              <div
                className="text-4xl flex flex-col items-center gap-[2rem]"
                style={{ fontFamily: "Josefin Sans" }}
              >
                <p>Pick</p>
                <p>Your</p>
              </div>
              <div>
                {/* <div className="text-4xl flex">
                  <div
                    className={`flex items-center justify-center gap-2 w-[3.4rem] h-[3.4rem] rounded-full transition border duration-500 ease-in ${
                      showBorderIndex === 0
                        ? "border-gray-500 bg-[#3F3F3F] text-[#FDFF90]"
                        : "border-transparent"
                    }`}
                  >
                    <span className="font-semibold">C</span>
                    <span className="font-semibold">o</span>
                  </div>
                  <div
                    className={`flex items-center justify-center gap-2 w-[3.4rem] h-[3.4rem] rounded-full transition border duration-500 ease-in ${
                      showBorderIndex === 1
                        ? "border-gray-500 bg-[#3F3F3F] text-[#FDFF90]"
                        : "border-transparent"
                    }`}
                  >
                    <span className="font-semibold">l</span>
                    <span className="font-semibold">o</span>
                  </div>
                  <div
                    className={`flex items-center justify-center gap-2 -ml-3 w-[3.4rem] h-[3.4rem] rounded-full transition border duration-500 ease-in ${
                      showBorderIndex === 2
                        ? "border-gray-500 bg-[#3F3F3F] text-[#FDFF90]"
                        : "border-transparent"
                    }`}
                  >
                    <span className="font-semibold">r</span>
                    <span className="font-semibold">s</span>
                  </div>
                </div> */}
                <div>
                  <p className="text-4xl">
                    <span class="zooming-char">C</span>
                    <span class="zooming-char">o</span>
                    <span class="zooming-char">l</span>
                    <span class="zooming-char">o</span>
                    <span class="zooming-char">r</span>
                    <span class="zooming-char">s</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="src/assets/womensBag.gif" className="w-[300px]" />
            </div>
          </div>
        </div>
        <div className="h-[70vh] flex justify-center items-center gap-1 my-7">
          <div>
            <img
                src="https://cdn.flipsnack.com/template/3056/medium.jpg?v=1573806152"
                alt="Advertisement"
                className="h-[460px] w-[350px]"
              />
              </div>
              <div className="h-[460px]">
              <TheHeroCarousel images={images} />
              </div>
              <div>
              <img
                  src="https://img.freepik.com/premium-vector/st-patrick-s-day-sale-design-with-clover-typography-letters_1314-1271.jpg?w=2000"
                  alt="Advertisement"
                  className="h-[460px] w-[350px]"
                />
              </div>
        </div>

        <div className="mt-1 mx-[7%] flex flex-col gap-2">
          {lists.map((list) => (
            <div
              className="rounded-md border border-white shadow-custom-shadow"
              key={list.id}
            >
              <h1 className="font-semibold text-2xl mx-3 mt-2">{list.name}</h1>
              <div className="flex flex-wrap m-3">
                <div className="w-full flex justify-between flex-wrap gap-3">
                  {products
                    .filter((product) => product.category === list.id)
                    .slice(0, 5)
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleProductClick(item.id)}
                      >
                        <div className="border border-gray-10 shadow-custom-nav-shadow rounded-md flex transition-transform transform hover:scale-105 duration-500 ease-out cursor-pointer">
                          <Thecard {...item} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {list.path && (
                <div className="flex justify-end px-5 py-2">
                  <p
                    className="text-sm flex items-center stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]"
                    onClick={() => handleViewMoreClick(list.path)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      className={`${
                        isHovered ? "mr-2" : "mr-0"
                      } transition-margin duration-500`}
                    >
                      View More
                    </span>
                    <GoArrowRight
                      className={`${
                        isHovered ? "transform translate-x-1" : ""
                      }`}
                    />
                  </p>
                </div>
              )}
            </div>
          ))}
          <TailInfoSection />
        </div>
        {/* <div className="mx-6 p-4">
          <ThirdHomepageSection />
        </div>

        <div className="mt-28 p-10">
          <TailInfoSection />
        </div> */}
      </div>

      <TheFooter />
    </div>
  );
}

export default TheHome;
