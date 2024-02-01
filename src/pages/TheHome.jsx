import React, { useState, useEffect } from "react";
import TheHeroCarousel from "../components/sharedComponents/carouselComponents/TheHeroCarousel";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate } from "react-router-dom";
import Thecard from "../components/sharedComponents/TheCard";
import { apiConfig } from "../services/api/config";
import images from "../data/carousel-images/HeroCarouselImages";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import { GoArrowRight } from "react-icons/go";
import bag from "../assets/leatherBagOne.gif";
import { MdEdit } from "react-icons/md";

import axios from "axios";

function TheHome() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const lists = [
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="h-[88vh] custom-scroll hidden lg:block md:block">
        <div>
          <div>
            <div className="h-[70vh] shadow-custom-shadow flex justify-center items-center bg-[#ffffff] border mx-[7%] mb-2 rounded border-white">
              <div className="flex justify-center items-center w-[86%] h-full gap-[14rem]">
                <div className="flex flex-col items-start gap-[2rem]">
                  <div
                    className="text-4xl flex flex-col items-start gap-[2rem]"
                  >
                    <p className="customize">Customize</p>
                    <p  className="customize">Your</p>
                  </div>
                  <div>
                    <div>
                      <p className="text-4xl">
                        <span className="zooming-char">C</span>
                        <span className="zooming-char">o</span>
                        <span className="zooming-char">l</span>
                        <span className="zooming-char">o</span>
                        <span className="zooming-char">r</span>
                        <span className="zooming-char">s</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <img
                    src={bag}
                    className="w-[300px] rounded-full transition-transform transform hover:scale-105"
                    alt="Eclat Logo"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="/customize/product"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white p-4 rounded-full">
                        <MdEdit className="text-[2.5rem] text-gray-600 hover:text-gray-800 cursor-pointer" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1 mx-[7%] flex flex-col gap-2">
              {lists.map((list) => (
                <div
                  className="rounded-md border border-white shadow-custom-shadow"
                  key={list.id}
                >
                  <h1 className="font-semibold text-2xl mx-3 mt-2">
                    {list.name}
                  </h1>
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
              <div className="border border-white shadow-custom-shadow rounded">
                <p className="font-semibold text-2xl mx-3 mt-2">Seasonal</p>
                <div className="h-[70vh] flex justify-center items-center gap-1">
                  <div>
                    <img
                      src="https://cdn.flipsnack.com/template/3056/medium.jpg?v=1573806152"
                      alt="Advertisement"
                      className="h-[460px] w-[400px]"
                    />
                  </div>
                  <div className="h-[460px]">
                    <TheHeroCarousel images={images} />
                  </div>
                  <div>
                    <img
                      src="https://img.freepik.com/premium-vector/st-patrick-s-day-sale-design-with-clover-typography-letters_1314-1271.jpg?w=2000"
                      alt="Advertisement"
                      className="h-[460px] w-[400px]"
                    />
                  </div>
                </div>
              </div>
              <TailInfoSection />
            </div>
            <TheFooter />
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden h-[93.6vh] custom-scroll">
        <div>
          <div className="h-[26vh] flex justify-between shadow-custom-shadow">
            <div className="w-[180px]">
              <div className="h-full flex flex-col p-10 pl-[4rem]">
                <div className="text-2xl leading-10">
                  <p className="font-bold">Customize</p>
                  <p className="mt-3">Your</p>
                </div>
                <div>
                  <p className="text-2xl">
                    <span className="zooming-char">C</span>
                    <span className="zooming-char">o</span>
                    <span className="zooming-char">l</span>
                    <span className="zooming-char">o</span>
                    <span className="zooming-char">r</span>
                    <span className="zooming-char">s</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[250px]">
              <img src={bag} alt="Eclat Bag" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 flex flex-col gap-2">
            {lists.map((list) => (
              <div
                className="rounded-md border border-white shadow-custom-shadow"
                key={list.id}
              >
                <h1 className="font-semibold text-2xl mx-3 mt-2">
                  {list.name}
                </h1>
                <div className="flex flex-wrap p-2">
                  <div className="w-full flex justify-around flex-wrap gap-2">
                    {products
                      .filter((product) => product.category === list.id)
                      .slice(0, 4)
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
            <TheFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheHome;
