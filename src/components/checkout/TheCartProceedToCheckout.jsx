import React from "react";
import { useNavigate, Link } from "react-router-dom";

function TheCartProceedToCheckout({ total }) {
  const navigate = useNavigate();
  const handleCartOrderPlace = () => {
    navigate("/cart/place-order");
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-semibold">Order Summary</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-[13px]">Subtotal (7 items)</p>
          <p className="text-gray-500">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-[13px]">Shipping Fee</p>
          <p className="text-gray-500">$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-[13px]">Shipping Fee Discount</p>
          <p className="text-gray-500">-$120</p>
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="border w-[78%] p-2 focus:outline-none rounded-md"
          />
          <button className="text-sm  p-2 px-4 border hover:text-green-500 hover:border-green-500 rounded-md">
            APPLY
          </button>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-500">Total</p>
          <p className="text-gray-500">${total}</p>
        </div>
        <div>
          <Link to="/cart/place-order" onClick={handleCartOrderPlace}>
          <button className="border w-full p-2 mt-4 rounded-md hover:text-green-500 hover:border-green-500 text-[13px]">
            PROCEED TO CHECKOUT
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TheCartProceedToCheckout;
