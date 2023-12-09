import React from "react";
import { useState } from "react";
import TheHeroCarousel from "../components/sharedComponents/TheHeroCarousel";
import TheSecondSectionCarousel from "../components/sharedComponents/TheSecondSectionCarousel";
import ThirdHomepageSection from "../components/specificComponents/thirdHomepageSection";
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

  // hero items
  const hero_items = [
    // Your carousel items
    <img
      src="https://m.media-amazon.com/images/I/61mt4Nbol3L._AC_UY580_.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://aignermunich.ae/media/catalog/product/1/3/133002-0579__1.jpg?width=700&height=700&quality=100&fit=bounds"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://www.apc-us.com/cdn/shop/files/PXBMW-F61859DAN_03_600x.jpg?v=1683754578"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  // hero section carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    vertical: false,
    autoPlay: true, // Enable auto-play
    autoPlayInterval: 2000, // Set the time between slides in milliseconds
    autoPlayStrategy: "default", // Set the auto-play strategy
  };

  // second section in-tab image slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // second section tabs
  const [activeTab, setActiveTab] = useState("popular");
  // images within the tabs
  const [popularImages, setPopularImages] = useState([
    "https://m.media-amazon.com/images/I/61wcdlkB0XL._AC_UY1100_.jpg",
    "popular_image2_url",
    "popular_image3_url",
  ]);

  const [womenImages, setWomenImages] = useState([
    "women_image1_url",
    "women_image2_url",
    "women_image3_url",
  ]);

  const [menImages, setMenImages] = useState([
    "men_image1_url",
    "men_image2_url",
    "men_image3_url",
  ]);

  const [kidsImages, setKidsImages] = useState([
    "kids_image1_url",
    "kids_image2_url",
    "kids_image3_url",
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderImages = () => { };

  return (
    <>
      {/* offers' board */}
      <div className="absolute bg-yellow-50 flex flex-row  items-center justify-center border border-gray-400 border-dashed w-full h-16 overflow-hidden z-10">
        <div className="border-black border-dashed border-spacing-7">
          <p className="marquee my-0 text-center text-xs font-semibold text-red-500 drop-shadow-lg">
            15% Off
          </p>
          <p className="marquee text-center text-xs text-md">
            Use Code: "Christmas"
          </p>
        </div>
      </div>

      <div className="border w-full border-black mt-20 mb-5 h-96">
        <TheHeroCarousel />
      </div>

      {/* Card Background */}
      <div className=" bg-white rounded-lg border border-black h-[120vh] mb-10 ">
        {/* Card Background */}
        <div className="bg-white rounded-lg border border-black m-2 ">
          <div className="bg-neutral-50 flex flex-row justify-start">
            <div
              onClick={() => handleTabClick("popular")}
              className={`cursor-pointer mx-9 ${activeTab === "popular"
                  ? "text-5xl font-bold "
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh]`}
            >
              <p className="py-14">Popular</p>
              {activeTab === "popular" && (
                <div className="border-8 border-black w-[100vh]">
                  <TheSecondSectionCarousel />
                </div>
              )}
            </div>
            <div
              onClick={() => handleTabClick("women")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "women"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Women's
            </div>
            <div
              onClick={() => handleTabClick("men")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "men"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Men's
            </div>
            <div
              onClick={() => handleTabClick("kids")}
              className={`cursor-pointer mx-9 my-14 ${activeTab === "kids"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
                } h-[100vh] `}
            >
              Kid's
            </div>
          </div>

          <div className="border-4 border-red-400">
            {/* Render images based on the active tab */}

            {activeTab === "women" && renderImages(womenImages)}
            {activeTab === "men" && renderImages(menImages)}
            {activeTab === "kids" && renderImages(kidsImages)}
          </div>
        </div>
      </div>

      <ThirdHomepageSection />
      <TailInfoSection />
      <TheFooter />
    </>
  );
}

export default TheHome;
