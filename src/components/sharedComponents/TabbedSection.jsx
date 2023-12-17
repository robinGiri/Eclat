import React, { useState } from "react";
import SecondSectionCarousel from "./carouselComponents/SecondSectionCarousel";
import SecondSectionWomen from "./carouselComponents/SecondSectionWomen";
import SecondSectionMen from "./carouselComponents/SecondSectionMen";
import SecondSectionKids from "./carouselComponents/SecondSectionKids";
import Thecard from "./TheCard";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";

function TabbedSection() {
  const [currentTab, setCurrentTab] = useState(1); // Set default tab
  const navigate = useNavigate();



  const tabs = [
    {
      id: 1,
      tabTitle: "Popular",
      content: <SecondSectionCarousel />,
    },
    {
      id: 2,
      tabTitle: "Women",
      content: (
        <div>
          <SecondSectionWomen />

          <div className="flex flex-wrap p-2">
          {products.filter((product) => product.category === "womens").map((item)=>
          
          <div 
            onClick={() => handleProductClick(item.id)}
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-1"
          >
            <Thecard {...item} />
          </div>
          
          )}
        </div>
        <div onClick={() => navigate("/women")} className="cursor-pointer w-[95%] flex justify-end hover:font-bold hover:underline">View More -&gt;</div>
        </div>
      ),
    },
    {
      id: 3,
      tabTitle: "Men",
      content: (
        <div>
          <SecondSectionMen />

          <div className="flex flex-wrap p-2">
          {products.filter((product) => product.category === "mens").map((item)=>
          
          <div 
            onClick={() => handleProductClick(item.id)}
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-1"
          >
            <Thecard {...item} />
          </div>
          
          )}
        </div>
          <div onClick={() => navigate("/men")} className="cursor-pointer w-[95%] flex justify-end hover:font-bold hover:underline">View More -&gt;</div>
        </div> 
      ),
    },
    {
      id: 4,
      tabTitle: "Kids",
      content: (
        <div>
          <SecondSectionKids />

          <div className="flex flex-wrap p-2">
          {products.filter((product) => product.category === "kids").map((item)=>
          
          <div 
            onClick={() => handleProductClick(item.id)}
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-1"
          >
            <Thecard {...item} />
          </div>
          
          )}
        </div>
        <div onClick={() => navigate("/kids")} className="cursor-pointer w-[95%] flex justify-end hover:font-bold hover:underline">View More -&gt;</div>
        </div>
      ),
    },
  ];

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };


  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  return (
    <div>
      <div className="bg-white">
        <div className="flex pt-4 justify-center gap-32 h-[15vh]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`${
                currentTab === tab.id
                  ? "font-bold text-5xl"
                  : "text-neutral-500 font-semibold text-2xl"
              }`}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className="content p-10" style={{height: currentTab === 1 ? '100vh' : '250vh'}}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{ display: currentTab === tab.id ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabbedSection;
