import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import { BsGraphUpArrow } from "react-icons/bs";

function TheAverageRevenue() {
  const data = {
    datasets: [
      {
        label: "Orders",
        data: [10, 15, 8, 12, 20, 18, 14],
        backgroundColor: [
          "rgba(241,241,0, 0.7)",
          "rgba(169,255,167, 0.7)",
          "rgba(67,242,242, 0.7)",
          "rgba(99,99,255, 0.7)",
          "rgba(176,109,243, 0.7)",
          "rgba(255,115,115, 0.7)",
          "rgba(255,175,92, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="h-[25vh]  flex justify-between">
        <div className="w-full p-3 flex flex-col gap-9">
          <h1 className="text-xl font-bold">Average Revenue</h1>
          <div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-2xl font-bold">Rs.250000</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 py-1 px-2 rounded text-[#037400] bg-[#A9FFA7]">
                  <BsGraphUpArrow />
                  <p>20%</p>
                </div>
                <div>
                  <p className="text-gray-500">Rs.30000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full -mt-1">
          <PolarArea data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default TheAverageRevenue;
