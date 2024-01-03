import React from "react";
import { useState } from "react";
import TheHeroCarousel from "../components/sharedComponents/carouselComponents/TheHeroCarousel";
import ThirdHomepageSection from "../components/specificComponents/ThirdHomepageSection";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";
import TheProductDetails from "./TheProductDetails";
import { useNavigate, Link } from "react-router-dom";
import TabbedSection from "../components/sharedComponents/TabbedSection";
import Thecard from "../components/sharedComponents/TheCard";
import products from "../data/products";

function TheHome() {
  // Get the current path from the location prop
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleDragStart = (e) => e.preventDefault();

  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  const handleMensClick = () => {
    navigate(`/mens`);
  };

  const handleWomensClick = () => {
    navigate(`/women`);
  };

  const handleKidsClick = () => {
    navigate(`/kids`);
  };


 



  return (
    <div>
      <div className="bg-neutral-100">
        <div className="mx-10 bg-gradient-to-t from-white to-teal-50 flex items-center h-[75vh] justify-center gap-4 relative">
          <div className="w-[20%] h-[65vh] relative ">
            <div>
              <img
                src="https://cdn.flipsnack.com/template/3056/medium.jpg?v=1573806152"
                alt="Advertisement"
                className="h-[64vh] w-[100%] cursor-pointer"
              />
            </div>
          </div>

          <div className="h-[460px]">
            <TheHeroCarousel />
          </div>

          <div className="w-[22%] h-[65vh] relative">
            <div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/st-patrick-s-day-sale-design-with-clover-typography-letters_1314-1271.jpg?w=2000"
                  alt="Advertisement"
                  className="w-[100%] h-[64vh] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* sections */}

        <div className="mt-3 mx-10 p-4 bg-white">
          
          {/* Seasonal section */}
          <div className="p-5  rounded-md">
            <h1 className="font-bold p-4 text-4xl px-4">Seasonal</h1>
            <div className="flex flex-wrap">
              {products
                .filter((product) => product.category === "sales")
                .slice(0, 4) // Limit the number of items 
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    onClick={() => handleProductClick(item.id)}
                  >
                    <Thecard {...item} />
                  </div>
                ))}
            </div>
            <div className=" flex justify-end px-5 py-6">
            <h2 className="hover:font-bold hover:text-yellow-500 cursor-pointer text-lg" >View More {">"}</h2>
            </div>
            
          </div>

          {/* Men's section______________________________________________________________________ */}

          <div className="p-5  rounded-md">
            <h1 className="font-bold text-4xl p-4 px-4">Men's</h1>
            <div className="flex flex-wrap">
              {products
                .filter((product) => product.category === "mens")
                .slice(0,4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    onClick={() => handleProductClick(item.id)}
                  >
                    <Thecard {...item} />
                  </div>
                ))}
            </div>
            <div className=" flex justify-end px-5 py-6">
            <h2 className="hover:font-bold  hover:text-yellow-500  cursor-pointer text-lg" onClick={handleMensClick}>View More {">"}</h2>
            </div>
          </div>

          {/* Women's section______________________________________________________________________ */}

          <div className="p-5 rounded-md ">
            <h1 className="font-bold text-4xl p-4 px-4">Women's</h1>
            <div className="flex flex-wrap">
              {products
                .filter((product) => product.category === "womens")
                .slice(0,4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    onClick={() => handleProductClick(item.id)}
                  >
                    <Thecard {...item} />
                  </div>
                ))}
            </div>
            <div className=" flex justify-end px-5 py-4">
            <h2 className="hover:font-bold  hover:text-yellow-500 cursor-pointer text-lg" onClick={handleWomensClick}>View More {">"}</h2>
            </div>
          </div>

          {/* Kids section______________________________________________________________________ */}

          <div className="p-5 rounded-md">
            <h1 className="font-bold text-4xl p-4 px-4">Kids'</h1>
            <div className="flex flex-wrap">
              {products
                .filter((product) => product.category === "kids")
                .slice(0,4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    onClick={() => handleProductClick(item.id)}
                  >
                    <Thecard {...item} />
                  </div>
                ))}
            </div>
          <div className=" flex justify-end px-5 py-6">
            <h2 className="hover:font-bold  hover:text-yellow-500  cursor-pointer text-lg" onClick={handleKidsClick}>View More {">"}</h2>
            </div>
          </div>
        </div>

        <div className="mx-6 p-4">
          <ThirdHomepageSection />
        </div>

        <div className="mt-28 p-10">
          <TailInfoSection />
        </div>
      </div>

      <TheFooter />
    </div>
  );
}

export default TheHome;
