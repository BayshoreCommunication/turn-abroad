// chart for students page showing breakdown of costs 
"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Rent - $12,000", "Food - $4,500", "Transport - $1,500"],
  // labels: ['Rent - $12,000', 'Food - $4,500', 'Transport - $1,500'],
  datasets: [
    {
      label: "$",
      data: [12000, 4500, 1500],
      backgroundColor: ["#00BF63", "#FFDE59", "#F94144"],
      borderColor: ["#00BF63", "#FFDE59", "#F94144"],
      borderWidth: 1,
    },
  ],
};
const EmploymentChart = () => {
  return (
    <div className="w-full xl:max-w-lg p-8 h-fit bg-[#F3F9FF]  mx-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default EmploymentChart;
