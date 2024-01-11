import React from "react";
import { FaSearch } from "react-icons/fa";

function TheTopProducts() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-[23px] font-bold m-[10px]">Top products</h1>
          <div className="mx-3">
            <div className="flex felx-row items-center mr-2 border-2 border-slate-300 p-2 w-full rounded-md bg-white">
              <FaSearch className="mx-2 cursor-pointer" />
              <input
                type="text"
                placeholder="Search"
                className="h-full w-full mx-1 outline-none p-1"
              />
              <button className="rounded h-[29px] px-3 bg-black text-white ">
                Enter
              </button>
            </div>
            <div className="m-3 h-[545px] overflow-y-auto flex justify-center items-center">
              <p className="text-[35px] font-bold">Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTopProducts;
