import React from "react";
import { useState, useEffect } from "react";
import TheHeroCarousel from "./home-components/TheHeroCarousel";
import TheSecondSectionCarousel from "./home-components/TheSecondSectionCarousel";

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

  // third section column
  const handleRowClick = (info) => {
    // Handle the click event for each row
    console.log(`Clicked on: ${info}`);
  };

  const renderImages = () => {};

  return (
    <>
      {/* first homepage section ___________________________________________________________*/}

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

      {/* second section ___________________________________________________________*/}

      {/* Card Background */}
      <div className=" bg-white rounded-lg border border-black h-[120vh] mb-10 ">
        {/* Card Background */}
        <div className="bg-white rounded-lg border border-black m-2 ">
          <div className="bg-neutral-50 flex flex-row justify-start">
            <div
              onClick={() => handleTabClick("popular")}
              className={`cursor-pointer mx-9 ${
                activeTab === "popular"
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
              className={`cursor-pointer mx-9 my-14 ${
                activeTab === "women"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
              } h-[100vh] `}
            >
              Women's
            </div>
            <div
              onClick={() => handleTabClick("men")}
              className={`cursor-pointer mx-9 my-14 ${
                activeTab === "men"
                  ? "text-5xl font-bold"
                  : "font-bold text-neutral-500 text-xl"
              } h-[100vh] `}
            >
              Men's
            </div>
            <div
              onClick={() => handleTabClick("kids")}
              className={`cursor-pointer mx-9 my-14 ${
                activeTab === "kids"
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

      {/* third homepage section ___________________________________________________________*/}

      <div className="bg-white rounded-lg border border-black m-2 ">
        <div className=" bg-neutral-50 flex justify-start">
          <h1 className="font-bold text-5xl m-10">More Products</h1>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-2 gap-2">
            {/* First clickable div */}

            <div
              className="h-64 w-120 rounded-b-md bg-neutral-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 1 clicked")}
            >
              <p className="font-bold text-6xl p-16">Clothing</p>
            </div>

            {/* Second clickable div */}
            <div
              className="bg-neutral-500 text-white rounded-b-md p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 2 clicked")}
            >
              <p className="font-bold text-6xl p-16">Accessories</p>
            </div>

            {/* Third clickable div */}
            <div
              className="h-64 w-120 rounded-b-md bg-neutral-600 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 3 clicked")}
            >
              <p className="font-bold text-6xl p-16">Shoes</p>
            </div>

            {/* Fourth clickable div */}
            <div
              className="bg-slate-500  rounded-b-md text-white p-4 cursor-pointer transition duration-300 hover:bg-red-600"
              onClick={() => console.log("Div 4 clicked")}
            >
              <p className="font-bold text-6xl p-16">Request</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom section ___________________________________________________________*/}

      <div className="grid grid-cols-3 gap-4 p-14">
        {/* Help Column */}
        <div>
          <p className="font-bold mb-7">Help</p>
          <div
            className="mb-3 cursor-pointer hover:font-bold hover:underline"
            onClick={() => handleRowClick("Call or Email us")}
          >
            Call or
          </div>
          <div
            className="mb-3 cursor-pointer hover:font-bold hover:underline"
            onClick={() => handleRowClick("Call or Email us")}
          >
            Email
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() => handleRowClick("FAQs")}
          >
            FAQs
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() => handleRowClick("Product Care")}
          >
            Product Care
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500 "
            onClick={() => handleRowClick("Stores")}
          >
            Stores
          </div>
        </div>

        {/* Services Column */}
        <div>
          <p className="font-bold mb-7">Services</p>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() => handleRowClick("Request")}
          >
            Request
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-green-500"
            onClick={() => handleRowClick("Customize")}
          >
            Customize
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() => handleRowClick("Gift")}
          >
            Gift
          </div>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() => handleRowClick("Repairs")}
          >
            Repairs
          </div>
        </div>

        {/* Connect Column */}
        <div>
          <p className="font-bold mb-7">Connect</p>
          <div
            className="mb-3 cursor-pointer hover:text-neutral-500"
            onClick={() =>
              handleRowClick(
                "Get exclusive access to new product launches – sign up now!"
              )
            }
          >
            Get exclusive access to new product launches – sign up now!
          </div>
          <div
            className="mb-3 cursor-pointer hover:underline hover:font-bold text-neutral-800"
            onClick={() => handleRowClick("Follow Us")}
          >
            Follow Us
          </div>
        </div>
      </div>

      {/* footersection ___________________________________________________________*/}

      <footer className="bg-neutral-800 text-white p-8">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <p className="mb-10 text-3xl font-bold font-serif">Eclat</p>
          </div>
          <div className="flex space-x-10">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:font-bold">
              About Us
            </a>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TheHome;
