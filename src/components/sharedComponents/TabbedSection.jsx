import React, { useState } from "react";
import SecondSectionCarousel from "./carouselComponents/SecondSectionCarousel";
import SecondSectionWomen from "./carouselComponents/SecondSectionWomen";
import SecondSectionMen from "./carouselComponents/SecondSectionMen";
import SecondSectionKids from "./carouselComponents/SecondSectionKids";

function TabbedSection() {
  const [currentTab, setCurrentTab] = useState(1); // Set default tab

  const handleClick = () => {
    navigate("/product_details");
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "Popular",
      content: <SecondSectionCarousel />,
    },
    {
      id: 2,
      tabTitle: "Women",
      content: <SecondSectionWomen />,
    },
    {
      id: 3,
      tabTitle: "Men",
      content: <SecondSectionMen />,
    },
    {
      id: 4,
      tabTitle: "Kids",
      content: <SecondSectionKids />,
    },
  ];

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  return (
    <div>
      <div className="flex p-4 justify-center gap-32 h-[15vh]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${currentTab === tab.id ? 'font-bold text-5xl' : 'text-neutral-500 font-semibold text-2xl'}`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content p-10">
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: currentTab === tab.id ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </div>
      </div>
      
      
    
    
  );
}

export default TabbedSection;
