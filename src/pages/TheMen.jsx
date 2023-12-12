import React from "react";
import Thecard from "../components/men-page/Thecard";
import products from "../components/men-page/data";

function TheMen() {
  return (
    <div className="flex flex-wrap">
      {products.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <Thecard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TheMen;
