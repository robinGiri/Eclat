import React from "react";
import { useState } from "react";
import TheHeroCarousel from "../components/sharedComponents/TheHeroCarousel";
import ThirdHomepageSection from "../components/specificComponents/ThirdHomepageSection";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";

function TheHome() {
  // Get the current path from the location prop
  const currentPath = location.pathname;

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="https://www.apc-us.com/cdn/shop/files/PXBMW-F61788BAM_03_960x_c0c5368e-6b92-425d-9483-2578d0ea7172_600x.webp?v=1678828414"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-carryall-pm--M46203_PM2_Front%20view.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-carryall-pm--M46203_PM2_Front%20view.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  

  // // second section in-tab image slider settings
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  
 


  return (
    <div>


    <div className="mx-20 my-2">


      <div className="h-[70vh]">
        <TheHeroCarousel />
      </div>

      <div className="mt-4 border border-gray-400 h-[100vh]">
        Carousel Browse Products
      </div>

      <div className="mt-3">
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
