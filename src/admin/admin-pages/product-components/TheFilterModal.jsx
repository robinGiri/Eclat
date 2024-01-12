import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function TheFilterModal({ closeModal, applyFilter }) {
  const [minPrice, setMinPrice] = useState(
    localStorage.getItem("minPrice") || ""
  );
  const [maxPrice, setMaxPrice] = useState(
    localStorage.getItem("maxPrice") || ""
  );

  const handleApplyFilter = () => {
    applyFilter(Number(minPrice), Number(maxPrice));
    localStorage.setItem("minPrice", minPrice);
    localStorage.setItem("maxPrice", maxPrice);
    closeModal();
  };

  const isFilterButtonDisabled = !(minPrice && maxPrice);

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex flex-col relative">
            <IoClose
              onClick={closeModal}
              className="cursor-pointer absolute top-2 right-2 text-2xl z-50"
              title="Close"
            />
            <div className="flex flex-col gap-3 mx-[5%] mt-[5%]">
              <div>
                <p className="text-sm font-semibold text-gray-100">
                  Price Range
                </p>
              </div>
              <div className="flex gap-5">
                <div className="relative">
                  <label
                    htmlFor="minPrice"
                    className="absolute left-2 top-[16%]"
                  >
                    Rs.
                  </label>
                  <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min"
                    className="border border-gray-300 rounded-md p-2 pl-11 text-sm focus:outline-none"
                  />
                </div>
                <p className="flex items-center font-semibold text-gray-100">
                  To
                </p>
                <div className="relative">
                  <label
                    htmlFor="maxPrice"
                    className="absolute left-2 top-[16%]"
                  >
                    Rs.
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max"
                    className="border border-gray-300 rounded-md p-2 pl-11 text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleApplyFilter}
                  disabled={isFilterButtonDisabled}
                  className={`rounded-md px-1 border border-gray-300 ${
                    isFilterButtonDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheFilterModal;
