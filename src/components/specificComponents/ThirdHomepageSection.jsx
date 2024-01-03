import React from "react";
import Thecard from "../sharedComponents/TheCard";
import products from "../../data/products";

export default function ThirdHomepageSection() {
  return (
    <div>
      <div className="bg-neutral-50 ">
        <div className=" bg-white flex items-center ">
          <h1 className="font-bold text-5xl p-12">Customize Product</h1>
        </div>
        <div className="px-12 pb-10 bg-white">
          <div className="flex">
            {products
              .filter((product) => product.category === "custom")
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
        </div>
      </div>
    </div>
  );
}
