import React, { useState, useEffect } from "react";
import { getAccessToken } from "../../services/localStorage";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const orderAPI = "http://localhost:4000/api/v1/order";

function TheCartProceedToCheckout({ total }) {
  const [cartId, setCartId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [voucher, setVoucher] = useState(null);
  let orderId;
  const navigate = useNavigate();

  const getData = () => {
    const userData = getAccessToken("user");
    const { Cart, id } = JSON.parse(userData);
    setUserId(id);
    setCartId(Cart[0].id);
  };

  const handleCartOrderPlace = async () => {
    const orderData = { cartId: cartId, userId: userId, voucherId: voucher };
    const {
      data: { message },
    } = await axios.post(orderAPI, orderData);
    orderId = message;
    navigate(`/cart/place-order?orderId=${orderId}`);
  };

  useEffect(() => {
    getData();
  }, []);

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
            onChange={(e) => {
              setVoucher(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-500">Total</p>
          <p className="text-gray-500">${total}</p>
        </div>
        <div>
          <button
            className="border w-full p-2 mt-4 rounded-md hover:text-green-500 hover:border-green-500 text-[13px]"
            onClick={handleCartOrderPlace}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default TheCartProceedToCheckout;
