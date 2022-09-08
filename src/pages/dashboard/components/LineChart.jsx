import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["", "", "", "", "", "", "", "", ""];
const f = [10,6.75, 9,9.5, 11,12,10.3,8.75,13];
export const data = {
  labels,
  enabled: false,

  datasets: [
    {
      fill: true,
      pointStyle: "line",

      data: labels.map((item, index) => f[index]),
      borderColor: "rgba(244, 190, 55, 1)",
      backgroundColor: "rgba(248,221,156,0.3)",

      borderWidth: 3,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    layout: {
      autoPadding: false,
      padding: 0,
    },
   
  },
  scales: {
      
        y: {
            display:false,
            grid: {
                display: false,
              },
        },
        x: {

            grid: {
                display: false,
              },
        }
        
      
    },
  
};

function LineChart() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
