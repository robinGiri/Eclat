import React from "react";

function TheAverageRevenue() {
  return (
    <div>
      <div className="border border-white w-[400px] h-[180px] rounded-2xl bg-white shadow-custom-shadow">
        <div className="flex flex-col gap-4 w-[240px] h-[130px]">
          <h1 className="text-[25px] font-bold m-[10px]">Average Revenue</h1>
          <p className="text-[35px] font-extrabold m-[10px]">$24000</p>
        </div>
      </div>
    </div>
  );
}

export default TheAverageRevenue;
