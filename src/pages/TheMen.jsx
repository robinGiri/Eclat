import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SecondSectionMen from '../components/sharedComponents/carouselComponents/SecondSectionMen'
import TheFooter from '../components/specificComponents/TheFooter'
import Thecard from '../components/sharedComponents/TheCard'
import products from '../data/products';
import TailInfoSection from "../components/specificComponents/TailInfoSection";

const url = "http://localhost:4000/api/v1/product";
function TheMen() {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const tabs = [
    {
      id: 1,
      tabTitle: "Business",
      content: <h1>Business</h1>,
    },
    {
      id: 2,
      tabTitle: "School",
      content: <h1>School</h1>,
    },
    {
      id: 3,
      tabTitle: "Outdoors",
      content: <h1>Outdoors</h1>,
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
      <div className='px-16'>
        <div className="mx-[5%] my-5">
          <SecondSectionMen />
        </div>
        <div>
          <div className="flex mx-[5%] my-5 justify-start space-x-8 h-[5vh]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${currentTab === tab.id ? 'font-bold text-2xl' : 'text-neutral-500 font-semibold text-xl'}`}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className="content">
            {tabs.map((tab) => (
              <div key={tab.id} style={{ display: currentTab === tab.id ? 'block' : 'none' }}>
                <div className="flex flex-wrap">
                  {products.filter((product) => product.category === 'mens').map((item) => (
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
      <div className="my-4">
        <TailInfoSection />
      </div>
      <TheFooter />
    </>
  )
}

export default TheMen;
