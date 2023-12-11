import React from "react";
import { FaHeart } from "react-icons/fa";


function TheProductDetails() {
  const handleCartClick = () => {
    setActiveTab("Cart");  // Update activeTab when cart is clicked
    navigate('/cart');
  };
  return (
    <>
      {/* title */}
      <div className="mt-10 mx-10 font-bold rounded-md text-5xl bg-neutral-50 p-4">Product Details</div>

      <div className="flex flex-row w-full h-[100vh] rounded-md mt-7 mx-10">
        {/* div 1  pictures grid*/}
        <div className="content w-[45%] h-[85vh] border rounded-lg border-black bg-neutral-200">
          Product Picture
        </div>
        {/* div 2 */}
        <div className="content mx-2 w-2/4 border rounded-md border-black bg-neutral-50">
          <div className="p-10">
            <p className="text-gray-500"> no. of stock sold </p>
            <div className="mt-3 flex flex-row justify-between ">
              <p className="font-bold text-3xl w-auto">Item name</p>
              <div className="mt-2">
                <FaHeart className=" mx-[5vh] text-neutral-500 text-2xl cursor-pointer transition duration-300 hover:text-red-500" />
              </div>
            </div>
            <p className="text-gray-500 mt-2">Product Category</p>
            <p className="font-semibold mt-10 text-xl">Rs 1500</p>
            <div className="relative inline-block text-left">
              <p className="text-red-400 mt-10">
                Offer Code Usability Description
                Codes Available: 
              </p>
              <select className="mt-4 w-[25vh] border rounded-md p-2">
                <option value="option1">C#ISAWESOME</option>
                <option value="option2">PARAPAPA</option>
                <option value="option3">YEeHAW</option>
              </select>
            </div>
            <div className="description mt-5 w-[65vh]">
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan varius metus, ac fringilla libero hendrerit ac. Nulla facilisi. Nunc euismod, nulla a luctus malesuada, justo ligula rhoncus nulla,Lorem ipsum
                 dolor sit amet, consectetur adipiscing elit. Sed accumsan varius metus, ac fringilla libero hendrerit ac. Nulla facilisi. Nunc euismod, nulla a luctus malesuada, justo ligula
                  rhoncus nulla,</p>
            </div>
            <p className="mt-10 underline font-light hover:font-bold cursor-pointer">Shipping Details</p>

            <button onClick={handleCartClick} className="mt-10 h-[10vh] w-[40vh] bg-neutral-900 text-white font-bold hover:bg-neutral-200 hover:text-black py-2 px-4 w- rounded">Add to Cart</button>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default TheProductDetails;
