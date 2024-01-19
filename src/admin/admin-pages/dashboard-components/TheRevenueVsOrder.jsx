import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

function TheRevenueVsOrder() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Total Sales",
        data: [
          1000, 1200, 800, 1500, 2000, 1800, 2500, 2200, 1700, 1900, 2100, 2300,
        ],
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Total Orders",
        data: [20, 25, 18, 30, 35, 28, 40, 38, 32, 36, 42, 45],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
      },
    },
  };

  return (
    <div className="border border-white min-w-[380px] max-w-full h-[300px] rounded-2xl flex justify-center items-center bg-white shadow-custom-shadow">
      <h1 className="text-[25px] font-bold m-[10px]">Total Sales and Orders</h1>
      <Line data={data} options={options} />
    </div>
  );
}

export default TheRevenueVsOrder;
