import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function TheCartAmountToogle({amount, setDecrease, setIncrease}) {
  return (
      <div className="flex gap-5">
        <button onClick={() => setDecrease()}><FaMinus /></button>
        <div>{amount}</div>
        <button onClick={() => setIncrease()}><FaPlus /></button>
      </div>
  );
}

export default TheCartAmountToogle;
