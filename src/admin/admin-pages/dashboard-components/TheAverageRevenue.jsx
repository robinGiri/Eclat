import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";

function TheAverageRevenue() {
  const data = {
    datasets: [
      {
        label: "Orders",
        data: [10, 15, 8, 12, 20, 18, 14],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 0, 0, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        display: false, // Hide the scale ticks
      },
    },
  };

  return (
    <div className="">
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default TheAverageRevenue;
