import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";

import { FcShipped } from "react-icons/fc";

const TheOrderTracker = () => {
  const [ordered, setOrdered] = useState(0);
  const [shipped, setShipped] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const text = "text-blue-700";
  return (
    <div>
      <div className=" bg-neutral-100 block rounded-lg text-center">
        <div className="text-5xl flex items-center justify-center gap-5">
          <div className={`flex items-center gap-5 ${ordered && text}`}>
            <div>
              <FaRegCheckCircle />
            </div>
            <div>
              <p className="">-----</p>
            </div>
          </div>
          <div className={`flex items-center gap-5 ${shipped && text}`}>
            <div>
              <LiaShippingFastSolid />
            </div>
            <div>
              <p className="">-----</p>
            </div>
          </div>
          <div>{delivered ? <FcShipped /> : <MdOutlineLocalShipping />}</div>
        </div>
      </div>
    </div>
  );
};

export default TheOrderTracker;
