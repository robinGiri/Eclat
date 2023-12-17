import React, { useState, useEffect } from "react";

const TheCartItem = (props) => {
  const { item } = props;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(item.price);

  // Update total when quantity or item price changes
  useEffect(() => {
    setTotal(quantity * item.price);
  }, [quantity, item.price]);

  function addItem() {
    setQuantity(quantity + 1);
  }

  function subtractItem() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={item.images}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-xs text-gray-700">{item.price}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={subtractItem}
            >
              -
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <span
              className="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={addItem}
            >
              +
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">${total.toFixed(2)}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCartItem;
