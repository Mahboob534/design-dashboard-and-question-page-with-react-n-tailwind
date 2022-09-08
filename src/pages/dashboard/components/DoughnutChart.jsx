import React from 'react'



import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  return (
    <div>
        <Doughnut data={data} /> 
    </div>
  )
}

export default DoughnutChart

export const data = {
 
  datasets: [
    {
      label: '# of Votes',
      data: [10, 15, 5, 15],
      backgroundColor: [
        'rgba(104, 100, 122, 1)',
        'rgba(244, 190, 55, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(104, 100, 122, 0.7)',
        
      ],
      borderWidth: 0,
      width:120,
      height:120
    },
  ],
};