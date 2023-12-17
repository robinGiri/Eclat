import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SecondSectionWomen from '../components/sharedComponents/carouselComponents/SecondSectionWomen'
import TheFooter from '../components/specificComponents/TheFooter'
import Thecard from '../components/sharedComponents/TheCard'
import products from '../data/products';
import TailInfoSection from "../components/specificComponents/TailInfoSection";

function TheWomen() {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const tabs = [
    {
      id: 1,
      tabTitle: "Luxury",
      content: <h1>Luxury</h1>,
    },
    {
      id: 2,
      tabTitle: "Handbags",
      content: <h1>Handbags</h1>,
    },
    {
      id: 3,
      tabTitle: "Purse",
      content: <h1>Purse</h1>,
    },
    {
      id: 4,
      tabTitle: "Sale",
      content: <h1>Sale</h1>,
    },
  ];

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  return (
    <>
      <div className='bg-neutral-100 px-16'>
        <h1 className="mx-[5%] text-5xl py-6 font-bold">Women</h1>
        <div className="mx-[5%] my-5">
          <SecondSectionWomen />
        </div>
        <div className="p-5">
          <div className="flex mx-[5%] my-5 justify-center space-x-8 h-[5vh]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${currentTab === tab.id ? 'font-bold text-3xl' : 'text-neutral-500 font-semibold text-2xl'}`}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className="content">
            {tabs.map((tab) => (
              <div key={tab.id} style={{ display: currentTab === tab.id ? 'block' : 'none' }}>
                <div className="flex flex-wrap">
                  {products.filter((product) => product.category === 'womens').map((item) => (
                    <div
                      onClick={() => handleProductClick(item.id)}
                      key={item.id}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                    >
                      <Thecard {...item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-16 bg-neutral-100">
        <TailInfoSection />
      </div>
      <TheFooter />
    </>
  )
}

export default TheWomen
