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
          <p className="text-xl font-semibold">Order Summary</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Subtotal (7 items)</p>
          <p>${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Shipping Fee</p>
          <p>$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">Shipping Fee Discount</p>
          <p>-$120</p>
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="border w-[78%] p-2 focus:outline-sky-600 rounded-md"
          />
          <button className="bg-sky-500 p-2 px-4 text-white rounded-md">
            APPLY
          </button>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p className="text-orange-500">${total}</p>
        </div>
        <div>
          <Link to="/cart/place-order" onClick={handleCartOrderPlace}>
          <button className="border w-full p-2 mt-4 rounded-md bg-orange-500 hover:bg-orange-600 text-white">
            PROCEED TO CHECKOUT
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TheCartProceedToCheckout;
