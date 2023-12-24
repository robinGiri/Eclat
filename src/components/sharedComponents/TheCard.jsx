import React from "react";
// const staticUrl = "http://localhost:4000/api/v1/uploads/";

const Thecard = (props) => {
  const { images, name, discount, price, afterdiscount } = props;

  return (
    <div className="">
      <div className="relative group">
        <div className="bg-white shadow-md rounded-lg max-w-sm w-full h-[25rem] overflow-hidden">
          <div className="aspect-w-16 h-[15rem] relative">
            <img
              className="object-cover w-full h-full transition-transform transform group-hover:scale-105 pb-2"
              src={images}
              alt="Product Image"
            />
          </div>

          <div className="px-5 pb-5">
            {discount && (
              <div className="flex">
                <div className="left-2 bg-red-600 text-sm text-white px-2 py-1 rounded h-7 w-[5rem]">
                  {discount}% OFF
                </div>
                <div className="left-2 font-bold text-red-600 px-2 py-0.5">
                  Deal
                </div>
              </div>
            )}

            <a href="#">
              <h3 className="mt-2 text-gray-900 font-semibold text-xl tracking-tight">
                {name}
              </h3>
            </a>
            <div className="flex flex-col items-start justify-between py-5">
              <div className="text-2xl font-bold">
                ${discount ? afterdiscount : price}
              </div>
              {discount && (
                <div className=" font-bold text-sm my-1">
                  <span className="text-gray-500 px-1">List Price:</span>
                  <span className="line-through text-gray-600">${price}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thecard;
