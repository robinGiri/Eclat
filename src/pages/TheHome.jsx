import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function TheHome() {
  // hero section carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    vertical: false,
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
    'popular_image1_url',
    'popular_image2_url',
    'popular_image3_url',
  ]);
  
  const [womenImages, setWomenImages] = useState([
    'women_image1_url',
    'women_image2_url',
    'women_image3_url',
  ]);

  const [menImages, setMenImages] = useState([
    'men_image1_url',
    'men_image2_url',
    'men_image3_url',
  ]);

  const [kidsImages, setKidsImages] = useState([
    'kids_image1_url',
    'kids_image2_url',
    'kids_image3_url',
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // third section column
  const handleRowClick = (info) => {
    // Handle the click event for each row
    console.log(`Clicked on: ${info}`);
  };

  // as the function says
  const renderCard = (imageUrl, index) => (
    <div key={index} className="border p-7 mx-2">
      <img
        src={imageUrl}
        alt={`Carousel Item ${index + 1}`}
        className="my-10 w-64 h-64 object-cover"
      />
    </div>
  );

  const renderImages = (imageArray) => (
    <Slider {...settings} className="flex flex-row overflow-hidden">
      {imageArray.map(renderCard)}
    </Slider>
  );
  

  return (
    <>
      {/* first homepage section ___________________________________________________________*/}

      {/* offers' board */}
      <div className="absolute bg-yellow-50 flex flex-row  items-center justify-center border border-gray-700 border-dashed w-full h-16 overflow-hidden z-10">
        <div className="border-black border-dashed border-spacing-7">
          <p className="marquee my-0 text-center text-xs font-semibold text-red-500 drop-shadow-lg">
            15% Off
          </p>
          <p className="marquee text-center text-xs text-md">
            Use Code: "Christmas"
          </p>
        </div>
      </div>

      {/* Card Background */}
      <div className="mt-1 bg-white m-2">
        {/* Hero section */}
        <div className=" justify-center overflow-hidden">
          <Slider {...heroSettings} className="w-full">
            {/* Replace these divs with actual carousel items */}
            <div className="flex flex-row mt-10 mx-0">
              <img
                src="https://variety.com/wp-content/uploads/2023/11/POW_LA_2023_GIFT_BAG_1920x1080_V2.jpg"
                alt="Carousel Item 1"
                className="w-full h-64 object-cover my-10"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* second homepage section ___________________________________________________________*/}

      {/* Card Background */}
      <div className=" bg-white rounded-lg border border-black m-2 ">
         {/* Card Background */}
      <div className="bg-white rounded-lg border border-black m-2 ">
      <div className="bg-neutral-50 flex justify-start">
          <div
            onClick={() => handleTabClick('popular')}
            className={`cursor-pointer mx-9 ${
              activeTab === 'popular'
                ? 'text-5xl font-bold '
                : 'font-bold text-neutral-500 text-xl'
            }`}
          >
            <p className="py-14">Popular</p>
          </div>
          <div
            onClick={() => handleTabClick('women')}
            className={`cursor-pointer mx-9 my-14 ${
              activeTab === 'women'
                ? 'text-5xl font-bold'
                : 'font-bold text-neutral-500 text-xl'
            }`}
          >
            Women's
          </div>
          <div
            onClick={() => handleTabClick('men')}
            className={`cursor-pointer mx-9 my-14 ${
              activeTab === 'men'
                ? 'text-5xl font-bold'
                : 'font-bold text-neutral-500 text-xl'
            }`}
          >
            Men's
          </div>
          <div
            onClick={() => handleTabClick('kids')}
            className={`cursor-pointer mx-9 my-14 ${
              activeTab === 'kids'
                ? 'text-5xl font-bold'
                : 'font-bold text-neutral-500 text-xl'
            }`}
          >
            Kid's
          </div>
        </div>

        <div className="mt-2 ">
          {/* Render images based on the active tab */}
          {activeTab === 'popular' && renderImages(popularImages)}
          {activeTab === 'women' && renderImages(womenImages)}
          {activeTab === 'men' && renderImages(menImages)}
          {activeTab === 'kids' && renderImages(kidsImages)}
        </div>
      </div>


        
      </div>``

      {/* third homepage section ___________________________________________________________*/}

      <div className="bg-white rounded-lg border border-black m-2 ">
        <div className=" bg-neutral-50 flex justify-start">
          <h1 className="font-bold text-5xl m-10">More Products</h1>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-2 gap-2">
            {/* First clickable div */}

            <div
              className="h-64 w-120 bg-neutral-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 1 clicked")}
            >
              <p className="font-bold text-6xl p-16">Clothing</p>
            </div>

            {/* Second clickable div */}
            <div
              className="bg-neutral-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 2 clicked")}
            >
              <p className="font-bold text-6xl p-16">Accessories</p>
            </div>

            {/* Third clickable div */}
            <div
              className="h-64 w-120 bg-neutral-600 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
              onClick={() => console.log("Div 3 clicked")}
            >
              <p className="font-bold text-6xl p-16">Shoes</p>
            </div>

            {/* Fourth clickable div */}
            <div
              className="bg-slate-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-red-600"
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
            className="mt-3 cursor-pointer hover:text-neutral-500"
            onClick={() =>
              handleRowClick(
                "Get exclusive access to new product launches – sign up now!"
              )
            }
          >
            Get exclusive access to new product launches – sign up now!
          </div>
          <div
            className="cursor-pointer hover:underline hover:font-bold text-neutral-800"
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
