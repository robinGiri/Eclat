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
    // <div className="">
    //   <div className="">
    //     <div className="bg-white shadow rounded-sm max-w-sm w-full h-[25rem] overflow-hidden">
    //       <div className="h-[15rem] relative border">
    //         <img
    //           className="object-cover w-full h-full transition-transform transform group-hover:scale-105 pb-2 cursor-pointer"
    //           src={`${apiConfig.baseUrl}uploads/${images[0].url}`}
    //           alt="Product Image"
    //         />
    //       </div>

    //       <div className="py-3 h-[50vh] bg-gradient-to-t from-stone-100 to-white">
    //         {discount && (
    //           <div className="flex px-4 w-full justify-between items-center">
    //             <a href="#">
    //               <h3 className="mt-2 text-gray-900 font-semibold text-xl tracking-tight">
    //                 {name}
    //               </h3>
    //             </a>
    //             <div className="flex">
    //               <div className="left bg-red-600 text-sm text-white px-2 py-1 rounded h-7 w-[5rem]">
    //                 {discount}% OFF
    //               </div>
    //             </div>
    //           </div>
    //         )}

    //         <div className="px-4 ">
    //           <div className="flex flex-col items-start justify-between py-1">
    //             <div className="text-xl font-bold">
    //               ${discount ? afterdiscount : price}
    //             </div>
    //             {discount && (
    //               <div className=" font-bold text-sm my-1">
    //                 <span className="line-through text-lg text-gray-400">
    //                   ${price}
    //                 </span>
    //               </div>
    //             )}
    //           </div>
    //           <div
    //             className="flex justify-end"
    //             onClick={() => handleProductClick(props.id)}
    //           >
    //             <p className="hover:text-yellow-500 hover:font-semibold cursor-pointer text-md">
    //               View Details
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="hidden lg:block md:block">
      <div className="text-sm p-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center w-[230px] h-[250px]">
          <img
            className="w-full h-full object-cover rounded"
            src={`${apiConfig.baseUrl}uploads/${images[0].url}`}
            alt="Product Image"
          />
        </div>
        <div className="p-1">
          <div className="flex justify-between">
            <p>{name}</p>
            <p>
              <span className="bg-red-600 text-white p-1 rounded-md text-xs">
                {discount}% OFF
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <p>${discount ? afterdiscount : price}</p>
            <p className="line-through text-gray-400">${price}</p>
          </div>
          <div className="flex justify-end">
            <p className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
              View details
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>


      <div className="lg:hidden">
      <div className="text-sm pt-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center w-[180px] h-[200px]">
          <img
            className="w-[165px] h-[200px] object-cover rounded"
            src={`${apiConfig.baseUrl}uploads/${images[0].url}`}
            alt="Product Image"
          />
        </div>
        <div className="p-1">
          <div className="flex justify-between">
            <p>{name}</p>
            <p>
              <span className="bg-red-600 text-white p-1 rounded-md text-xs">
                {discount}% OFF
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <p>Rs.{discount ? afterdiscount : price}</p>
            <p className="line-through text-gray-400">Rs.{price}</p>
          </div>
          <div className="flex justify-end">
            <p className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
              View details
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Thecard;
