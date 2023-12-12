import React from "react";

const Thecard = (props) => {
  const { name, discountPercent, actualRate, rateAfterDiscount, imgSrc } =
    props;

  return (
    <div className="max-w-2xl mx-auto my-10 px-10">
      <div className="relative group">
        <div className="bg-white shadow-md rounded-lg max-w-sm w-full h-[25rem] overflow-hidden">
          <div className="aspect-w-16 h-[15rem] relative">
            <img
              className="object-cover w-full h-full transition-transform transform group-hover:scale-105 pb-2"
              src="https://coach.scene7.com/is/image/Coach/cq629_qbe7v_a0?$mobileProductTile$"
              alt="Product Image"
            />
          </div>

          <div className="px-5 pb-5">
            {discountPercent && (
              <div className="flex">
                <div className="left-2 bg-red-600 text-sm text-white px-2 py-1 rounded h-7 w-[5rem]">
                  {discountPercent}% OFF
                </div>
                <div className="left-2 font-bold text-red-600 px-2 py-0.5">
                  Deal
                </div>
              </div>
            )}

            <div className="flex items-center justify-between py-5">
              <div className="text-2xl font-bold">
                ${discountPercent ? rateAfterDiscount : actualRate}
              </div>
              {discountPercent && (
                <div className="font-bold text-sm my-1">
                  <span className="text-gray-600 px-1">List Price:</span>
                  <span className="line-through text-gray-600">
                    ${actualRate}
                  </span>
                </div>
              )}
            </div>
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
                {name}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thecard;
