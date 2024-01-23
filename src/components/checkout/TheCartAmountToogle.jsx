import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function TheCartAmountToogle({ productId, setDecrease, setIncrease, amount }) {
  return (
    <div className="flex gap-5">
      <button onClick={() => setDecrease(productId)}>
        <FaMinus />
      </button>
      <div>{amount}</div>
      <button onClick={() => setIncrease(productId)}>
        <FaPlus />
      </button>
    </div>
  );
}

export default TheCartAmountToogle;
