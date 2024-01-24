import React from "react";
import { HiOutlinePlusSmall,HiOutlineMinusSmall } from "react-icons/hi2";

function TheCartAmountToggle({ productId, setDecrease, setIncrease, amount }) {
  return (
    <div className="flex justify-between w-[5rem]">
      <button onClick={() => setDecrease(productId)}>
        <HiOutlineMinusSmall className="hover:text-green-700"/>
      </button>
      <div>{amount}</div>
      <button onClick={() => setIncrease(productId)}>
        <HiOutlinePlusSmall className="hover:text-green-700"/>
      </button>
    </div>
  );
}

export default TheCartAmountToggle;
