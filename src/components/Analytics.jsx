import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function Analytics() {
  const data = {
    labels: ['Salary', 'Gifts', 'Refunds', 'Others'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [30000, 500, 1000, 7000],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(55, 205, 286)'],
        hoverOffset: 4,
      },
    ],
  };


  const config = {
    type: 'doughnut',
    data: data,
  };

  return (
    <div>
      <h2> Component</h2>
      <div style={{minWidth:"500px"}}>
        <h3>Income Chart</h3>
        <Doughnut data={config.data} options={{}} />
      </div>
      <div>
        <h3>Expense Chart</h3>
        <Doughnut data={config.data} options={{}} />
      </div>
    </div>
  );
}

export default Analytics;
