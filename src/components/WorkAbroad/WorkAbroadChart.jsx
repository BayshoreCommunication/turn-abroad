import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataHorBar = {
  labels: ['Hijo', 'Hermano', 'Mamá', 'Esposo', 'Padre', 'Pareja', 'Sobrino'],
  datasets: [
    {
      backgroundColor: ['#1890FF'],
      data: [621, 501, 457, 456, 224, 172, 413, 472],
    },
  ],
};

const options = {
  indexAxis: 'y',
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      min: 0,
      max: 700,
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        zeroLineColor: '#F5F5F5',
        borderWidth: 0,
      },
    },
  },
  animation: {
    duration: 0,
    onComplete: function () {
      const chartInstance = this;
      const ctx = chartInstance?.ctx;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      chartInstance.data?.datasets.forEach((dataset, i) => {
        const meta = chartInstance?.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
          const data = dataset.data[index];
          ctx.fillStyle = '#878686';
          ctx.fillText(data, bar.x + 15, bar.y + 7);
        });
      });
    },
  },
};

const WorkAbroadChart = () => {
  return (
    <div style={{ width: '100%' }}>
      <Bar data={dataHorBar} options={options} height={400} />
    </div>
  );
};

export default WorkAbroadChart;
