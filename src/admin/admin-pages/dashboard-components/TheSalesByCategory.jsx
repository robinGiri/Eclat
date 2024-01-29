import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function TheSalesByCategory() {
  const data = {
    labels: ["Mens", "Womens", "Kids"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <div>
        <h1 className="text-[25px] font-bold">Sales by Category</h1>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default TheSalesByCategory;
