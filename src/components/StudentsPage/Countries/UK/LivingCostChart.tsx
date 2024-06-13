"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Rent - £12000', 'Food - £4500', 'Transport - £500'],
  datasets: [
    {
      label: '£',
      data: [12000, 4500, 500],
      backgroundColor: [
        '#00BF63',
        '#FFDE59',
        '#F94144',
      ],
      borderColor: [
        '#00BF63',
        '#FFDE59',
        '#F94144',
      ],
      borderWidth: 1,
    },
  ],
};
const LivingCostChart = () => {
    return (
        <div className='w-full max-w-lg  mx-auto'>
            <Doughnut data={data} />
        </div>
    );
};

export default LivingCostChart;