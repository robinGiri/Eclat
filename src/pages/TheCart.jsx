import React, { useState, useEffect } from "react";
import TheCartProceedToCheckout from "../components/checkout/TheCartProceedToCheckout";
import { CiHeart } from "react-icons/ci";
import { PiTrashLight } from "react-icons/pi";
import "./TheCart.css";
import { useCartContext } from "../custom-hooks/context/TheCartContext";
import { apiConfig } from "../services/api/config";
import TheCartAmountToogle from "../components/checkout/TheCartAmountToogle";
import { IoArrowBackSharp } from "react-icons/io5";

function TheCart() {
  const { cart } = useCartContext();
  const [quantities, setQuantities] = useState({});
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((product) => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const setDecrease = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const setIncrease = (productId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 0;
      return {
        ...prevQuantities,
        [productId]: currentQuantity + 1,
      };
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newQuantities = {};
    cart.forEach((product) => {
      newQuantities[product.id] = selectAll ? 0 : 1;
    });
    setQuantities(newQuantities);
  };

  const handleCheckboxChange = (productId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [productId]: prevQuantities[productId] ? 0 : 1,
      };

      const allSelected = cart.every(
        (product) => newQuantities[product.id] > 0
      );

      setSelectAll(allSelected);
      return newQuantities;
    });
  };
  const total = cart.reduce((acc, product) => {
    const productQuantity = quantities[product.id] || 0;
    return acc + product.afterdiscount * productQuantity;
  }, 0);

  return (
    <div className="flex gap-2 mt-14">
      <div className="w-[10%] flex justify-end mt-9">
        <div className="flex justify-center items-center h-[4vh] gap-1">
        <IoArrowBackSharp className="cursor-pointer"/><button>Back</button>
        </div>
      </div>
      <div className="flex py-5 gap-2 flex-wrap bg-neutral-100 w-[80%]">
        <div className="w-[63%] p-2">
          <div className="flex justify-between items-center bg-white">
            <div className="flex items-center p-2 gap-2 relative">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <p>SELECT ALL</p>
            </div>
            <div className="flex gap-1 cursor-pointer hover:text-orange-600">
              <div>
                <PiTrashLight className="text-2xl" />
              </div>
              <div className="mr-2">Delete</div>
            </div>
          </div>
          <div>
            <div className=" max-h-[34rem] custom-scroll">
              {cart.map((product) => (
                <div key={product.id}>
                  <div className="w-full">
                    <div className="mt-4 bg-white w-full">
                      <div>
                        <div className="border-b-2 mb-2 p-2">
                          <div className="flex items-center gap-2 pt-2 pb-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={quantities[product.id] > 0}
                              onChange={() => handleCheckboxChange(product.id)}
                            />
                            <p>boAt {">"}</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="w-[40%] flex justify-end">
                              <p className="text-xs text-gray-700">
                                Yay! Enjoy free shipping with specific products
                              </p>
                            </div>
                            <p className="text-sm text-gray-700">
                              Earliest Delivery: 19 Dec
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex bg-white justify-between gap-3 flex-wrap p-2">
                        <div className="flex flex-wrap">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={quantities[product.id] > 0}
                              onChange={() => handleCheckboxChange(product.id)}
                            />
                            <img
                              src={`${apiConfig.baseUrl}uploads/${product.image}`}
                              className="w-[150px] h-[150px] p-2"
                              alt={`Product ${product.id} Image`}
                            />
                          </div>
                          <div className="flex flex-col pt-4">
                            <p>{product.name}</p>
                            <p className="text-sm font-light">
                              Boat, Color Family: Beige
                            </p>
                          </div>
                        </div>
                        <div className="w-[50%] px-[5%]">
                          <div className="flex pt-4 flex-wrap gap-20">
                            <div className="flex flex-col gap-2">
                              <p>${product.afterdiscount}</p>
                              <p className="line-through text-slate-500">
                                ${product.price}
                              </p>
                              <p>{product.discount}%</p>
                              <div className="flex gap-2">
                                <CiHeart className="text-xl cursor-pointer" />
                                <PiTrashLight className="text-xl cursor-pointer" />
                              </div>
                            </div>
                            <div>
                              <TheCartAmountToogle
                                amount={quantities[product.id] || 1}
                                setDecrease={() => setDecrease(product.id)}
                                setIncrease={() => setIncrease(product.id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white w-[35%] h-[46%] mt-2">
          <TheCartProceedToCheckout total={total} />
        </div>
      </div>
    </div>
  );
}

export default TheCart;
