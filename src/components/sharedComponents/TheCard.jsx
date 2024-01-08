import React from "react";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../../services/api/config";

const Thecard = (props) => {
  const { images, name, discount, price, afterdiscount } = props;
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  return (
    <div className="">
      <div className="relative group">
        <div className="bg-white shadow rounded-sm max-w-sm w-full h-[25rem] overflow-hidden">
          <div className="aspect-w-16 h-[15rem] relative ">
            <img
              className="object-cover w-full h-full transition-transform transform group-hover:scale-105 pb-2"
              src={`${apiConfig.baseUrl}uploads/${images[0].url}`}
              alt="Product Image"
            />
          </div>

          <div className="py-3 h-[50vh] bg-gradient-to-t from-stone-100 to-white">
            {discount && (
              <div className="flex px-4 w-full justify-between items-center">
                <a href="#">
                  <h3 className="mt-2 text-gray-900 font-semibold text-xl tracking-tight">
                    {name}
                  </h3>
                </a>
                <div className="flex">
                  <div className="left bg-red-600 text-sm text-white px-2 py-1 rounded h-7 w-[5rem]">
                    {discount}% OFF
                  </div>
                </div>
              </div>
            )}

            <div className="px-4 ">
              <div className="flex flex-col items-start justify-between py-1">
                <div className="text-xl font-bold">
                  ${discount ? afterdiscount : price}
                </div>
                {discount && (
                  <div className=" font-bold text-sm my-1">
                    <span className="line-through text-lg text-gray-400">
                      ${price}
                    </span>
                  </div>
                )}
              </div>
          <div
            className="flex justify-end"
            onClick={() => handleProductClick(props.id)}
          >
            <p className="hover:text-yellow-500 hover:font-semibold cursor-pointer text-md">View Details</p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thecard;
