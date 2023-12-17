import React, { useState } from "react";
import TheCartItem from "../components/checkout-page/TheCartItem";
import product from "../data/data";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import Khaltitest from "./khaltitest";

function TheCart() {
  const [secret, setSecret] = useState("");
  const [tranaction_id, set_id] = useState(null);
  function checkout() {
    set_id(uuidv4());
    const message =
      "total_amount=100,transaction_uuid=11-201-13,product_code=EPAYTEST";
    const test = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
    const test1 = test.toString(CryptoJS.enc.Base64);
    setSecret(test1);
  }
  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* <!--Add cart here--> */}
          {product.slice(0, 3).map((item) => (
            <TheCartItem item={item} />
          ))}
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
              <Khaltitest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCart;
