import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import { BsGraphDownArrow } from "react-icons/bs";

function TheCustomerReturn() {
  const data = {
    datasets: [
      {
        label: "Orders",
        data: [10, 15, 8, 12, 20, 18, 14],
        backgroundColor: [
          "rgba(255, 160, 120, 0.7)",
          "rgba(222,75,75, 0.7)",
          "rgba(244,130,81, 0.7)",
          "rgba(186,51,51, 0.7)",
          "rgba(123,23,23, 0.7)",
          "rgba(176,48,48, 0.7)",
          "rgba(248,125,55, 0.7)",
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
          <h1 className="text-xl font-bold">Customer Return</h1>
          <div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-2xl font-bold">7956</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 py-1 px-2 rounded text-[#740000] bg-[#FFA7A7]">
                  <BsGraphDownArrow />
                  <p>15%</p>
                </div>
                <div>
                  <p className="text-gray-500">6759</p>
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
export default TheCustomerReturn;
