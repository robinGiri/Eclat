import React from "react";
import { useState } from "react";
import TheHeroCarousel from "../components/sharedComponents/carouselComponents/TheHeroCarousel";
import ThirdHomepageSection from "../components/specificComponents/ThirdHomepageSection";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";
import TheProductDetails from "./TheProductDetails";
import { useNavigate, Link } from "react-router-dom";
import TabbedSection from "../components/sharedComponents/TabbedSection";

function TheHome() {
  // Get the current path from the location prop
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleDragStart = (e) => e.preventDefault();

  const handleClick = () => {
    navigate("/product_details");
  };

  return (
    <div>
      <div className="bg-neutral-50">
        <div className="mx-14 bg-gradient-to-t from-white to-teal-50 flex items-center h-[75vh] justify-center gap-2 relative">
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

          <div className="w-[20%] h-[65vh] relative">
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

        <div className="mx-10 p-4 bg-neutral-50 z-10">
          <TabbedSection />
        </div>

        <div className="mx-10 p-4">
          <ThirdHomepageSection />
        </div>

        <div className="mt-28">
          <TailInfoSection />
        </div>
      </div>

      <TheFooter />
    </div>
  );
}

export default TheHome;
